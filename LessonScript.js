document.addEventListener("DOMContentLoaded", function () {
   
    const params = new URLSearchParams(window.location.search);

    
    const dropdownIds = ["second", "third", "fourth", "fifth", "sixth", "seventh"];

    
    dropdownIds.forEach(dropdownId => {
        const openDropdownParam = params.get(open${dropdownId.charAt(0).toUpperCase() + dropdownId.slice(1)});

        
        const radioButton = document.getElementById(dropdownId);

        
        if (openDropdownParam === 'true' && radioButton) {
           
            const parentLi = radioButton.closest('li');
            if (parentLi) {
                parentLi.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
            }

            
            radioButton.click();
        }
    });
});

const questions = [
    {
        question: "Find the revenue of a clothing store if the number of clothes sold was twenty and the price per clothes is 150-Peso using the function f(x) = (price per clothing) x (number of clothes sold), where x is the number of clothes sold.",
        answers: [
            {text:"3,000 Pesos", correct: true},
            {text: "5,000 Pesos", correct: false},
            {text: "2,000 Pesos", correct: false}
            
        ]   
    },
    {
        question: "John needs ten apples to cook an apple pie and he only has two apples left. How many more apples does John need to buy from the market?",
        answers:[
            {text:"10 apples", correct: false},
            {text: "5 apples", correct: false},
            {text: "8 apples", correct: true}
            
        ]
    },
    {
        question: "Jose has 100 Pesos in his wallet to buy snacks. He bought a sandwich from the cafeteria worth 50 Pesos during lunch break. How much money does Jose have left?",
        answers:[
            {text:"50 Pesos", correct: true},
            {text: "45 pesos", correct: false},
            {text: "80 pesos", correct: false}
        ]
    },
    {   
        question: "Carla is decorating for her birthday party. She want to tie 4 balloons for every table in the dining room. There are a total of 5 tables in the dining room. How many balloons does she need?",
        answers:[
            {text:"20 ballons", correct: true},
            {text: "5 ballons", correct: false},
            {text: "10 ballons", correct: false}
        ]
    },
    {
        question: "Sarah has 15 apples. She gives 3 apples to her friend and eats 2 herself. How many apples does Sarah have now?",
        answers:[
            {text:"13", correct: false},
            {text: "10", correct: true},
            {text: "9", correct: false}
        ]
    },
    {
        question: "If you find the square root of 9, what is the result?",
        answers:[
            {text:"3", correct: true},
            {text: "4", correct: false},
            {text: "6", correct: false}
        ]
    },
    {
        question: "What is the GCF of 12 and 18?",
        answers:[
            {text:"2", correct: false},
            {text: "3", correct: false},
            {text: "6", correct: true}
        ]
    },
    {
        question: "Find the LCM of 4 and 6.",
        answers:[
            {text:"8", correct: false},
            {text: "12", correct: true},
            {text: "16", correct: false}
        ]
    },
    {
        question: "What is the result of 2³",
        answers:[
            {text:"6", correct: false},
            {text: "8", correct: true},
            {text: "12", correct: false}
        ]
    },
    {
        question: "What is the GCF of 9 and 15",
        answers:[
            {text:"3", correct: true},
            {text: "5", correct: false},
            {text: "6", correct: false  }
        ]
    },
    {
        question: "What is the result of 4²?",
        answers:[
            {text:"8", correct: false},
            {text: "16", correct: true},
            {text: "32", correct: false}
        ]
    },
    {
        question: "Jacob wants to buy 4 packs of stickers. Each pack has 6 stickers. How many stickers does Jacob have in total?",
        answers:[
            {text:"10", correct: false},
            {text: "16", correct: false},
            {text: "24", correct: true}
        ]
    },
    {
        question: "Lily has 18 candies, and she wants to share them equally among her 6 friends. How many candies will each friend get?",
        answers:[
            {text:"3", correct: true},
            {text: "6", correct: false},
            {text: "4", correct: false}
        ]
    },
    {
        question: "Emily has 25 marbles. She wants to arrange them into equal groups of 5. How many groups can she make?",
        answers:[
            {text:"3", correct: false},
            {text: "5", correct: true},
            {text: "4", correct: false}
        ]
    },
    {
        question: "If the GCF of 8 and 12 is taken, what is the result?",
        answers:[
            {text:"2", correct: false},
            {text: "4", correct: true},
            {text: "8", correct: false}
        ]
    },
    {
        question: "Find the LCM of 5 and 7.",
        answers:[
            {text:"12", correct: false},
            {text: "20", correct: false},
            {text: "35", correct: true}
        ]
    },
    {
        question: "If you have 4 groups of 3 cookies, how many cookies do you have in total?",
        answers:[
            {text:"12", correct: true},
            {text: "7", correct: false},
            {text: "10", correct: false}
        ]
    },
    {
        question: "If you take the square root of 25, what do you get?",
        answers:[
            {text:"6", correct: false},
            {text: "4", correct: false},
            {text: "5", correct: true}
        ]
    },
    {
        question: "Find the product of 7 and 8.",
        answers:[
            {text:"56", correct: true},
            {text: "15", correct: false},
            {text: "64", correct: false}
        ]
    },
    {
        question: "If you have 20 candies and share them equally among 4 friends, how many candies will each friend get?",
        answers:[
            {text:"5", correct: true},
            {text: "10", correct: false},
            {text: "4", correct: false}
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions [currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    
    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement ("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    })
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
    if (button.dataset.correct === "true"){
        button.classList.add("correct");
    }    
    button.disabled = true;
    })
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.
    length}!`;
        if (score >= 15){
            alert ("YOU PASSED! CONGRATULATIONS");
        }
        else{
            alert ("you failed...keep studying");
        }
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else {
        showScore();
    }
}


nextButton.addEventListener("click", () =>{
    if (currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})
startQuiz();
