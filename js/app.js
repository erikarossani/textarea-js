window.addEventListener("load", function() {
	var boton = document.getElementById("resultado");
  boton.disabled =true;
  var textArea = document.getElementById("texto");

	boton.addEventListener("click", function(e){
		e.preventDefault();
		var texto = textArea.value;
            agregarMensaje(texto);
            textArea.value ="";
            boton.disabled= true;


    });  
    function agregarMensaje(texto){
        var nuevoItem = document.createElement("div");
        nuevoItem.classList.add("texto")
        nuevoItem.innerHTML =texto;

       var lista = document.getElementById("comentario");
       lista.insertBefore(nuevoItem, comentario.childNodes[0]);
       document.getElementById("texto").value = "";
    }  
    textArea.addEventListener("keydown", function(){
      boton.disabled=false;
     });
});
