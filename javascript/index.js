let hamburgur = document.getElementById("hamburgur");
let navbar = document.getElementsByClassName("navbar")
hamburgur.addEventListener("click", () => {
    if (navbar[0].style.display == "none") {
        navbar[0].style.display = "block";
        hamburgur.style.position = "absolute";
    }
    else {
        navbar[0].style.display = "none";
        hamburgur.style.position = "relative";
    }
})