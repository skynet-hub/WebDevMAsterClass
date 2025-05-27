document.addEventListener("DOMContentLoaded", () => {
    const questionContainer = document.querySelector("#question-container");
    const questionTest = document.querySelector("#question-text");
    const choiceList = document.querySelector("#choices-list");
    const restartBtn = document.querySelector("#restart-btn");
    const nextBtn = document.querySelector("#next-btn");
    const resultContainer = document.querySelector("#result-container");
    const scoreDisplay = document.querySelector("#score");
    const startBtn = document.querySelector("#start-btn")

    const questions = [
        {
            question: "What is the capital city of Gauteng",
            choices: ["Johannesburg", "Pretoria", "Durban", "Cape Town", "Bloemfontein"],
            answer: "Johannesburg"
        },
        {
            question: "Awesome coding School in SA",
            choices: ["WethinkCode", "Umuzi", "Hyperndev", "ALX"],
            answer: "WethinkCode"
        },
        {
            question: "Who created Javascript",
            choices: ["Magobo", "Zach", "Brendan Eich", "Guido van Rossum"],
            answer: "Brendan Eich"
        }
    ]

    let currentQuestion = 0;
    let currentScore = 0;

    restartBtn.addEventListener("click", () => {
        resultContainer.classList.add("hidden")
        currentQuestion = 0
        currentScore = 0
        startQuiz();
    })

    startBtn.addEventListener("click", startQuiz);

    nextBtn.addEventListener("click", nextQuestion)
    
    choiceList.addEventListener("click", (e) => selectAnswer(e.target.textContent.trim()))

    function startQuiz(){
        //Reset for next round
        scoreDisplay.textContent = ""
        startBtn.classList.add("hidden");
        questionContainer.classList.remove("hidden")
        showQuestion();

    }

    function showQuestion(){
        nextBtn.classList.add("hidden")
        questionTest.textContent = questions[currentQuestion].question
        const choices = questions[currentQuestion].choices
        choiceList.innerHTML = ""
        choices.forEach(option => {
            const li = document.createElement('li')
            li.innerHTML = `
            ${option}
            `
            choiceList.appendChild(li)
        }) 
    }

    function nextQuestion(){
        currentQuestion++;
        if (currentQuestion < questions.length){
            showQuestion();
        } else {
            questionContainer.classList.add("hidden");
            resultContainer.classList.remove("hidden");
            scoreDisplay.textContent = `${currentScore}/${questions.length}`
        }
       
    }

    function selectAnswer(option){
        if (option === questions[currentQuestion].answer){
            currentScore++
        }
        nextBtn.classList.remove("hidden")
    }
})