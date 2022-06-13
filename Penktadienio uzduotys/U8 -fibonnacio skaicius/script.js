window.onload=function(){

    let skaicius;
    let skaicius1;
    let fibonacio;
    skaicius=12;
    skaicius1=78;
    
    const phi = (1 + Math.sqrt(5)) / 2 


    fibonacio=fibonacioSkaicius(skaicius, phi);
    fibonacio1=fibonacioSkaicius(skaicius1, phi);

    console.log(fibonacio);
    console.log(fibonacio1);

   
 

}
function fibonacioSkaicius(a, phi){
    return Math.round(( Math.pow(phi ,a ))/Math.sqrt(5)) ; 
}


