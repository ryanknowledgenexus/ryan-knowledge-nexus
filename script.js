// Sample Static Quiz Questions Data
const quizQuestions = [
    {
        question: "What is the unit of electrical resistance?",
        options: ["Volt", "Ampere", "Ohm", "Watt"],
        correct: 2
    },
    {
        question: "In algebra, what is the value of x in the equation 2x + 6 = 14?",
        options: ["3", "4", "5", "6"],
        correct: 1
    },
    {
        question: "Which of the following is an immutable data type in Python?",
        options: ["List", "Dictionary", "Tuple", "Set"],
        correct: 2
    }
];

let currentQuestionIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
    // Cookie / Terms Consent Banner Logic
    const consentBanner = document.getElementById("consentBanner");
    const acceptConsentBtn = document.getElementById("acceptConsentBtn");

    if (!localStorage.getItem("termsAccepted")) {
        consentBanner.style.display = "block";
    }

    acceptConsentBtn.addEventListener("click", () => {
        localStorage.setItem("termsAccepted", "true");
        consentBanner.style.display = "none";
    });

    // Quiz Engine Initialization
    loadQuestion();

    document.getElementById("nextBtn").addEventListener("click", () => {
        currentQuestionIndex = (currentQuestionIndex + 1) % quizQuestions.length;
        loadQuestion();
    });
});

function loadQuestion() {
    const qData = quizQuestions[currentQuestionIndex];
    const qTitle = document.getElementById("quizQuestion");
    const qOptions = document.getElementById("quizOptions");
    const qFeedback = document.getElementById("quizFeedback");
    const nextBtn = document.getElementById("nextBtn");

    qTitle.textContent = `Question ${currentQuestionIndex + 1}: ${qData.question}`;
    qOptions.innerHTML = "";
    qFeedback.textContent = "";
    nextBtn.style.display = "none";

    qData.options.forEach((optText, idx) => {
        const btn = document.createElement("button");
        btn.className = "quiz-btn";
        btn.textContent = optText;
        btn.addEventListener("click", () => checkAnswer(idx, qData.correct, btn));
        qOptions.appendChild(btn);
    });
}

function checkAnswer(selectedIdx, correctIdx, selectedBtn) {
    const allBtns = document.querySelectorAll(".quiz-btn");
    allBtns.forEach(btn => btn.disabled = true);

    const qFeedback = document.getElementById("quizFeedback");

    if (selectedIdx === correctIdx) {
        selectedBtn.classList.add("correct");
        qFeedback.textContent = "Correct answer!";
        qFeedback.style.color = "#155724";
    } else {
        selectedBtn.classList.add("incorrect");
        allBtns[correctIdx].classList.add("correct");
        qFeedback.textContent = "Incorrect. The correct answer is highlighted in green.";
        qFeedback.style.color = "#721c24";
    }

    document.getElementById("nextBtn").style.display = "inline-block";
}
