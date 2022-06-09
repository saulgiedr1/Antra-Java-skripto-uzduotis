window.onload=function() {

    let zodis="sekcija";
    let zodis1="portretas"
    let zodis2="nuotrauka"
    let rezultatas;
    let rezultatas1;
    let rezultatas2;   

    
    rezultatas=trijuRaidziuGrazinimas(zodis, zodis,zodis );
    rezultatas1=trijuRaidziuGrazinimas(zodis1, zodis1,zodis1 );
    rezultatas2=trijuRaidziuGrazinimas(zodis2, zodis2,zodis2 );

    console.log(rezultatas);
    console.log(rezultatas1);
    console.log(rezultatas2);

}

function trijuRaidziuGrazinimas(a ,b,c ) {
    return a[2] +b[3]+c[4];
}