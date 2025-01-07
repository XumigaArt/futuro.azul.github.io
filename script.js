//Navigator



document.getElementById('nav2').onclick = function () {
    window.location.href = "https://xumigaart.github.io/futuro.azul.github.io/pages/animals.html";
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