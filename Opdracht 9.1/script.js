var modal = document.getElementById("cookieWall");

var btn = document.getElementById("cookieWallButton");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function leeftijdCheck() {
    var leeftijd = parseInt(document.getElementById("leeftijd").value);
    if (leeftijd < 18) {
        document.getElementById("leeftijdResultaat").innerHTML = `Helaas, u bent te jong.`; 
        modal.style.display = "none";
        document.body.style.backgroundColor = "red";
    }
    else {
        window.location.href = `https://www.youtube.com/watch?v=y0sF5xhGreA`;
    }
}