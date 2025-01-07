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






//Modals Regiões

const regiao = 'none';
const modalContent = document.getElementById('modal-content').innerHTML;


document.getElementById('asiabutton').onclick = function () {
    const regiao = 'asia'
    document.getElementById('modal-content').innerHTML = document.getElementById('asiacontent').innerHTML;
    modal.style.display = "block";

    console.log(regiao);
}
document.getElementById('caraibasbutton').onclick = function () {
    const animal = 'caraibas'
    document.getElementById('modal-content').innerHTML = document.getElementById('caraibascontent').innerHTML;
    modal.style.display = "block";

    console.log(regiao);
}
document.getElementById('africaocidentalbutton').onclick = function () {
    const regiao = 'africaOcidental'
    document.getElementById('modal-content').innerHTML = document.getElementById('africaocidentalcontent').innerHTML;
    modal.style.display = "block";

    console.log(regiao);
}
document.getElementById('europabutton').onclick = function () {
    const animal = 'europa'
    document.getElementById('modal-content').innerHTML = document.getElementById('europacontent').innerHTML;
    modal.style.display = "block";

    console.log(animal);
}
document.getElementById('americanortebutton').onclick = function () {
    const regiao = 'americaNorte'
    document.getElementById('modal-content').innerHTML = document.getElementById('americanortecontent').innerHTML;
    modal.style.display = "block";

    console.log(regiao);
}
document.getElementById('oceaniabutton').onclick = function () {
    const animal = 'oceania'
    document.getElementById('modal-content').innerHTML = document.getElementById('oceaniacontent').innerHTML;
    modal.style.display = "block";

    console.log(animal);
}
document.getElementById('americasulbutton').onclick = function () {
    const regiao = 'americaSul'
    document.getElementById('modal-content').innerHTML = document.getElementById('americasulcontent').innerHTML;
    modal.style.display = "block";

    console.log(regiao);
}
document.getElementById('antartidabutton').onclick = function () {
    const regiao = 'antartida'
    document.getElementById('modal-content').innerHTML = document.getElementById('antartidacontent').innerHTML;
    modal.style.display = "block";

    console.log(regiao);
}

console.log(regiao);





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
