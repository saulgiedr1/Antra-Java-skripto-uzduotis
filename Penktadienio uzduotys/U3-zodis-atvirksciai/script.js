window.onload=function() {
    let zodis;
    let zodis1;
    
    let apsuktas;
    let apsuktas1;

    zodis="kava"
    zodis1="java"


    apsuktas=apsuktasZodis(zodis);
    apsuktas1=apsuktasZodis(zodis1);
    console.log(apsuktas+" "+apsuktas1);
    
}

function apsuktasZodis(a){
    return a[3]+a[2]+a[1]+a[0];
}