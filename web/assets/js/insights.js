eel.expose(getpositiveword);
function getpositiveword(b){
    document.getElementById('pi1').innerHTML = b[18];
    document.getElementById('pi2').innerHTML = b[32];
    document.getElementById('pi3').innerHTML = b[38];
    document.getElementById('pi4').innerHTML = b[41];
    document.getElementById('pi5').innerHTML = b[44];
}
eel.expose(getnegativeword);
function getnegativeword(b){
    document.getElementById('ni1').innerHTML = b[3];
    document.getElementById('ni2').innerHTML = b[8];
    document.getElementById('ni3').innerHTML = b[9];
    document.getElementById('ni4').innerHTML = b[19];
    document.getElementById('ni5').innerHTML = b[20];
}
eel.expose(getpositivenumber);
function getpositivenumber(b){
    document.getElementById('pic1').innerHTML = b[18];
    document.getElementById('pic2').innerHTML = b[32];
    document.getElementById('pic3').innerHTML = b[38];
    document.getElementById('pic4').innerHTML = b[41];
    document.getElementById('pic5').innerHTML = b[44];
}
eel.expose(getnegativenumber);
function getnegativenumber(b){
    document.getElementById('nic1').innerHTML = b[3];
    document.getElementById('nic2').innerHTML = b[8];
    document.getElementById('nic3').innerHTML = b[9];
    document.getElementById('nic4').innerHTML = b[19];
    document.getElementById('nic5').innerHTML = b[20];
}