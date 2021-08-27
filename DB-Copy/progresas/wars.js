import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function inputText(msg) {
    return new Promise((resolve) => {
        rl.question(msg, (text) => {
            resolve(text);
        });
    });
}

let text = await inputText("Sakinys: ");

if (text.slice(-1) === '?') {
    console.log(text)
} else {
    console.log(text + "?");
}

rl.close();