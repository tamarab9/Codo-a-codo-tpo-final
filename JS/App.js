document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("validForm").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    var usuario = document.getElementById('InputNombre').value;
    if (InputNombre.value === "") {
      alert("Por favor, escribe tu nombre");
      return;
    }
    const direcciónEmail = document.getElementById('InputEmail').value;
    if (InputEmail.value === "") {
     alert("Por favor, escribe tu correo electrónico");
      return;
    }
    const asunto = document.getElementById('InputAsunto').value;
    if (InputAsunto.value === "") {
     alert("Por favor, escribe un asunto");
      return;
    }
    const mensaje = document.getElementById('InputMensaje').value;
    if (InputMensaje.value === "") {
     alert("Por favor, escribe tu mensaje");
      return;
    }

    this.submit();
  }