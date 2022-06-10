window.onload=function() {
let skaicius;
let skaicius1;

skaicius=117;
skaicius1=258;

kubas=skaiciausKubas(skaicius);
kubas1=skaiciausKubas(skaicius1);

console.log(kubas);
console.log(kubas1);
}

function skaiciausKubas(a) {
    return Math.pow(a, 3);

}
