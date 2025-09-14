const questions = [
    {
        question: "Who was the first Avenger according to the MCU timeline?",
        answer: [
            {text: "thor", correct: false},
            {text: "iron man", correct: false},
            {text: "vicky", correct: false},
            {text: "captain america", correct: true},
        ]
    },
    {
        question: "what is the spider man biggest struggle?",
        answer: [
            {text: "paying rent", correct: true},
            {text: "propose to MJ", correct: false},
            {text: "hanging from webs", correct: false},
            {text: "back pain", correct: false},
        ]
    },
    {
        question: "Who said the famous line “We have a Hulk”?",
        answer: [
            {text: "Captain America", correct: false},
            {text: "Lokesh", correct: false},
            {text: "Amit", correct: false},
            {text: "loki", correct: true},
        ]
    },
    {
        question: "What nickname did Tony Stark give Thor?",
        answer: [
            {text: "jd", correct: false},
            {text: "Buddy", correct: false},
            {text: "point break", correct: true},
            {text: "hammer king", correct: false},
        ]
    },
    {
        question: "If Parliament was a classroom, what subject would it be?",
        answer: [
            {text: "History", correct: false},
            {text: "drama", correct: true},
            {text: "Science", correct: false},
            {text: "english", correct: false},
        ]
    },
    {
        question: "what is the national sport of politicians during election?",
        answer: [
            {text: "kabaddi", correct: false},
            {text: "hockey", correct: false},
            {text: "football", correct: false},
            {text: "blame game", correct: true},
        ]
    },
    {
        question: "what is the national animal of india?",
        answer: [
            {text: "lion", correct: false},
            {text: "dog", correct: false},
            {text: "tiger", correct: true},
            {text: "elephant", correct: false},
        ]
    },
    {
        question: "which country has tajmahal?",
        answer: [
            {text: "australia", correct: false},
            {text: "india", correct: true},
            {text: "bangladesh", correct: false},
            {text: "canada", correct: false},
        ]
    },
    {
        question: "which country has more worldcup trophy in cricket?",
        answer: [
            {text: "australia", correct: true},
            {text: "india", correct: false},
            {text: "bangladesh", correct: false},
            {text: "england", correct: false},
        ]
    },
    {
        question: "which country has heightest population?",
        answer: [
            {text: "australia", correct: false},
            {text: "india", correct: true},
            {text: "china", correct: false},
            {text: "USA", correct: false},
        ]
    },
]

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startquiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect"); 
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startquiz();
    }
})

startquiz();


