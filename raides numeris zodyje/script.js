window.onload=function() {
    let zodis;
    zodis= "lokys";  

    
    
    let numeris;   

    numeris=raideNr(zodis);   

  console.log(numeris); 


}
function  raideNr(a){
    return a.indexOf("y");
}
