

eel.expose(gettotalcountsentiment);
function gettotalcountsentiment(b){
    document.getElementById('positive').innerHTML = b[0];
    document.getElementById('negative').innerHTML = b[1];
    document.getElementById('neutral').innerHTML = b[2];
   
}
eel.expose(gettotaltweetcount);
function gettotaltweetcount(b){
    document.getElementById('total').innerHTML = b;
    
}
eel.expose(gethashtags);
function gethashtags(b){
    document.getElementById('hash1').innerHTML = b[0];
    document.getElementById('hash2').innerHTML = b[1];
    document.getElementById('hash3').innerHTML = b[2];
    document.getElementById('hash4').innerHTML = b[3];
    document.getElementById('hash5').innerHTML = b[4];
    
}
eel.expose(gethashtagscount);
function gethashtagscount(b){
    document.getElementById('hc1').innerHTML = b[0];
    document.getElementById('hc2').innerHTML = b[1];
    document.getElementById('hc3').innerHTML = b[2];
    document.getElementById('hc4').innerHTML = b[3];
    document.getElementById('hc5').innerHTML = b[4];
    
}
eel.expose(gethashtagspercent);
function gethashtagspercent(b){
    document.getElementById('hp1').innerHTML = b[0];
    document.getElementById('hp2').innerHTML = b[1];
    document.getElementById('hp3').innerHTML = b[2];
    document.getElementById('hp4').innerHTML = b[3];
    document.getElementById('hp5').innerHTML = b[4];
    
}