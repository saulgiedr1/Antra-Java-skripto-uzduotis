window.onload=function(){

    let dalinys;
    let daliklis;
    let dalinys1;
    let daliklis1;
    let dalinys2;
    let daliklis2;
    let liekana;
    let liekana1;
    let liekana2;
    dalinys=17;
    daliklis=6;

    dalinys1=141;
    daliklis1=18;

    dalinys2=11;
    daliklis2=2;

    liekana=liekanosRadimas(dalinys, daliklis);
    liekana1=liekanosRadimas(dalinys1, daliklis1);
    liekana2=liekanosRadimas(dalinys2, daliklis2);
    console.log(liekana);
    console.log(liekana1);
    console.log(liekana2);


}
function liekanosRadimas(a,b){
    return a % b;
}