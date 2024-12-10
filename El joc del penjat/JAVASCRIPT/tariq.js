const llistaparaules = ["camion", "casa", "tariq", "messi", "ladrillo"];

const arraypalabraguiones = [];

let arrayparaulasecreta;
/*lineas*/

/*elemento aleatorio*/

/*numero de fallos y aciertos*/
let numfallos = 0;
let numencerts = 0;
/*lista de letras usadas*/
const llistalletres = [];

function Inicializar() {

    let random = Math.floor(Math.random(llistaparaules) * llistaparaules.length)
    palabrasecreta = llistaparaules[random]
arrayparaulasecreta = palabrasecreta.split('')



let guiones = arrayparaulasecreta.length;
for (let i=0;i<guiones;i++){
    arraypalabraguiones[i] = ' _ ';


}
for (let i=0;i<guiones;i++){
    document.getElementById("palabra").innerHTML += `${arraypalabraguiones[i]}  `;
}


}




function envia() {
let encert = false

let letra = document.getElementById("letra").value
document.getElementById("lista_letras").innerHTML += `${letra}</br>`
llistalletres.push(letra)
document.getElementById("formulario").reset()

for (let i=0;i<arrayparaulasecreta.length;i++){
    
    if(arrayparaulasecreta[i] == letra) {
        arraypalabraguiones[i] = letra;
        encert = true;
        numencerts++;
    }
}
if(!encert){
    numfallos++;
}

document.getElementById("palabra").innerHTML = ""

for(let i=0;i<arraypalabraguiones.length;i++){
    document.getElementById("palabra").innerHTML += `${arraypalabraguiones[i]}  `


}
document.getElementById("letra").focus()

dibuixar(numfallos, numencerts);
}







function dibuixar (fallos, aciertos){
    /*capturar l'id de la imatge a mostrar*/

    let imatge = document.getElementById("imagen");
    
    switch(fallos){

    case 0:
        imatge.src = "IMG/A0.png";
        break;

    case 1:
        imatge.src = "IMG/A1.png"
        break;
        
    case 2:
        imatge.src = "IMG/A2.png"
        break;

    case 3:
        imatge.src = "IMG/A3.png"
        break;

    case 4:
        imatge.src = "IMG/A4.png"
        break;

    case 5:
        imatge.src = "IMG/A5.png"
        break;

    case 6:
        imatge.src = "IMG/A6.png"; 
        document.getElementById("perder").innerHTML = " Has perdut ";
        document.getElementById("fallo").style.display = "block";
        break;
    }
  
    if (fallos >= 6){

        document.getElementById("palabra").innerHTML = "";

        for(let i=0;i<arrayparaulasecreta.length;i++){
            document.getElementById("palabra").innerHTML +=
            `${arrayparaulasecreta[i]}`;
        }
    }
    
    else if (aciertos >= arrayparaulasecreta.length){

        document.getElementById("ganar").innerHTML = "Has ganado"
}
    





    let refresh = document.getElementById('reiniciar');
    refresh.addEventListener('click', _ => {
                location.reload();
    })
}


