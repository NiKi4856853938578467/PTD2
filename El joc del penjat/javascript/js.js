const LlistatParaules = ["messi","tariq","ladrillo","casa"];

   let ParaulaSecreta;

   let ArrayParaulaGuions = [];

   let ArrayParaulaSecreta;  


   let NumErrades=0;
   let NumEncerts=0;


   const llistatLletres = [];

   
   function Inicialitzar () {

      var input = document.getElementById("letra");
      input.addEventListener("keypress", function(event) {if (event.key === "Enter") {
         event.preventDefault();
         document.getElementById("boton").click();
      }

      })


       
       let posicion = Math.floor(Math.random() * LlistatParaules.length);
   


       ParaulaSecreta = LlistatParaules[posicion];



       ArrayParaulaSecreta = Array.from(ParaulaSecreta);

       document.getElementById("palabra_solucion").innerHTML = ParaulaSecreta ;


    

    let num_guions = ArrayParaulaSecreta.length;
    for (let i=0;i<num_guions;i++) {
            ArrayParaulaGuions[i] = '_';  
            
    }

    for (let i=0;i<num_guions;i++) {
      document.getElementById("palabra").innerHTML += 
      `${ArrayParaulaGuions[i]} `;
    }

   }

function Enviar()  {

let encert = false;

let lletra_escrita = document.getElementById("letra").value;

llistatLletres.push(lletra_escrita);
document.getElementById("llistat_lletres").innerHTML += `${lletra_escrita} <br>`;

document.getElementById("formulario").reset();

for (let i = 0; i < ArrayParaulaSecreta.length; i++) {
   if (ArrayParaulaSecreta[i] == lletra_escrita) {
       ArrayParaulaGuions[i] = lletra_escrita;
      encert = true;
     NumEncerts++;
   }
}


if (!encert) {
   NumErrades++;
}

//5.ESBORREN LA PARAULA

document.getElementById("palabra").innerHTML = "";

for (let i=0; i <ArrayParaulaGuions.length;i++) {
   document.getElementById("palabra").innerHTML += 
   `${ArrayParaulaGuions[i]} `;
 }

 document.getElementById("letra").focus();
  Dibuixar(NumErrades, NumEncerts);

}

function Dibuixar (errades,encerts) {

let imatge = document.getElementById("imagen");

switch(errades) {
    case 0:  
          
 imatge.src = "IMG/A0.png";
 break;

     case 1:  
          
 imatge.src = "IMG/A1.png";
 break;

     case 2:  
          
 imatge.src = "IMG/A2.png" ;
 break;

 case 3:  
          
 imatge.src = "IMG/A3.png" ;
 break;

 case 4:  
          
 imatge.src = "IMG/A4.png" ;
 break;

 case 5:  
          
 imatge.src = "IMG/A5.png";
 break;

 case 6:  
          
 imatge.src = "IMG/A6.png";
 break;

 
}


if (NumEncerts== ArrayParaulaSecreta.length){
   document.getElementById("fraseencert").innerHTML += `Has guanyat`;
   document.getElementById("victoria").style.display="block";

}


if (NumErrades== ArrayParaulaSecreta.length){
   document.getElementById("fraseerrada").innerHTML += `Has perdut`;
   document.getElementById("derrota").style.display="block"

}

}
    





    let refresh = document.getElementById('reiniciar');
    refresh.addEventListener('click', _ => {
                location.reload();
    })


