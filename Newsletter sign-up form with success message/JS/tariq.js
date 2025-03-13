function boton(){

    document.getElementById("todo").style.display = "none";
    document.getElementById("escondido").style.display = "contents";


}
function boton2(){

    document.getElementById("escondido").style.display = "none";
    document.getElementById("todo").style.display = "contents";

    let a = document.getElementById("correo").value;
    document.getElementById("email").innerHTML = a;

}