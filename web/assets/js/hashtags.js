
eel.expose(gethashtags1);
function gethashtags1(b){
    document.getElementById('hht1').innerHTML = b[0];
    document.getElementById('hht2').innerHTML = b[1];
    document.getElementById('hht3').innerHTML = b[2];
    document.getElementById('hht4').innerHTML = b[3];
    document.getElementById('hht5').innerHTML = b[4];
    
}
eel.expose(gethashtagscount1);
function gethashtagscount1(b){
    document.getElementById('hhc1').innerHTML = b[0];
    document.getElementById('hhc2').innerHTML = b[1];
    document.getElementById('hhc3').innerHTML = b[2];
    document.getElementById('hhc4').innerHTML = b[3];
    document.getElementById('hhc5').innerHTML = b[4];
    
}
eel.expose(gethashtagspercent1);
function gethashtagspercent1(b){
    document.getElementById('hhp1').innerHTML = b[0];
    document.getElementById('hhp2').innerHTML = b[1];
    document.getElementById('hhp3').innerHTML = b[2];
    document.getElementById('hhp4').innerHTML = b[3];
    document.getElementById('hhp5').innerHTML = b[4];
    
}


//async function run() {
    // Inside a function marked 'async' we can use the 'await' keyword.
  
  //  let n = await eel.gethashtags1()(); // Must prefix call with 'await', otherwise it's the same syntax
    //console.log("Got this from Python: " + n);
  //}
  
  //run();
