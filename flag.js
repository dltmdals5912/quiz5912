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
        correct: "나이지리아",
        image: "https://i.namu.wiki/i/wLViRc95VIr0lJCd3aSJFuSz9ApP-wvxqhhURJL2zVzzv-Y1PHLr41t68LlMBn7jfaZV7JbQTseDBRFJ-K0_mw.svg"
    },
    {
        question: "정답은?",
        correct: "뉴질랜드",
        image: "https://i.namu.wiki/i/gX5lG3EYA3MioweW0InqWDWG8vcn-Beyza97QxwDlorcUOIDuNp4D_AWhR2yYCtfkpMOFkvWPKN1EGz_qmmeCg.svg"
    },
    {
        question: "정답은?",
        correct: "핀란드",
        image: "https://i.namu.wiki/i/L63kZBKH4XRwF28gmVlryznCQOKTjCHFlXx4tOWYENTADryjks3hWOWsoCt-xhP-HyZemkZxiZqx982YN7K6Xw.svg"
    },
    {
        question: "정답은?",
        correct: "케냐",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Kenya.svg/300px-Flag_of_Kenya.svg.png"
    },
    {
        question: "정답은?",
        correct: "마카오",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhW-Da4v4WlHpQkDn_h0ZGvCU-pm0-4IrQQg&s"
    },
    {
        question: "정답은?",
        correct: "덴마크",
        image: "https://media.istockphoto.com/id/537287201/ko/%EB%B2%A1%ED%84%B0/%ED%94%8C%EB%9E%99-of-denmark.jpg?s=612x612&w=0&k=20&c=LR9EtYzlNStAkuZ1jYWYd284h_MhC2Z96_QEKKbRF6U="
    },
    {
        question: "정답은?",
        correct: "잠비아",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHBJI1qT71RBoOyLZ1QvANY5v6is1KjNRgFw&s"
    },
    {
        question: "정답은?",
        correct: "일본",
        image: "https://i.namu.wiki/i/-N8oAkTeObcDVfXJYW-Ok6jM3XXeFzqM5Tf8o1S42N22nRzp9q24BwBNKtm7CiAc69fOazKw_u-gLh5pfYrNiQ.svg"
    },
    {
        question: "정답은?",
        correct: "싱가포르",
        image: "https://i.namu.wiki/i/JnO8IUdEB-dtWIuzFDe0J3vDvaNN0o28ICx58sLBp4HDY7cjt2XvS-fSwNOV2v9cCaaowUNjX7IKPHU6kjpMAw.svg"
    },
    {
        question: "정답은?",
        correct: "아제르바이잔",
        image: "https://i.namu.wiki/i/IhEozRCLzBF3h5PUGT-aJwSotNg0eAuZTljtMNfApKQxU-tCFVT8fNwWxbpF7muiEo_n1YT5JEI6RnluXtSOtg.svg"
    },
    {
        question: "정답은?",
        correct: "아이슬란드",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/250px-Flag_of_Iceland.svg.png"
    },
    {
        question: "정답은?",
        correct: "캄보디아",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_Cambodia.svg/255px-Flag_of_Cambodia.svg.png"
    },
    {
        question: "정답은?",
        correct: "티베트",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8wxpW76Rj3C_JlqnbReTBDdhh_CF9bBnp6w&s"
    },
    {
        question: "정답은?",
        correct: "호주",
        image: "https://i.namu.wiki/i/hZlNjbXo0IX89XpaVm-OIKTHZdLq3Jt4Qqpb_5AKeXO1K_Ev7LtTDaf7weYNrO9CUBg0Fy37h6_kc2sSyaw77Q.svg"
    },
    {
        question: "정답은?",
        correct: "방글라데시",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Bangladesh.svg/640px-Flag_of_Bangladesh.svg.png"
    },
    {
        question: "정답은?",
        correct: "아프가니스탄",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/28/Flag_of_Islamic_Emirate_of_Afghanistan.png"
    },
    {
        question: "정답은?",
        correct: "멕시코",
        image: "https://i.namu.wiki/i/sMqMCgQQ9bJxrOKc8Jrd3qwHpOioelHduOdpgECNXgH9D7kycZ-Cc3Xg0F0I7DS0SiYgAN6DF_PrB0sUSigedw.svg"
    },
    {
        question: "정답은?",
        correct: "우루과이",
        image: "https://i.namu.wiki/i/7kK9numB46WO1ypZtOZ7BgAYFsbmoUf90Npij7DHx77060yV5PCoFVgn9bVv60G8WKd-mycIuLbpMvLJjgQx7Q.svg"
    },
    {
        question: "정답은?",
        correct: "프랑스",
        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAAC+CAMAAADk8IGfAAAAP1BMVEX///8AJJbuKTr///0/WrH6r7bzX2sAJJQAI5f//f/8//9AWq/4sLPvKTj5rrMAJJJAWbNug8b6s7s9XK5wgsCAClEkAAABo0lEQVR4nO3VzW6EIBSAUey1FXX+OtP3f9aKXXd3SUNzPg1LgieApUiSJP3SnN0+P/bX55q+0Igoz48ulSm52obltaUjNNbbW5fSEaZaj3eOdITW5XodA+HYB8u0p39/NNZhdsLShr3TThgKYe4gsI6DUGtd+iCUso2CcLTUmn8nnA1zJ5z12AnHNfMOAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAA4c8Rau2CsB4GcRkEod6XaVryEbaylnIbBGE5h33NRohYRzoO7d23bIQttiiX6yAIR/f6yDb4qddxmJPbz+cr/fujXQvPjy6lL7atNSJ/1oh2wjpM3KP2J+u11BgFQZL0D/oGSFe+6eZphAQAAAAASUVORK5CYII="
    },
    {
        question: "정답은?",
        correct: "아르헨티나",
        image: "https://i.namu.wiki/i/Xf40ITHK4FVjsjWXvqJaiEzGegbcz9zOPYT7HnOk1sLidlbEMzRJ3Xah5kdgo3DS0Ysb8RMC_JsQKIaOpdOL4Q.svg"
    },
    {
        question: "정답은?",
        correct: "동티모르",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Flag_of_East_Timor.svg/800px-Flag_of_East_Timor.svg.png"
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
