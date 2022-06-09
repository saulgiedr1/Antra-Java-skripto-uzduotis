window.onload=function() {

    let zodis="namas";
    let zodis1="bešamel";
    let zodis2="ok"
    let paskutine;
    let paskutine1;
    let paskutine2;

        paskutine=paskutineRaide(zodis);
        paskutine1=paskutineRaide(zodis1);
        paskutine2=paskutineRaide(zodis2);

             console.log(paskutine);
             console.log(paskutine1);
             console.log(paskutine2);

}
function paskutineRaide(z) {
    return z[(z.length -1)] ;     
   
}




