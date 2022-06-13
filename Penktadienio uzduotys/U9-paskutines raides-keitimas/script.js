window.onload=function() {
let zodis;
let zodis1;
let rezultatas;
let rezultatas1;

zodis="kamuolys";
zodis1="vartai"
let zodis3="Dangus"
let zodis4= "Password123"


rezultatas=pakeistaPaskutineRaide(zodis, zodis1);
rezultatas1=pakeistaPaskutineRaide(zodis3, zodis4);


console.log(rezultatas);
console.log(rezultatas1);


}

    

function pakeistaPaskutineRaide(a,b) {
    return a.slice(0, -1)+ b[(b.length -1)];

}