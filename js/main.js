function validateForm(){
	/* Escribe tú código aquí */
  var name = document.getElementById('name').value;
  var lastname = document.getElementById('lastname').value;
  var email = document.getElementById('input-email').value;
  var password =  document.getElementById('input-password').value;
  var form = document.getElementsByClassName('form-control').value;
  var spanNombre = document.getElementById('spanNombre').innerHTML="hola";
  //validando
  var letra = /[a-zA-Z]/;
  var mayuscula = /[A-Z]{1}/;
  var validarEmail = /\S+@\S+\.\S+/;

  if (name !="" && lastname !="" && email !="" && password !=""){

  }
    if(letra.test(name) != true){
      //spanNombre.setAttribute("style","display:block")
      var spanNombre = document.getElementById('spanNombre').innerHTML="Estructura de nombre no válida";
    }
    if(letra.test(lastname) != true){
      var spanApellido = document.getElementById('spanApellido').innerHTML="Estructura de apellido no válida";
    }
    if (mayuscula.test(name) != true){
      var spanNombre = document.getElementById('spanNombre').innerHTML="Primera letra de tu nombre debe ser máyuscula";
    }
    if (mayuscula.test(lastname) != true){
      var spanApellido = document.getElementById('spanApellido').innerHTML="Primera letra de tu apellido debe ser máyuscula";
    }
    if(validarEmail.test(email) != true){
      var spanEmail = document.getElementById('spanEmail').innerHTML="Estructura de correo no válida: \n Ingresar email@domain.com";
    }
    if(password.toString().length < 6 || password.toString() == "password" ||
      password == "123456" || password == "098754"){
    var spanPassword = document.getElementById('spanPassword').innerHTML="Estructura de contraseña no válida: \n Ingresar contraseña de 6 caracteres";
    }
    if(form == 0){
      var spanGroup = document.getElementById('spanGroup').innerHTML="Escoge tu tipo de bici";
    }
}

    /*
  var soloLetras = function(e){
    var codigoTecla= e.keyCode;
    if (codigoTecla != letras){
      this.nextElementSibling.nextElementSibling.innerText="";
      return true;
    }else {
      this.nextElementSibling.nextElementSibling.innerText="*Este campo solo permite letras";
      return false;
    }
  }
*/
