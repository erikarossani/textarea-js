# textarea-js

## Contexto

El ejercicio es hacer un textarea tipo twitter.

## Explicación del ejercicio

###Versión 0.0.1:
1. Diseñar un formulario que tenga un textarea y un botón.
2. Agregar un evento de click al botón o un evento de submit al formulario.
3. En el evento, coger el texto del textarea.
4. Agegar el texto al HTML.

###Versión 0.0.2:
1. No ingresar texto vacío (deshabilitar el botón de enviar).
2. Contar la cantidad de caracteres de forma regresiva.

###Versión 0.0.3:
1. Si pasa los 140 caracteres, deshabilitar el botón.
2. Si pasa los 120 caracteres, mostrar el contador con OTRO color.
3. Si pasa los 130 caracteres, mostrar el contador con OTRO color.
4. si pasa los 140 caracteres, mostrar el contador en negativo.

###Versión 0.0.4:
1. Al presionar enter ("/n") que crezca el textarea de acuerdo al tamaño del texto.

###Versión 0.0.5: (Extra)
1. Si la cantidad de caracteres ingresados (sin dar un enter), supera al tamaño del textarea por defecto, debe de agregarse una línea 2. más para que no aparezca el scroll. (Si en caso aplica)
3. Versión 0.0.6: (Extra)
4. Agregar la hora en que se publicó el tweet. En el formato de 24 horas: hh:mm

```javascript

window.addEventListener("load", function() {// para cuand se cargue la ventana del navegador.
	var boton = document.getElementById("resultado");// Se llama la etiqueta <buttom>
  boton.disabled =true;// el boton esta inactivo  por la propiedad (disabled)
  var textArea = document.getElementById("texto");// se esta llamando al <textarea>
  var contar = document.getElementById("contar");// Se llama el <div> donde va aparecer el contador

	boton.addEventListener("click", function(e){// se le indica que cuando se haga click en boton se ejecute lo siguiente:
		e.preventDefault();//Detiene la acción predeterminada de un elemento suceda.
		var texto = textArea.value;
            agregarMensaje(texto);// hace que se muestre en el navegador lo que ejecuta la funcion
            textArea.value ="";
            boton.disabled= true;
            contar.textContent= "140";
            textArea.style.height = "50px";



    });  
    function agregarMensaje(texto){//funcion para mostrar hora y poder hacer comentario creando un div:
        var nuevoItem = document.createElement("div");
        var hora = document.createElement("div");
        var fechaHora = new Date();
        var horas = fechaHora.getHours();
        var minutos = fechaHora.getMinutes();
        var segundos = fechaHora.getSeconds();

        if(horas < 10){ 
          horas = "0" + horas; 
        }

       if(minutos < 10) {
         minutos = "0" + minutos; 
       }

       if(segundos < 10){ 
        segundos = "0" + segundos; 
       }

       hora.textContent = horas + ":" + minutos + ":" + segundos;

        nuevoItem.classList.add("texto");
        hora.classList.add("hora");
        nuevoItem.innerHTML =texto;

       var lista = document.getElementById("comentario");
       lista.insertBefore(hora, comentario.childNodes[0]);
       lista.insertBefore(nuevoItem, comentario.childNodes[0]);
       document.getElementById("texto").value = "";
    }  

    textArea.addEventListener("keyup", function(){
      var longitud = 140;
      var caracter = textArea.value.length;
      contar.innerText = longitud - caracter;      
      textArea.style.height = "10px";
      textArea.style.height = (25+textArea.scrollHeight)+"px";

      if(parseInt(contar.innerText) <= 0){
        boton.disabled=true;
      } else {
        boton.disabled=false;
      }

      if(parseInt(contar.innerText) <= 20){
         contar.style.color ="#B80D57";
      } else{
         contar.style.color ="#000000";
      }

      if(parseInt(contar.innerText) <= 10){
        contar.style.color ="#986EAD";
      }

     });
     
});

```
