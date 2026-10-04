function hideGame() {
    var x = document.getElementById("le-game");
    if (x.style.display === "none") {
        x.style.display = "block";
    } 
    else {
        x.style.display = "none";
    }
}

var clickCount = 0;
function addClicks() {
    clickCount++;
    checkClicks();
}

function checkClicks() {
    if (clickCount >= 5) {
        location.replace("secret.html")
    }
}