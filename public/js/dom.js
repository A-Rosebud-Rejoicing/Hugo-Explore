
function toggleDisplay(el1, el2) {
    var x = document.getElementById(el1);
    var y = document.getElementById(el2);
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
    } else {
        x.style.display = "none";
        y.style.display = "block";
    }
}