// QUIZ
const questions = [
    {
        question: "Wer träumt davon, ein Idol zu werden?",
        answers: ["Aqua", "Ruby", "Akane"],
        correct: 1
    },
    {
        question: "Wie heisst Rubys Zwillingsbruder?",
        answers: ["Aqua", "Kana", "Mem-cho"],
        correct: 0
    },
    {
        question: "In welcher Branche spielt die Geschichte?",
        answers: ["Weltraumforschung", "Unterhaltung", "Fussball"],
        correct: 1
    }
];

let currentQuestion = 0;
let answered = false;

function showQuestion() {
    const q = questions[currentQuestion];

    document.getElementById("question").textContent = q.question;

    const buttons = document.querySelectorAll(".answers button");

    buttons.forEach((button, index) => {
        button.textContent = q.answers[index];
        button.disabled = false;
    });

    document.getElementById("result").textContent = "";
    answered = false;
}

function answer(choice) {
    if (answered) return;

    answered = true;

    const q = questions[currentQuestion];
    const selected = choice.charCodeAt(0) - 65;

    if (selected === q.correct) {
        document.getElementById("result").textContent =
            "Richtig! ⭐ Du kennst dich aus!";
    } else {
        document.getElementById("result").textContent =
            "Nicht ganz! Versuch es bei der nächsten Frage wieder. 💗";
    }
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion >= questions.length) {
        currentQuestion = 0;
    }

    showQuestion();
}

showQuestion();


// GEHEIMNIS
let secretClicks = 0;

document.getElementById("secretButton").addEventListener("click", function() {
    secretClicks++;

    const secretText = document.getElementById("secretText");

    if (secretClicks < 5) {
        secretText.textContent = "Noch " + (5 - secretClicks) + " Klicks ... ✨";
    } else {
        secretText.textContent =
            "🌟 Du hast das Geheimnis entdeckt! Ein echter Oshi no Ko Superfan!";
        secretClicks = 0;
    }
});


// STERN-EASTEREGG
document.getElementById("bigStar").addEventListener("click", function() {
    this.textContent = "💖";
    this.style.transform = "scale(1.4) rotate(30deg)";

    setTimeout(() => {
        this.textContent = "✦";
        this.style.transform = "";
    }, 1000);
});


// KLEINE STERNE BEIM KLICK
document.addEventListener("click", function(event) {
    const star = document.createElement("span");

    star.textContent = "✦";
    star.style.position = "fixed";
    star.style.left = event.clientX + "px";
    star.style.top = event.clientY + "px";
    star.style.color = "#ff70c9";
    star.style.pointerEvents = "none";
    star.style.fontSize = "22px";
    star.style.zIndex = "9999";
    star.style.animation = "clickStar 0.8s ease-out forwards";

    document.body.appendChild(star);

    setTimeout(() => star.remove(), 800);
});