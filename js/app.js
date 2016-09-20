window.addEventListener("load", function() {
	var boton = document.getElementById("resultado");
  boton.disabled =true;
  var textArea = document.getElementById("texto");
  var contar = document.getElementById("contar");

	boton.addEventListener("click", function(e){
		e.preventDefault();
		var texto = textArea.value;
            agregarMensaje(texto);
            textArea.value ="";
            boton.disabled= true;


    });  
    function agregarMensaje(texto){
        var nuevoItem = document.createElement("div");
        nuevoItem.classList.add("texto");
        nuevoItem.innerHTML =texto;

       var lista = document.getElementById("comentario");
       lista.insertBefore(nuevoItem, comentario.childNodes[0]);
       document.getElementById("texto").value = "";
    }  

    textArea.addEventListener("keyup", function(){
      var longitud = 140;
      var caracter = textArea.value.length;
      contar.innerText = longitud - caracter;

      if(parseInt(contar.innerText) <= 0){
        boton.disabled=true;
      } else {
        boton.disabled=false;
      }

      if(parseInt(contar.innerText) <= 20){
         contar.style.color ="#B80D57";
      }

      if(parseInt(contar.innerText) <= 10){
        contar.style.color ="#986EAD";
      }
     });

});
