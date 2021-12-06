const numbArray = [19, 7, 23, 5, 2, 15, 9, 4, 11]
function listNumbs() {
    document.getElementById("numbs").innerHTML = (numbArray.toString());
}
function findLarge() {
    numbArray.sort(function (a, b) { return b - a });
    document.getElementById("result").innerHTML += numbArray[0];
    listNumbs();
}