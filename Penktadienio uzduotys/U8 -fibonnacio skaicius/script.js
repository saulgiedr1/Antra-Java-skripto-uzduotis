window.onload=function(){

    let skaicius;
    let skaicius1;
    let fibonacio;
    skaicius=12;
    skaicius1=78;


    fibonacio=fibonacioSkaicius(skaicius);
    fibonacio1=fibonacioSkaicius(skaicius1);

    console.log(fibonacio);
    console.log(fibonacio1);

   
 

}
function fibonacioSkaicius(a){
    return Math.round(( Math.pow( (1 + Math.sqrt(5))/2 ,a ))/Math.sqrt(5)) ; 
}


