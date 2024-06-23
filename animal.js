const animals = [
    { name: "아기아르마딜로", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw2qttq2k6O0d2Fr4KQpG4tC_0Jb8432pbGQ&s" },
    { name: "고양이", image: "https://mblogthumb-phinf.pstatic.net/MjAyMDAyMjRfMjM1/MDAxNTgyNTQ4MjU2MTYx.7DH6I3S3JHJ8ASX4RQ-hJP6tJcATGzkx34dBoIYKG9kg._oyKXp4gs2cX1r438KL3c_YtQT2kUPFwCP9aOly6Fj8g.PNG.vetline/00_%EC%95%84%EA%B8%B0%EA%B3%A0%EC%96%91%EC%9D%B4_%EC%9E%85%EC%96%91_%EC%A4%80%EB%B9%84.PNG?type=w800" },
    { name: "늑대", image: "https://cdn.newspenguin.com/news/photo/201910/756_1220_2343.jpg" },
    { name: "게레눅", image: "https://mblogthumb-phinf.pstatic.net/data29/2007/9/24/113/npecdb_3byuno.jpg?type=w420" },
    { name: "담비", image: "https://www.ntdtv.kr/assets/uploads/2021/08/o40qvr6a199g9wi3lg0o-795x436.jpg" },
    { name: "백호", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOOWRRFA9KiI-mnR8_aozxcr-NWV4Aelqz3g&s" },
    { name: "흰머리수리", image: "https://www.irobotnews.com/news/photo/202008/21956_48992_2735.png" },
    { name: "사막여우", image: "https://cdn.newspenguin.com/news/photo/202302/13479_41605_2043.jpg" },
    { name: "상괭이", image: "https://img.kbs.co.kr/kbs/620/news.kbs.co.kr/data/fckeditor/new/image/2021/05/13/295691620892644017.jpg" },
    { name: "꼴뚜기", image: "https://i.namu.wiki/i/oMo0OgvnTovFCimf1k-uQpsts4FSG_H2nvJo4f0udzNqDBL0j_xUUUMLQRyfYBFlvt-xTwj497i5CcrNXIQuDA.webp" },
    { name: "쿼카", image: "https://res.heraldm.com/content/image/2022/10/12/20221012000744_0.jpg" },
    { name: "캥거루", image: "https://biz.chosun.com/resizer/JednfESAZUOLi4MKu3IA6RkmnVw=/464x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosunbiz/MQRSTFDEEZHQVFS2MLKVRBJVCE.jpg" }
];

let currentAnimalIndex = 0;
let correctAnswers = 0;

function checkAnswer() {
    const userAnswer = document.getElementById('answer').value.toLowerCase();
    const result = document.getElementById('result');

    if (userAnswer === animals[currentAnimalIndex].name) {
        result.textContent = "정답입니다!";
        correctAnswers++;
    } else {
        result.textContent = `"${animals[currentAnimalIndex].name}".`;
    }
    
    currentAnimalIndex++;
    if (currentAnimalIndex < animals.length) {
        setTimeout(loadNextAnimal, 1000); // 1초 후 다음 문제로 넘어감
    } else {
        setTimeout(showCompletionButton, 1000); // 1초 후 완료 버튼 표시
    }
}

function loadNextAnimal() {
    document.getElementById('answer').value = '';
    document.getElementById('result').textContent = '';
    document.getElementById('animal-image').src = animals[currentAnimalIndex].image;
}

function showCompletionButton() {
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('completion-container').style.display = 'block';
    document.getElementById('final-score').textContent = `맞춘 개수: ${correctAnswers}/${animals.length}`;
}

document.addEventListener('DOMContentLoaded', () => {
    loadNextAnimal();
});
