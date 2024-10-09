let llistajugadors = [];

function Afegir() {
    
    let jugador = document.getElementById("camp_nom").value;

    document.getElementById("jugadors").innerHTML += `${jugador}<br>`;

    llistajugadors.push(jugador)
    
}

function Siguiente(){
    
    document.getElementById("input2").innerHTML = llistajugadors[0]
    let llista = llistajugadors.shift();
    llistajugadors.push(llista)
    document.getElementById("jugadors").innerHTML = " "
    for (let i = 0;i<llistajugadors.length;i++){

    document.getElementById("jugadors").innerHTML += `${llistajugadors[i]}<br>`;

    }


}