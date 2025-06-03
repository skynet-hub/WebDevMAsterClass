const fs = require("fs")
const os = require("os")

const EventEmitter = require("events")
const logFile = "./logger.txt"

//Let us extend the event emitter class

class Logger extends EventEmitter{
    log(message){
        this.emit('message', {message})
    }
    
}

const logTofile = (event) => {
    const logMessage = `${new Date().toISOString()} - ${event.message}\n`
    fs.appendFileSync(logFile, logMessage)
}


const logger = new Logger();
logger.on('message' ,logTofile)

setInterval(() => {
    const freeMem = os.freemem() / os.totalmem() * 100
    logger.log(`Free memory is: ${freeMem.toFixed(2)}%`)
} , 3000)

logger.log("Application has started")
logger.log("Event has started")