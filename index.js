
document.querySelector(".rollButton").addEventListener("click", function(){
    var randomNumber = Math.floor(Math.random() * 6) + 1; // get random number between 1 t0 6
    var randomImage = "dice" + randomNumber + ".png"; // select image base on random number
    var randomImageSource = "images/" + randomImage;

    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", randomImageSource);


    var randomNumber2 = Math.floor(Math.random() * 6) + 1; // get random number between 1 t0 6
    var randomImageSource2 = "images/dice" + randomNumber2 + ".png"
    var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

    if (randomNumber > randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 1 wins"
    } else if (randomNumber2 > randomNumber) {
        document.querySelector("h1").innerHTML = "Player 2 wins"
    } else {
        document.querySelector("h1").innerHTML = "Draw"
    }
})

