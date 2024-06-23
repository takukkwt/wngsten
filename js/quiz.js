const questions = [
    { text: "地球は太陽から数えて何番目の惑星ですか？", answer: "3" },
    { text: "太陽系の中で最も大きい惑星は何ですか？", answer: "木星" },
    { text: "月は地球の周りを何日で一周しますか？", answer: "27日" }
];

let currentQuestionIndex = 0;

function loadQuestion() {
    const questionText = document.getElementById('question-text');
    const questionCounter = document.getElementById('question-counter');
    const feedback = document.getElementById('feedback');
    questionText.innerText = questions[currentQuestionIndex].text;
    questionCounter.innerText = `${currentQuestionIndex + 1}問目`;
    feedback.innerHTML = '';
    feedback.className = '';
    document.getElementById('answer').value = '';
}

function checkAnswer() {
    const answer = document.getElementById('answer').value.trim();
    const feedback = document.getElementById('feedback');
    if (answer === questions[currentQuestionIndex].answer) {
        feedback.innerHTML = "〇";
        feedback.className = "correct";
    } else {
        feedback.innerHTML = "×";
        feedback.className = "incorrect";
    }

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            feedback.innerHTML = "クイズ終了！";
            feedback.className = "";
        }
    }, 1000);
}

// 初期クイズ読み込み
loadQuestion();
