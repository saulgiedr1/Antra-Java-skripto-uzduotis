window.onload=function() {


    let zodis="daugiabutis";
    let zodis1="benamis";
    let zodis2="varna";
    let zodis3="butas";
    let zodis4="laivas";
    let zodis5="stalas";
    let bendras ;
    let bendras1 ;
    let bendras2 ;

    bendras=bendrasSkaicius(zodis, zodis1);
    bendras1=bendrasSkaicius(zodis2, zodis3);
    bendras2=bendrasSkaicius(zodis4, zodis5);

    console.log(bendras) ;
    console.log(bendras1) ;
    console.log(bendras2) ;
}
function bendrasSkaicius(a,b) {
    return a+ "    " +b;
    
}


