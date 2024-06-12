const quizData = [
    {
        question: "정답은?",
        correct: "사우디아라비아",
        image: "https://i.namu.wiki/i/FmFuXL5Hyn9RJMh5-s7lkgk1ryh0tLNSADh60RBbd4uT4_aGXWNog09WI-HSrmSHtU7c1CmnfKsTx4XrWgYcEA.svg"
    },
    {
        question: "정답은?",
        correct: "스코틀랜드",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Flag_of_Scotland.svg/270px-Flag_of_Scotland.svg.png"
    },
    {
        question: "정답은?",
        correct: "라오스",
        image: "https://i.namu.wiki/i/En65PgtBmBO1V_fIvknzdZXhj0t2LnUiT1GVUecGrPUArfRr25rjeoT6gS2Ew1zd2f0LqEIWm-nNeBon5rU-Jg.svg"
    },
    {
        question: "정답은?",
        correct: "홍콩",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Flag_of_Hong_Kong.svg/1200px-Flag_of_Hong_Kong.svg.png"
    },
    {
        question: "정답은?",
        correct: "",
        image: "https://i.namu.wiki/i/0U7QgewQQBmaa5c6EsbZQdbl045T-NTVylXcWoPVWNqPVNARqPOa3IwwsF0HXbqtFBRRXBBPzjBTThmiI12WLg.webp"
    },
    {
        question: "정답은?",
        correct: "",
        image: "https://www.korea.kr/newsWeb/resources/attaches/2016.04/18/PYH2015112305980001300450.jpg"
    },
    {
        question: "정답은?",
        correct: "",
        image: "https://i.pinimg.com/564x/15/17/cf/1517cf2580b202631dc062a1ae54a4d8.jpg"
    },
];

let currentQuiz = 0;
let score = 0;
let timer;
let timeLeft = 25;

const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const quizImage = document.getElementById('quiz-image');
const answerInput = document.getElementById('answer');
const feedbackEl = document.getElementById('feedback');
const timerEl = document.createElement('div');

timerEl.id = 'timer';
timerEl.style.fontSize = '18px';
timerEl.style.marginTop = '10px';
quiz.appendChild(timerEl);

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];

    question
    questionEl.innerText = currentQuizData.question;
    quizImage.src = currentQuizData.image;
    quizImage.style.display = "block";
    answerInput.value = "";
    feedbackEl.innerText = "";
    feedbackEl.style.opacity = 0;

    timeLeft = 25;
    timerEl.innerText = `남은 시간: ${timeLeft}초`;
    clearInterval(timer);
    timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
    timeLeft--;
    timerEl.innerText = `남은 시간: ${timeLeft}초`;

    if (timeLeft <= 0) {
        clearInterval(timer);
        submitAnswer();
    }
}

function submitAnswer() {
    const answer = answerInput.value.trim();
    const currentQuizData = quizData[currentQuiz];

    if (answer.toLowerCase() === currentQuizData.correct.toLowerCase()) {
        score++;
        feedbackEl.innerText = "정답입니다! 👏";
        feedbackEl.classList.add('correct');
    } else {
        feedbackEl.innerText = `"${currentQuizData.correct}" .`;
        feedbackEl.classList.remove('correct');
    }

    feedbackEl.style.opacity = 1;

    currentQuiz++;

    setTimeout(() => {
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            // 퀴즈가 완료되었을 때 페이지 이동 버튼을 표시
            const page2Btn = document.querySelector('.page2-btn');
            page2Btn.style.display = 'block';
            
            // 퀴즈 완료 메시지 표시
            quiz.innerHTML = `
                <h2>퀴즈 완료! 당신의 점수는 ${score}/${quizData.length} 입니다.</h2>
                <button onclick="location.reload()">다시 시작</button>
            `;
        }
    }, 3000); // 3초 후 다음 문제로 이동
}
