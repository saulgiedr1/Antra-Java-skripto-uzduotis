window.onload=function(){
    let kaina;
    let kaina1;
    let procentai;
    let procentai1;
    let galutine;
    let galutine1;

    kaina=120;
    kaina1=2000;
    procentai=13;
    procentai1=1.258;

    galutine=kainosDidinimas(kaina, procentai);
    galutine1=kainosDidinimas(kaina1, procentai1);


    console.log(galutine);
    console.log(galutine1);



}
function kainosDidinimas(a, b){
   return a+(a*b)/100; 
  
}