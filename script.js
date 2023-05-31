        document.addEventListener('DOMContentLoaded', function() {
        let palabra = document.querySelector(".sinencriptar");
        let button = document.querySelector(".encriptar");
        let button2 = document.querySelector(".desencriptar")
        let respuesta = document.querySelector(".salidaTexto");
        let copiarBoton = document.querySelector(".copiar");
        let robot = document.querySelector(".robot")
        let nuevaPalabra = "";

    function codificar() {
    if (/[A-ZÁÉÍÓÚÜ]/.test(palabra.value) || /[áéíóúÁÉÍÓÚÜ]/.test(palabra.value)) {
      alert("No se permiten mayúsculas ni tildes. Por favor, ingrese solo letras minúsculas sin tildes.");
      return;
    }
    nuevaPalabra = "";
    for (let i = 0; i < palabra.value.length; i++) {
      if (palabra.value[i] === "a") {
        nuevaPalabra += "ai";
      } else if (palabra.value[i] === "e") {
        nuevaPalabra += "enter";
      } else if (palabra.value[i] === "i") {
        nuevaPalabra += "imes";
      } else if (palabra.value[i] === "o") {
        nuevaPalabra += "ober";
      } else if (palabra.value[i] === "u") {
        nuevaPalabra += "ufat";
      } else {
        nuevaPalabra += palabra.value[i];
      }
    }
    palabra.value=""
    respuesta.textContent = nuevaPalabra;
  }

  function decodificar() {
  if (/[A-ZÁÉÍÓÚÜ]/.test(palabra.value) || /[áéíóúÁÉÍÓÚÜ]/.test(palabra.value)) {
    alert("No se permiten mayúsculas ni tildes. Por favor, ingrese solo letras minúsculas sin tildes.");
    return;
  }
  nuevaPalabra = "";
  let i = 0;
  while (i < palabra.value.length) {
    let letraActual = palabra.value[i];
    let siguienteLetras = palabra.value.slice(i + 1);

    if (letraActual === "a" && siguienteLetras.startsWith("i")) {
      nuevaPalabra += letraActual;
      i += 2; // Avanza 2 posiciones para saltar "a" e "i"
    } else if (letraActual === "e" && siguienteLetras.startsWith("nter")) {
      nuevaPalabra += letraActual;
      i += 5; // Avanza 5 posiciones para saltar "e" y "nter"
    } else if (letraActual === "i" && siguienteLetras.startsWith("mes")) {
      nuevaPalabra += letraActual;
      i += 4; // Avanza 4 posiciones para saltar "i" y "mes"
    } else if (letraActual === "o" && siguienteLetras.startsWith("ber")) {
      nuevaPalabra += letraActual;
      i += 4; // Avanza 4 posiciones para saltar "o" y "ber"
    } else if (letraActual === "u" && siguienteLetras.startsWith("fat")) {
      nuevaPalabra += letraActual;
      i += 4; // Avanza 4 posiciones para saltar "u" y "fat"
    } else {
      nuevaPalabra += letraActual;
      i++; // Avanza 1 posición para pasar a la siguiente letra
    }
  }

  palabra.value = "";
  respuesta.textContent = nuevaPalabra;
}

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      codificar();
    }
  }

  button.addEventListener('click', function(event) {
    codificar();
  });
  button2.addEventListener('click',function(event){
    decodificar();
    
  })


    copiarBoton.addEventListener('click', function() {

      let salidaTexto = document.querySelector('.salidaTexto');
      salidaTexto.select(); // Selecciona el contenido del textarea
      document.execCommand('copy'); // Copia el contenido al portapapeles 
    });
});
