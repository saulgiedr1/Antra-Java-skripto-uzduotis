window.onload=function() { 
    let skaicius;
    let skaicius1;
    skaicius=-200;
    skaicius1=-1.347;

    modulis=skaiciausModulis(skaicius);
    console.log(modulis);

    modulisKubu=teigiamasKubas(skaicius1);     
    console.log(modulisKubu);

}

function skaiciausModulis(a){
    return Math.abs(a);
}

function teigiamasKubas(a){
    return Math.pow(Math.abs(a), 3);
}

