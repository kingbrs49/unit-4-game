var winCount = 0;
var lossCount = 0;
var gameTotal = Math.floor(Math.random() * 120) + 19;
var userTotal = 0;

console.log(winCount);
console.log(lossCount);
console.log(gameTotal);
console.log(userTotal);

var winCountDisplay = $("#winCountDisplay");
var lossCountDisplay = $("#lossCountDisplay");
var gameTotalDisplay = $("#gameTotalDisplay");
var userTotalDisplay = $("#userTotalDisplay");


generateValues();

$(".image").click(function () {
    var num = $(this).attr("value");
    console.log(num);
    addToUserTotal(num);
});

function generateValues() {
    $(".image").each(function (index) {
        var crystalNumber = Math.floor(Math.random() * 12) + 1;
        $(this).attr("value", crystalNumber)
    })
}

$("#winCountDisplay").html(winCount);
$("#lossCountDisplay").html(lossCount);
$("#gameTotalDisplay").html(gameTotal);
$("#userTotalDisplay").html(userTotal);

function addToUserTotal(num) {
    userTotal += +num;
    userTotalDisplay.text(userTotal);
    compareUserToGame();
}

//must create separate function --> compares userTotal to gameTotal after each click with the "if" conditions below.

function compareUserToGame() {
    if (userTotal == gameTotal) {
        alert("Congratulations! You Won!");
        winCount++;
        winCountDisplay.text(winCount);
        reset();
    }

    if (userTotal > gameTotal) {
        alert("Sorry! Try Again!");
        lossCount++;
        lossCountDisplay.text(lossCount);
        reset();
    }

}

function reset() {
    gameTotal = Math.floor(Math.random() * 120) + 19;
    gameTotalDisplay.text(gameTotal);
    userTotal = 0;
    userTotalDisplay.text(userTotal);
}
