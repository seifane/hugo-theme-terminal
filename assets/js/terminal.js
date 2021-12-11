const speed = 80;
const variation = 100;
const texts = [
    "rm -rf /",
    "ping google.com",
    "rm -rf / --no-preserve-root",
    ":(){ :|:& };:",
    "yes yes",
    "It's free real estate",
    "Ugandaaaaaaaaaaa",
    "Baka Mitai",
    "GAME !",
    "Moshi Moshi Jesus Desu",
    "I need healing",
    "Déjà vu",
    "panic.jpg",
    "npm install is-odd",
    "npm install is-even",
    "Gas Gas Gas",
    "I'm running arch btw",
    "Total Installed Size:  10960.10 MiB",
    "\"Fuck you Nvidia\" - Linus Torvalds",
    "That's a lot of damage !",
    "Wake UP, Neo...",
    "Follow the white rabbit"
]

let last_index = -1;
let done_texts = []

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function typeWriter(txt) {
    if (done_texts.at(-1) === 11) {
        txt = texts[11];
    }
    for (let i = 0; i < txt.length; i++) {
        let char = txt.charAt(i);
        if (char === ' ') {
            char = '&nbsp;';
        }
        document.getElementById("terminal_text").innerHTML += char;
        await timeout(speed * ((getRandomInt(variation * 2) - variation) / 100 + 1));
    }
}

function getRandomTextIndex() {
    if (done_texts.length === texts.length) {
        done_texts = []
    }

    let availableIds = []
    for (let i = 0; i < texts.length; i++) {
        if (!done_texts.includes(i)) {
            availableIds.push(i);
        }
    }
    return availableIds[getRandomInt(availableIds.length)];
}

async function displayText() {
    while (true) {
        let i = getRandomTextIndex();
        await typeWriter(texts[i]);
        await timeout(3000);
        document.getElementById("terminal_text").innerHTML = '';
        await timeout(200);
        last_index = i;
        done_texts.push(i);
    }
}

displayText();