var getal = 0;
    function clickergetal() {
        if (getal < 10) {
            getal++;
        }
        else {
            getal = 0;
        }
        document.getElementById("getal").textContent = getal;
    }