window.onload=function(){

    let skaicius;
    let fibonacio;
    skaicius=5;


    fibonacio=fibonacioSkaicius(skaicius);

    console.log(fibonacio);


 

}
function fibonacioSkaicius(a){
    return ( Math.pow( (1 + Math.sqrt(5))/2,a ))/Math.sqrt(5) ; 
}