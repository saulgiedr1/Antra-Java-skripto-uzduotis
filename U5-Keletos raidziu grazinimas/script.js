window.onload=function() {

    let zodis="sekcija";
    let zodis1="portretas"
    let zodis2="nuotrauka"
    let rezultatas;
    let rezultatas1;
    let rezultatas2;   

    
    rezultatas=trijuRaidziuGrazinimas(zodis );
    rezultatas1=trijuRaidziuGrazinimas(zodis1);
    rezultatas2=trijuRaidziuGrazinimas(zodis2);

    console.log(rezultatas);
    console.log(rezultatas1);
    console.log(rezultatas2);

}

function trijuRaidziuGrazinimas(a) {
    return a[2] +a[3]+a[4];
}