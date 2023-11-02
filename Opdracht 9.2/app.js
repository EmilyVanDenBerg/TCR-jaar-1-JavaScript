function openFace() {
    const closedFace = document.querySelector(".closed");
    const openFace = document.querySelector(".open");

    closedFace.classList.add("active");
    openFace.classList.remove("active");
}

function closedFace() {
    const closedFace = document.querySelector(".closed");
    const openFace = document.querySelector(".open");

    openFace.classList.add("active");
    closedFace.classList.remove("active");
}