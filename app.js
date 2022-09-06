const quizData = [
  {
    question: "Which one of the following is a programming language?",
    a: "HTTP",
    b: "HTML",
    c: "HPML",
    d: "FTP",
    correct: "b",
  },
  {
    question: "Which of the following is not an operating system?",
    a: "DOS",
    b: "Mac",
    c: "C",
    d: "Linux",
    correct: "c",
  },
  {
    question: "Total number of oceans in the World is:",
    a: "3",
    b: "5",
    c: "7",
    d: "12",
    correct: "b",
  },
  {
    question: "What does IT stand for?",
    a: "Information Technology",
    b: "International Technology",
    c: "Internet Technology",
    d: "Intelligent Technology",
    correct: "a",
  },
  {
    question:
      "Which technical term is often used for data centres available over the Internet to many users?",
    a: "Sun computing",
    b: "Sky computing",
    c: "Cloud computing",
    d: "Net computing",
    correct: "c",
  },
];

const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;

loadQuiz();

function loadQuiz() {
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

submitBtn.addEventListener("click", () => {
    currentQuiz++;
    if(currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        //TODO: 
        alert("You finished! Get yourself an Orange Lemonade");
    }

    loadQuiz();
});
