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
    }
    // 추가할 수 있는 퀴즈 데이터
];

let currentQuiz = 0;

function loadQuiz() {
    const quiz = quizData[currentQuiz];
    document.getElementById('question').textContent = quiz.question;
    document.getElementById('quiz-image').src = quiz.image;
    document.getElementById('quiz-image').style.display = 'block';
    document.getElementById('answer').value = '';
    document.getElementById('feedback').textContent = '';
}

function submitAnswer() {
    const answer = document.getElementById('answer').value.trim();
    const quiz = quizData[currentQuiz];

    if (answer === quiz.correct) {
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            document.getElementById('quiz').style.display = 'none';
            document.getElementById('quiz-complete-message').textContent = '퀴즈를 모두 완료했습니다!';
            document.getElementById('page2-container').querySelector('.page2-btn').style.display = 'block';
        }
    } else {
        document.getElementById('feedback').textContent = '땡! 다시!.';
    }
}

window.onload = function() {
    loadQuiz();
};
