 window.onload=function() {
    let pradine;
    let galutine;
    let pradine1;
    let galutine1;
    let kitimas;
    let kitimas1;
    pradine=100;
    galutine=275;
    pradine1=15.99;
    galutine1=16.99;

    kitimas=kainosKitimas(pradine, galutine);
    kitimas1=kainosKitimas(pradine1, galutine1);

    console.log(kitimas+"%")
    console.log(kitimas1+"%")

 }
 function kainosKitimas(a,b){
    return (100- (b*100/a))*-1;
 }