//Navigator

document.getElementById('nav1').onclick = function () {
    window.location.href = "https://xumigaart.github.io/futuro.azul.github.io/";
}

document.getElementById('nav2').onclick = function () {
    window.location.href = "../pages/animals.html";
}

document.getElementById('nav3').onclick = function () {
    window.location.href = "../pages/animals.html";
}

document.getElementById('nav4').onclick = function () {
    window.location.href = "../pages/animals.html";
}

document.getElementById('nav5').onclick = function () {
    window.location.href = "../pages/animals.html";
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





//Modals Regiões

const regiao = 'none';


document.getElementById('asiabutton').onclick = function () {
    const animal = 'asia'
    document.getElementById('modal-content').innerHTML = document.getElementById('asiacontent').innerHTML;
    modal.style.display = "block";

    console.log(animal);
}
document.getElementById('caraibasbutton').onclick = function () {
    const animal = 'caraibas'
    document.getElementById('modal-content').innerHTML = document.getElementById('caraibascontent').innerHTML;
    modal.style.display = "block";

    console.log(animal);
}
document.getElementById('africaocidentalbutton').onclick = function () {
    const animal = 'africaOcidental'
    document.getElementById('modal-content').innerHTML = document.getElementById('africaocidentalcontent').innerHTML;
    modal.style.display = "block";

    console.log(animal);
}
document.getElementById('europabutton').onclick = function () {
    const animal = 'europa'
    document.getElementById('modal-content').innerHTML = document.getElementById('europacontent').innerHTML;
    modal.style.display = "block";

    console.log(animal);
}
document.getElementById('americanortebutton').onclick = function () {
    const animal = 'americaNorte'
    document.getElementById('modal-content').innerHTML = document.getElementById('americanortecontent').innerHTML;
    modal.style.display = "block";

    console.log(animal);
}
document.getElementById('oceaniabutton').onclick = function () {
    const animal = 'oceania'
    document.getElementById('modal-content').innerHTML = document.getElementById('oceaniacontent').innerHTML;
    modal.style.display = "block";

    console.log(animal);
}
document.getElementById('americasulbutton').onclick = function () {
    const animal = 'americaSul'
    document.getElementById('modal-content').innerHTML = document.getElementById('americasulcontent').innerHTML;
    modal.style.display = "block";

    console.log(animal);
}
document.getElementById('antartidabutton').onclick = function () {
    const animal = 'antartida'
    document.getElementById('modal-content').innerHTML = document.getElementById('antartidacontent').innerHTML;
    modal.style.display = "block";

    console.log(animal);
}

console.log(animal);





//Modal Script



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






//Mapa Interativo
var trigger = document.getElementById('escondido');
var escondido = document.getElementById('mouse_over_europa');

// Adiciona o evento de clique à imagem
trigger.addEventListener('click', function() {
    // Altera o estilo de display da imagem escondida
    escondido.style.display = 'block';
});

