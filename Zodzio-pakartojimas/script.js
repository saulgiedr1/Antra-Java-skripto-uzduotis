window.onload=function() {

    let zodis="laivas";
    let zodis1="namas";
    let zodis2="koja";
    
    let pakartojimas;
    let pakartojimas1;
    let pakartojimas2;

    pakartojimas=zodzioPakartojimas(zodis);
    pakartojimas1=zodzioPakartojimas(zodis1);
    pakartojimas2=zodzioPakartojimas(zodis2);

    console.log(pakartojimas) 
    console.log(pakartojimas1)
    console.log(pakartojimas2)
}
function zodzioPakartojimas(a) {
    return a+a;
}
