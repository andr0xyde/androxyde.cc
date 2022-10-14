function generateNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

window.onload = document.getElementById("pfp").src = "./images/pfps/pfp" + generateNumber(1, 6) + ".jpg";