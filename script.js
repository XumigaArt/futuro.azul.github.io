
document.getElementById("logo").addEventListener("click", function(){
    document.getElementById("audio").play();});




const baleiabtn = document.getElementById('baleiabtn');
const baleiapopup = document.getElementById('baleia_popup');


document.getElementById('baleia_popup').style.display = 'none';

    document.getElementById('baleiabtn').onclick = function () {
        document.getElementById('baleia_popup').style.display = 'block';
    }

