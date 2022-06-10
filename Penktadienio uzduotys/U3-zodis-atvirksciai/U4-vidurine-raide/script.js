window.onload=function() {

    let zodis;
    let zodis1;
    let vidurine;
    let vidurine1;
    zodis="kristalizavimas";
    zodis1="voras"

    vidurine=vidurineRaide(zodis);
    vidurine1=vidurineRaide(zodis1);

    console.log(vidurine);
    console.log(vidurine1);


}
function vidurineRaide(a) {
    return a[(a.length+1)/2-1];
}
