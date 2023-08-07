// Jimmy Lopez - July 29, 2023

const audio = document.getElementById("audio");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
let isPlaying = false;

startBtn.addEventListener("click", () => {
    audio.play();
    isPlaying = true;
});

stopBtn.addEventListener("click", () => {
    audio.pause();
    isPlaying = false;
});

function checkPalindrome() {
    var userInput = document.getElementById("userInput").value.trim();
    var result = document.getElementById("result");

    if (userInput === "") {
        result.textContent = "No word entered.";
        result.classList.remove("flash");
    } else {
        var formattedStr = userInput.replace(/\s/g, "").toLowerCase();
        var reversedStr = formattedStr.split("").reverse().join("");

        if (formattedStr === reversedStr) {
            result.innerHTML = "<span class='flash'>It's a Palindrome!</span>";
        } else {
            result.textContent = "Not a Palindrome.";
            result.classList.remove("flash");
        }
    }
}

document.getElementById("checkButton").addEventListener("click", checkPalindrome);
