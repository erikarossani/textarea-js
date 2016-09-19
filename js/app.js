window.addEventListener("load", function() {
	var boton = document.getElementById("resultado");
	boton.addEventListener("click", function() {
		var texto = document.getElementById("texto").value;

        var nuevoItem = document.createElement("div");
        nuevoItem.classList.add("texto")
        nuevoItem.innerHTML =texto;

       var lista = document.getElementById("comentario");
       lista.insertBefore(nuevoItem, comentario.childNodes[0]);
       document.getElementById("texto").value = "";
    });
});
