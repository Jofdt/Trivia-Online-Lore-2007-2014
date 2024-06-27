const quizData = [
    {
        question: "In 'The Matrix' (1999), what color pill does Neo take?",
        answers: ["Blue", "Red", "Green", "Purple"],
        correct: 1
    },
    {
        question: "What does the fox say in Napoleon Dynamite's drawing?",
        answers: ["Ring-ding-ding-ding-dingeringeding!", "Nothing, it just looks cool", "Vote for Pedro", "Tina, you fat lard, come get some dinner"],
        correct: 1
    },
    {
        question: "In 'Pulp Fiction' (1994), what is in the briefcase?",
        answers: ["Diamonds", "Gold", "Marsellus Wallace's soul", "It's never revealed"],
        correct: 3
    },
    {
        question: "Which Pixar movie contains the Pizza Planet truck in every scene?",
        answers: ["Toy Story", "Wall-E", "Up", "It's in every Pixar movie, not just one"],
        correct: 3
    },
    {
        question: "In 'Fight Club' (1999), what is the first rule of Fight Club?",
        answers: ["You do not talk about Fight Club", "Always wear shoes", "No shirts, no shoes", "Bring your own soap"],
        correct: 0
    },
    {
        question: "What does 'Hakuna Matata' mean in 'The Lion King' (1994)?",
        answers: ["Circle of Life", "I love you", "No worries", "Goodbye"],
        correct: 2
    },
    {
        question: "In 'Inception' (2010), what object does Cobb use as his totem?",
        answers: ["A top", "A coin", "A chess piece", "A loaded die"],
        correct: 0
    },
    {
        question: "What is the name of the camp in 'Wet Hot American Summer' (2001)?",
        answers: ["Camp Crystal Lake", "Camp Firewood", "Camp Walden", "Camp Kikakee"],
        correct: 1
    },
    {
        question: "In 'The Big Lebowski' (1998), what beverage does 'The Dude' famously drink?",
        answers: ["White Russian", "Martini", "Old Fashioned", "Beer"],
        correct: 0
    },
    {
        question: "What is the name of the fictional band in 'School of Rock' (2003)?",
        answers: ["The School of Rock", "Ned's Atomic Dustbin", "No Vacancy", "Maggot Death"],
        correct: 0
    },
    {
        question: "In 'Jurassic Park' (1993), what type of dinosaur is first seen by the visitors?",
        answers: ["Tyrannosaurus Rex", "Velociraptor", "Brachiosaurus", "Triceratops"],
        correct: 2
    },
    {
        question: "What is the name of the skull-shaped island in 'Pirates of the Caribbean: The Curse of the Black Pearl' (2003)?",
        answers: ["Skull Rock", "Isla de Muerta", "Skeleton Isle", "Dead Man's Cove"],
        correct: 1
    },
    {
        question: "In 'The Sixth Sense' (1999), what color is associated with the presence of ghosts?",
        answers: ["Blue", "Green", "Red", "White"],
        correct: 2
    },
    {
        question: "What is the name of the fictional country where 'The Princess Diaries' (2001) is partially set?",
        answers: ["Genovia", "Aldovia", "Belgravia", "Latveria"],
        correct: 0
    },
    {
        question: "In 'Anchorman: The Legend of Ron Burgundy' (2004), what instrument does Ron play in a jazz club?",
        answers: ["Saxophone", "Jazz flute", "Trumpet", "Piano"],
        correct: 1
    },
    {
        question: "What is the name of the computer in 'I, Robot' (2004)?",
        answers: ["HAL 9000", "VIKI", "Mother", "Skynet"],
        correct: 1
    },
    {
        question: "In 'The Lord of the Rings: The Fellowship of the Ring' (2001), what gift does Galadriel give to Frodo?",
        answers: ["A sword", "A ring", "A phial of light", "A mithril shirt"],
        correct: 2
    },
    {
        question: "What is the name of the summer camp in 'The Parent Trap' (1998)?",
        answers: ["Camp Walden", "Camp Rock", "Camp Crystal Lake", "Camp Firewood"],
        correct: 0
    },
    {
        question: "In 'Zoolander' (2001), what is the name of Derek's signature look?",
        answers: ["Blue Steel", "Magnum", "Le Tigre", "Ferrari"],
        correct: 0
    },
    {
        question: "What is the highest-grossing film of the 1990s?",
        answers: ["Jurassic Park", "Star Wars: Episode I – The Phantom Menace", "Titanic", "The Lion King"],
        correct: 2
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const q = quizData[currentQuestion];
    document.getElementById('question').textContent = q.question;
    const answersHtml = q.answers.map((answer, index) => 
        `<button onclick="checkAnswer(${index})">${answer}</button>`
    ).join('');
    document.getElementById('answers').innerHTML = answersHtml;
    document.getElementById('submit').style.display = 'none';
    document.getElementById('result').textContent = '';
}

function checkAnswer(answerIndex) {
    const q = quizData[currentQuestion];
    if (answerIndex === q.correct) {
        document.getElementById('result').textContent = 'Correct!';
        document.getElementById('result').style.backgroundColor = '#66ff66';
        score++;
    } else {
        document.getElementById('result').textContent = 'Wrong. The correct answer was: ' + q.answers[q.correct];
        document.getElementById('result').style.backgroundColor = '#ff6666';
    }
    document.getElementById('submit').style.display = 'block';
}

document.getElementById('submit').onclick = function() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        document.getElementById('quiz').style.display = 'none';
        document.getElementById('score').textContent = `You got ${score} out of ${quizData.length} correct!`;
    }
};

loadQuestion();
