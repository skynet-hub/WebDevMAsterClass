import express from 'express'
import logger from "./logger.js";
import morgan from "morgan";

const app = express()
app.use(express.json())

const morganFormat = ":method :url :status :response-time ms";

app.use(
  morgan(morganFormat, {
    stream: {
      write: (message) => {
        const logObject = {
          method: message.split(" ")[0],
          url: message.split(" ")[1],
          status: message.split(" ")[2],
          responseTime: message.split(" ")[3],
        };
        logger.info(JSON.stringify(logObject));
      },
    },
  })
);

let games = []
let id = 1

//Add a game
app.post("/games", (req, res) => {
    const {name, description} = req.body
    const newGame =  {id: id++, name, description}
    games.push(newGame)
    res.status(201).send(newGame)
})

//List all the games
app.get("/games", (req, res) => {
    res.status(201).send(games)
})

app.get("/games/:id", (req, res) => {
    const game = games.find(g => g.id === req.params.id)

    if (!game){
        res.status(404).send("Game not found")
    }
    res.status(201).send(game)
})

//delete using id

app.delete("/games/:id", (req, res) => {
    const index = games.findIndex(t => t.id === parseInt(req.params.id))
    const game = games[index].name

    if (index === -1){
        res.status(404).send("Game not found")
    }

    res.status(200).send(game)
})

//Let us update an existing game
app.put("/games/:id", (req, res) => {
    const index = games.findIndex(t => t.id === parseInt(req.params.id))

    if (index === -1){
        res.status(404).send("Game not found")
    }
    res.status(200).send("deleted")
})


//Spin up the server on port 3000
const port = 3000
app.listen(port, () => {
    console.log(`Server running on ${port}`);
})