
window.onload =function() {



    let zodis="bananas";
    let zodis1="plaukai"; 
    let zodis2="lova";
    let zodis3= "namas";
    let zodis4="vaistai";
    let zodis5="obelis"; 
  
    
    let skaicius; 
    let skaicius1;  
    let skaicius2;   
     


         skaicius=bendrasSkaicius(zodis, zodis1); 
         skaicius1=bendrasSkaicius(zodis2, zodis3);
         skaicius2=bendrasSkaicius(zodis4, zodis5);

         console.log(skaicius);
         console.log(skaicius1);
         console.log(skaicius2);

}
    function bendrasSkaicius( a, b) {
         return a.length + b.length;
}