// Mapa Interativo

//Europa
var triggerImage = document.getElementById("escondido");
var europaImage = document.getElementById("mouse_over_europa");

europaImage.style.display = "none";

triggerImage.addEventListener("click", (event) => {
    europaImage.style.display = "block";
    event.stopPropagation();
});
document.addEventListener("click", () => {
    europaImage.style.display = "none";
});

//África
var triggerImage2 = document.getElementById("escondido2");
var africaImage = document.getElementById("mouse_over_africa");

africaImage.style.display = "none";

triggerImage2.addEventListener("click", (event) => {
    africaImage.style.display = "block";
    event.stopPropagation();
});
document.addEventListener("click", () => {
    africaImage.style.display = "none";
});

//Ásia
var triggerImage3 = document.getElementById("escondido3");
var asiaImage = document.getElementById("mouse_over_asia");

asiaImage.style.display = "none";

triggerImage3.addEventListener("click", (event) => {
    asiaImage.style.display = "block";
    event.stopPropagation();
});
document.addEventListener("click", () => {
    asiaImage.style.display = "none";
});

//América do Norte
var triggerImage4 = document.getElementById("escondido4");
var triggerImage4_1 = document.getElementById("escondido4.1");
var triggerImage4_2 = document.getElementById("escondido4.2");
var americaDoNorteImage = document.getElementById("mouse_over_america_do_norte");

americaDoNorteImage.style.display = "none";

triggerImage4.addEventListener("click", (event) => {
    americaDoNorteImage.style.display = "block";
    event.stopPropagation();
});

triggerImage4_1.addEventListener("click", (event) => {
    americaDoNorteImage.style.display = "block";
    event.stopPropagation();
});

triggerImage4_2.addEventListener("click", (event) => {
    americaDoNorteImage.style.display = "block";
    event.stopPropagation();
});
document.addEventListener("click", () => {
    americaDoNorteImage.style.display = "none";
});

//América do Sul
var triggerImage5 = document.getElementById("escondido5");
var americaDoSulImage = document.getElementById("mouse_over_america_do_sul");

americaDoSulImage.style.display = "none";

triggerImage5.addEventListener("click", (event) => {
    americaDoSulImage.style.display = "block";
    event.stopPropagation();
});
document.addEventListener("click", () => {
    americaDoSulImage.style.display = "none";
});

//Oceânia
var triggerImage6 = document.getElementById("escondido6");
var oceaniaImage = document.getElementById("mouse_over_oceania");

oceaniaImage.style.display = "none";

triggerImage6.addEventListener("click", (event) => {
    oceaniaImage.style.display = "block";
    event.stopPropagation();
});
document.addEventListener("click", () => {
    oceaniaImage.style.display = "none";
});


//Navigator

document.getElementById('nav1').onclick = function () {
    window.location.href = "https://xumigaart.github.io/futuro.azul.github.io/";
}

document.getElementById('nav2').onclick = function () {
    window.location.href = "../pages/futuroazul.html";
}

document.getElementById('nav3').onclick = function () {
    window.location.href = "../pages/animals.html";
}

document.getElementById('nav4').onclick = function () {
    window.location.href = "../pages/regions.html";
}

document.getElementById('nav5').onclick = function () {
    window.location.href = "../pages/ajudar.html";
}





//Modals Animais


const animal = 'none';
const modalContent = document.getElementById('modal-content').innerHTML;


 document.getElementById('baleiabutton').onclick = function () {
     const animal = 'baleia'
     document.getElementById('modal-content').innerHTML = document.getElementById('baleiacontent').innerHTML;
     modal.style.display = "block";

     console.log(animal);
}
document.getElementById('axolotebutton').onclick = function () {
    const animal = 'axolote'
    document.getElementById('modal-content').innerHTML = document.getElementById('axolotecontent').innerHTML;
    modal.style.display = "block";

    console.log(animal);
}
document.getElementById('pinguinbutton').onclick = function () {
    const animal = 'pinguin'
    document.getElementById('modal-content').innerHTML = document.getElementById('pinguincontent').innerHTML;
    modal.style.display = "block";

    console.log(animal);
}
document.getElementById('turtlebutton').onclick = function () {
    const animal = 'turtle'
    document.getElementById('modal-content').innerHTML = document.getElementById('turtlecontent').innerHTML;
    modal.style.display = "block";

    console.log(animal);
}

console.log(animal);




var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("openModalBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
//btn.onclick = function() {
//    modal.style.display = "block";
//}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



