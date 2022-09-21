const image = document.getElementById('img');
const slider = document.getElementById('myRange');
const slider1 = document.getElementById('myRange1');
const slider2 = document.getElementById('myRange2');
const slider3 = document.getElementById('myRange3');
const slider4 = document.getElementById('myRange4');
const slider5 = document.getElementById('myRange5');
const compteur = document.getElementById('pourcent');
const compteur1 = document.getElementById('pourcent1');
const compteur2 = document.getElementById('pourcent2');
const compteur3 = document.getElementById('pourcent3');
const compteur4 = document.getElementById('pourcent4');
const compteur5 = document.getElementById('pourcent5');
const cssdeimage = document.getElementById('myInput')
let range = 15;
let filterGraysacle = '0%';
let sepia = '0%';
let blur = '0px';
let brightness = '0%';
let hueRotate = '0deg';
let saturate = '0%';
changepercent();
changepercent1();
changepercent2();
changepercent3();
changepercent4();
changepercent5();
cssimage()
slider.addEventListener('input', changepercent);
slider1.addEventListener('input', changepercent1);
slider2.addEventListener('input', changepercent2);
slider3.addEventListener('input', changepercent3);
slider4.addEventListener('input', changepercent4);
slider5.addEventListener('input', changepercent5);
slider.addEventListener('input', changefilter);
slider1.addEventListener('input', changefilter1);
slider2.addEventListener('input', changefilter2);
slider3.addEventListener('input', changefilter3);
slider4.addEventListener('input', changefilter4);
slider5.addEventListener('input', changefilter5);
slider.addEventListener('input', cssimage);
slider1.addEventListener('input', cssimage);
slider2.addEventListener('input', cssimage);
slider3.addEventListener('input', cssimage);
slider4.addEventListener('input', cssimage);
slider5.addEventListener('input', cssimage);

function changepercent() {
    range = parseInt (slider.value);
    compteur.textContent = range;
}   
function changepercent1() {
    range = parseInt (slider1.value);
    compteur1.textContent = range;
}   
function changepercent2() {
    range = parseInt (slider2.value);
    compteur2.textContent = range;
}   
function changepercent3() {
    range = parseInt (slider3.value);
    compteur3.textContent = range;
}   
function changepercent4() {
    range = parseInt (slider4.value);
    compteur4.textContent = range;
}   
function changepercent5() {
    range = parseInt (slider5.value);
    compteur5.textContent = range;
}   
function changefilter() {
    document.getElementById("img").style.filter = "grayscale(" + parseInt (slider.value) + "%) sepia(" + parseInt (slider1.value) + "%) blur(" + parseInt (slider2.value) + "px) brightness(" + parseInt (slider3.value) + "%) hue-rotate(" + parseInt (slider4.value) + "deg) saturate(" + parseInt (slider5.value) + "%)";
    console.log (parseInt (slider.value));
}
function changefilter1() {
    document.getElementById("img").style.filter = "sepia(" + parseInt (slider1.value) + "%) grayscale(" + parseInt (slider.value) + "%) blur(" + parseInt (slider2.value) + "px) brightness(" + parseInt (slider3.value) + "%) hue-rotate(" + parseInt (slider4.value) + "deg) saturate(" + parseInt (slider5.value) + "%)";
    console.log (parseInt (slider.value));
}
function changefilter2() {
    document.getElementById("img").style.filter = "blur(" + parseInt (slider2.value) + "px) grayscale(" + parseInt (slider.value) + "%) sepia(" + parseInt (slider1.value) + "%) brightness(" + parseInt (slider3.value) + "%) hue-rotate(" + parseInt (slider4.value) + "deg) saturate(" + parseInt (slider5.value) + "%) ";
    console.log (parseInt (slider.value));
}
function changefilter3() {
    document.getElementById("img").style.filter = "brightness(" + parseInt (slider3.value) + "%) blur(" + parseInt (slider2.value) + "px) grayscale(" + parseInt (slider.value) + "%) sepia(" + parseInt (slider1.value) + "%) hue-rotate(" + parseInt (slider4.value) + "deg) saturate(" + parseInt (slider5.value) + "%)  ";
    console.log (parseInt (slider.value));
}
function changefilter4() {
    document.getElementById("img").style.filter = "hue-rotate(" + parseInt (slider4.value) + "deg) brightness(" + parseInt (slider3.value) + "%) blur(" + parseInt (slider2.value) + "px) grayscale(" + parseInt (slider.value) + "%) sepia(" + parseInt (slider1.value) + "%) saturate(" + parseInt (slider5.value) + "%) ";
    console.log (parseInt (slider.value));
}
function changefilter5() {
    document.getElementById("img").style.filter = "saturate(" + parseInt (slider5.value) + "%) hue-rotate(" + parseInt (slider4.value) + "deg) brightness(" + parseInt (slider3.value) + "%) blur(" + parseInt (slider2.value) + "px) grayscale(" + parseInt (slider.value) + "%) sepia(" + parseInt (slider1.value) + "%) ";
    console.log (parseInt (slider.value));
}
function cssimage() {
    cssdeimage.value = "grayscale:" + parseInt (slider.value) + "%; sepia:" + parseInt (slider1.value) + "%; blur:" + parseInt (slider2.value) + "px; brightness:" + parseInt (slider3.value) + "%; hue-rotate:" + parseInt (slider4.value) + "deg; saturate:" + parseInt (slider5.value) + "%;";
}
function copier() {
    var copyText = document.getElementById("myInput");
    navigator.clipboard.writeText(copyText.value);
  }

