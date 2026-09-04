// =========================================
// RYAN KNOWLEDGE NEXUS
// QUIZ ENGINE
// =========================================

const questions = [
    {
        subject: "Pakistan Affairs",
        question: "Which constitutional amendment abolished the Concurrent Legislative List in Pakistan?",
        options: [
            "8th Amendment",
            "13th Amendment",
            "18th Amendment",
            "21st Amendment"
        ],
        answer: 2,
        explanation:
            "The 18th Amendment, passed in 2010, abolished the Concurrent Legislative List and transferred many legislative and administrative responsibilities to the provinces."
    },

    {
        subject: "International Relations",
        question: "Which theory of International Relations places particular emphasis on anarchy, self-help and the distribution of capabilities?",
        options: [
            "Liberalism",
            "Realism",
            "Constructivism",
            "Feminism"
        ],
        answer: 1,
        explanation:
            "Realism views the international system as anarchic and emphasizes state survival, self-help and the distribution of power among states."
    },

    {
        subject: "Islamic Studies",
        question: "Which Surah is commonly known as the 'Heart of the Quran'?",
        options: [
            "Surah Al-Baqarah",
            "Surah Yaseen",
            "Surah Al-Kahf",
            "Surah Al-Fatiha"
        ],
        answer: 1,
        explanation:
            "Surah Yaseen is traditionally referred to as the 'Heart of the Quran' in Islamic scholarship and popular Muslim tradition."
    },

    {
        subject: "Political Science",
        question: "Who is most closely associated with the concept of separation of powers?",
        options: [
            "John Locke",
            "Montesquieu",
            "Karl Marx",
            "Jean-Jacques Rousseau"
        ],
        answer: 1,
        explanation:
            "Montesquieu developed the classic formulation of separation of powers among the legislative, executive and judicial branches."
    },

    {
        subject: "Criminology",
        question: "Who developed the concept of differential association theory?",
        options: [
            "Edwin H. Sutherland",
            "Cesare Lombroso",
            "Robert Merton",
            "Travis Hirschi"
        ],
        answer: 0,
        explanation:
            "Edwin H. Sutherland developed differential association theory, arguing that criminal behavior is learned through interaction with others."
    },

    {
        subject: "Gender Studies",
        question: "The concept of the 'glass ceiling' primarily refers to:",
        options: [
            "Legal restrictions on voting",
            "Invisible barriers to advancement",
            "Differences in educational access",
            "Gender-based differences in population"
        ],
        answer: 1,
        explanation:
            "The glass ceiling describes invisible organizational and social barriers that can prevent women and other groups from reaching senior positions."
    },

    {
        subject: "Psychology",
        question: "Which part of the human brain is strongly associated with the formation of new long-term memories?",
        options: [
            "Hippocampus",
            "Medulla",
            "Cerebellum",
            "Hypothalamus"
        ],
        answer: 0,
        explanation:
            "The hippocampus plays a major role in forming and consolidating new declarative memories."
    },

    {
        subject: "General Science",
        question: "Which gas is the most abundant in Earth's atmosphere?",
        options: [
            "Oxygen",
            "Carbon dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        answer: 2,
        explanation:
            "Nitrogen makes up roughly 78% of Earth's atmosphere, making it the most abundant atmospheric gas."
    },

    {
        subject: "Pakistan Affairs",
        question: "The Lahore Resolution was passed in:",
        options: [
            "1930",
            "1935",
            "1940",
            "1947"
        ],
        answer: 2,
        explanation:
            "The Lahore Resolution was adopted by the All-India Muslim League on 23 March 1940 at its Lahore session."
    },

    {
        subject: "International Relations",
        question: "The United Nations was officially established in:",
        options: [
            "1919",
            "1939",
            "1945",
            "1950"
        ],
        answer: 2,
        explanation:
            "The United Nations officially came into existence on 24 October 1945 after the UN Charter came into force."
    }
];


let currentQuestion = 0;
let score = 0;
let answered = false;


// =========================================
// FIND QUIZ ELEMENTS
// =========================================

const quizSubject = document.getElementById("quizSubject");
const quizQuestion = document.getElementById("quizQuestion");
const quizOptions = document.getElementById("quizOptions");
const quizExplanation = document.getElementById("quizExplanation");
const quizNext = document.getElementById("quizNext");
const quizScore = document.getElementById("quizScore");
const quizNumber = document.getElementById("quizNumber");


// =========================================
// LOAD QUESTION
// =========================================

function loadQuestion() {

    const question = questions[currentQuestion];

    answered = false;

    quizSubject.textContent = question.subject;

    quizQuestion.textContent = question.question;

    quizNumber.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    quizScore.textContent =
        `Score: ${score}`;

    quizExplanation.classList.remove("show");

    quizExplanation.innerHTML = "";

    quizNext.disabled = true;

    quizOptions.innerHTML = "";


    question.options.forEach((option, index) => {

        const button = document.createElement("button");

        button.className = "quiz-option";

        button.textContent =
            `${String.fromCharCode(65 + index)}. ${option}`;

        button.addEventListener("click", function () {

            selectAnswer(index);

        });

        quizOptions.appendChild(button);

    });
}


// =========================================
// ANSWER QUESTION
// =========================================

function selectAnswer(selectedIndex) {

    if (answered) {
        return;
    }

    answered = true;

    const question = questions[currentQuestion];

    const buttons =
        document.querySelectorAll(".quiz-option");


    buttons.forEach((button, index) => {

        button.disabled = true;

        if (index === question.answer) {

            button.classList.add("correct");

        }

    });


    if (selectedIndex === question.answer) {

        score++;

        buttons[selectedIndex].classList.add("correct");

        quizExplanation.innerHTML = `
            <strong>✓ Correct!</strong>
            <p>${question.explanation}</p>
        `;

    } else {

        buttons[selectedIndex].classList.add("wrong");

        quizExplanation.innerHTML = `
            <strong>✕ Incorrect</strong>
            <p>
                The correct answer is
                <strong>${String.fromCharCode(65 + question.answer)}.
                ${question.options[question.answer]}</strong>.
            </p>
            <p>${question.explanation}</p>
        `;
    }


    quizExplanation.classList.add("show");

    quizScore.textContent =
        `Score: ${score}`;

    quizNext.disabled = false;
}


// =========================================
// NEXT QUESTION
// =========================================

quizNext.addEventListener("click", function () {

    currentQuestion++;

    if (currentQuestion >= questions.length) {

        currentQuestion = 0;

        quizQuestion.textContent =
            `Quiz complete! Your score was ${score}/${questions.length}.`;

        quizSubject.textContent =
            "Challenge Complete";

        quizOptions.innerHTML = "";

        quizExplanation.innerHTML = `
            <strong>Keep going.</strong>
            <p>
                Consistent practice matters more than memorizing
                one impressive score.
            </p>
        `;

        quizExplanation.classList.add("show");

        quizNext.textContent = "Start Again";

        score = 0;

        quizScore.textContent = "Score: 0";

        quizNext.onclick = function () {

            currentQuestion = 0;

            quizNext.textContent = "Next Question →";

            quizNext.onclick = null;

            loadQuestion();

        };

        return;
    }

    loadQuestion();

});


// =========================================
// SEARCH
// =========================================

const searchInput =
    document.getElementById("searchInput");

const searchButton =
    document.getElementById("searchButton");


searchButton.addEventListener("click", function () {

    const term =
        searchInput.value.trim().toLowerCase();

    if (!term) {

        alert("Please enter something to search.");

        return;
    }

    const matches =
        questions.filter(question =>

            question.question.toLowerCase().includes(term) ||
            question.subject.toLowerCase().includes(term) ||
            question.options.some(option =>
                option.toLowerCase().includes(term)
            )

        );


    if (matches.length > 0) {

        alert(
            `${matches.length} quiz resource(s) found for "${term}".`
        );

    } else {

        alert(
            `No current results for "${term}". More resources will be added.`
        );

    }

});


searchInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        searchButton.click();

    }

});


// =========================================
// MOBILE MENU
// =========================================

const mobileMenu =
    document.querySelector(".mobile-menu");

const navigation =
    document.querySelector(".main-nav");


mobileMenu.addEventListener("click", function () {

    navigation.classList.toggle("mobile-open");

});


// =========================================
// START QUIZ
// =========================================

loadQuestion();
