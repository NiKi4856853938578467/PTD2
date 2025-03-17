function boton(){

    let a = document.getElementById("correo").value;
    document.getElementById("email").innerHTML = a;
let arroba = "@"
let punto = "."
if(a.includes(arroba)  ){
if(a.includes(punto)   ){
    document.getElementById("todo").style.display = "none";
    document.getElementById("escondido").style.display = "contents";
}
}
    else {
        document.getElementById("correo").style.backgroundColor = "hsl(0, 85%, 68%)"
        document.getElementById("correo").style.borderColor = "red"
        document.getElementById("error").style.display = "contents";
    }


}




function boton2(){

    document.getElementById("escondido").style.display = "none";
    document.getElementById("todo").style.display = "contents";

    let a = document.getElementById("correo").value;
    document.getElementById("email").innerHTML = a;

}




