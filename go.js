const quizData = [
    {
        question: "예수가 옷이 작을 때 하는 말은?",
        correct: "십자가",
    },
    {
        question: "말은 영어로 홀스이다. 말이 두마리면?",
        correct: "짝수",
    },
    {
        question: "허수아비의 아들은?",
        correct: "허수",
    },
    {
        question: "정답은?",
        correct: "축구선수",
    },
    {
        question: "채소 장사꾼이 가장 싫어하는 나라(도시)는?",
        correct: "시드니",
    },
    {
        question: "네 사람이 동시에 오줌을 누면?",
        correct: "포뇨",
    },
    {
        question: "중국인이 칼질이 서툴면?",
        correct: "베이징",
    },
    {
        question: "팥이 목 마를 때 콩에게 하는 말은?",
        correct: "콩나물",
    },    {
        question: "팥이 목 마를 때 콩에게 하는 말은?",
        correct: "콩나물",
    },    {
        question: "팥이 목 마를 때 콩에게 하는 말은?",
        correct: "콩나물",
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
