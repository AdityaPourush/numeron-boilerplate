// Iteration 5: Store the player score and display it on the game over screen
let score_box = document.getElementById("score-board");

let value = localStorage.getItem("score");

score_box.textContent = value;

var again = document.querySelector(".play");

again.onclick = () => {
    location.href = "./game.html", "_self";
}