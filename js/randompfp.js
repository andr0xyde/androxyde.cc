function generateNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
document.write('<img src="images/pfps/pfp' + generateNumber(1, 6) + '.jpg" width="250" height="250" class="pfp">')