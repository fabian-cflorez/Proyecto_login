"use strict";

function ingresar(){
    console.log("Has ingresado exitosamente")
}

let funcFoco = window.onload = function foco() {
    const campoUsuarioFocus = document.querySelector("#input_usuario").focus();
}

function mayusLetra(e){
    e.value = e.value.toUpperCase();
}

function verificarDatos(){
    const campoUsuario = document.querySelector("#input_usuario").value;
    const campoPassword = document.querySelector("#input_password").value;
    const codigoError = ["ambos", "usuario", "password", "ninguno"];

    const expregLetras = /^[A-Za-z]+$/;
    // console.log("Ha sido ejecutado");

    let validarCampoUsuario = campoUsuario.match(expregLetras) ? true : false;
    let validarCampoPassword = campoPassword.match(expregLetras) ? true : false;

    if (validarCampoUsuario && validarCampoPassword){
        // console.log("Exitoso");
        agregarMensajeExitoso(codigoError[0]);
    }else if (!validarCampoUsuario && validarCampoPassword){
        // console.log("Validacion campo usuario");
        errorCampoUsuario(codigoError[1]);
    }else if(validarCampoUsuario && !validarCampoPassword){
        // console.log("Validacion campo Password");
        errorCampoPassword(codigoError[2]);
    }
    else if(!validarCampoUsuario && !validarCampoPassword){
        // console.log("Ambos incorrectos");
        errorCamposIncorrectos(codigoError[3]);
    }
}

function agregarMensajeExitoso(codigoError){
    // console.log("Function AgregarMensajeExitoso");
    // console.log(codigoError);
    const mensaje = "Acceso concedido";
     
    const campoUsuario = document.querySelector("#input_usuario");
    const campoPassword = document.querySelector("#input_password");
    const mensajeValidacion = document.querySelector("#mensajeValidacion");

    mensajeValidacion.classList.add("mensajeValidacionExitoso");

    campoUsuario.classList.add("input_exitoso");
    campoPassword.classList.add("input_exitoso");

    mensajeValidacion.innerHTML = mensaje;

    Swal.fire({
                title: "Reconocimiento de usuario",
                text: "Exitoso",
                icon: "success",
                // footer: "Ya nos despedimos",
                position: "center",
                // showConfirmButton: "false",
                // showCancelButton: "true",
                showCloseButton : "true",
                // timer: 2000
    });

    setTimeout(function(){
        limpiarFormulario(codigoError, campoUsuario, campoPassword, mensajeValidacion);
    },3000);
}

function errorCampoUsuario(codigoError){
    // console.log("Funcion error campo usuario");
    // console.log(codigoError);
    const campoUsuario = document.querySelector("#input_usuario");
    const campoPassword = document.querySelector("#input_password");
    const agregarTag = document.querySelector("#mensajeValidacion");
    const boton_ingresar = document.querySelector("#boton_ingresar");
    const mensaje = "Verifica el Usuario";

    agregarTag.innerHTML = mensaje;
    campoUsuario.classList.add("input_error");
    agregarTag.classList.add("mensajeValidacionError");

    Swal.fire({
        title: "Verifique el usuario",
        icon: "error",
        position: "center",
    });

    setTimeout(function(){
        limpiarFormulario(codigoError, campoUsuario, campoPassword, mensajeValidacion);
    },3000);
}

function errorCampoPassword (codigoError){
    // console.log("Funcion error campo password");
    // console.log(codigoError);

    const campoUsuario = document.querySelector("campo_usuario");
    const campoPassword = document.querySelector("#input_password");
    const mensaje = "Verifica la contraseña";
    const mensajeValidacion = document.querySelector("#mensajeValidacion");

    mensajeValidacion.classList.add("mensajeValidacionError");
    campoPassword.classList.add("input_error");

    mensajeValidacion.innerHTML = mensaje;

    Swal.fire({
        title: "Verifique la contraseña",
        icon: "error",
        position: "center",
    });

    setTimeout(function(){
        limpiarFormulario(codigoError, campoUsuario, campoPassword, mensajeValidacion);
    },3000);
}

function errorCamposIncorrectos(codigoError){
    // console.log("Funcion ambos incorrectos");
    // console.log(codigoError);

    const campoUsuario = document.querySelector("#input_usuario");
    const campoPassword = document.querySelector("#input_password");
    const mensajeValidacion = document.querySelector("#mensajeValidacion");

    const mensaje = "Validar campos";

    campoUsuario.classList.add("input_error");
    campoPassword.classList.add("input_error");
    mensajeValidacion.innerHTML = mensaje;
    mensajeValidacion.classList.add("mensajeValidacionError");

    Swal.fire({
        title: "Verifique los campos",
        icon: "error",
        position: "center",
    });

    setTimeout(function(){
        limpiarFormulario(codigoError, campoUsuario, campoPassword, mensajeValidacion);
    },3000);
}


//osddfnvoeanfgvoinfvboiñnoivbfsn{b}
function limpiarFormulario(codigoError, campoUsuario, campoPassword, mensajeValidacion){
    const formularioLogin = document.querySelector("#form_login");
    const boton_ingresar = document.querySelector("#boton_ingresar");

    if(codigoError == "ambos")
    {
        // console.log("Condicional ambos");
        campoUsuario.classList.toggle("input_exitoso");
        campoPassword.classList.toggle("input_exitoso");
        mensajeValidacion.classList.toggle("mensajeValidacionExitoso");
        mensajeValidacion.innerHTML = "";
    }else if(codigoError == "usuario"){
        // console.log("Condicional Usuario");
        campoUsuario.classList.toggle("input_error");
        mensajeValidacion.classList.toggle("mensajeValidacionError");
        mensajeValidacion.innerHTML = "";
    }else if(codigoError == "password"){
        // console.log("condicional password");
        campoPassword.classList.toggle("input_error");
        mensajeValidacion.classList.toggle("mensajeValidacionError");
        mensajeValidacion.innerHTML = "";
    }else if(codigoError == "ninguno"){
        // console.log("Condicional ninguno");
        campoUsuario.classList.toggle("input_error");
        campoPassword.classList.toggle("input_error");
        mensajeValidacion.classList.toggle("mensajeValidacionError");
        mensajeValidacion.innerHTML = "";
    }else{
        console.log("Alguna condicional ha fallado");
    }

    
    boton_ingresar.removeAttribute("disabled");
    boton_ingresar.setAttribute("value" , "Ingresar");

    formularioLogin.reset();
}



// async function cargarSweetAlert2(){
//     // const response = await fetch("https://cdn.jsdelivr.net/npm/sweetalert2@11");
//     // const cdnSweet = await response.
//     const promesa = await fetch("https://cdn.jsdelivr.net/npm/sweetalert2@11");
//     console.log ("SweetAlert");
//     const promesaData = await promesa.text();
//     console.log (promesaData);
//     pokeApi2();
// }


// async function pokeApi2(){
//     const pokemon = await fetch ("https://pokeapi.co/api/v2/pokemon/charizard");
//     console.log ("PokeApi2");
//     console.log (pokemon);
//     const pokemonData = await pokemon.json();
//     console.log(pokemonData);
// }

async function cargarCdnSweetAlert(){
    try{
        const cdnUrl = "https://cdn.jsdelivr.net/npm/sweetalert2@11";
        const solicitud = await fetch(cdnUrl, {method: 'HEAD'});
        // console.log(solicitud.ok);
        solicitud.ok === true ? cargarSweetAlertCDN() : console.log("");
        
    }catch(e){
        // e instanceof(Error) ? console.log("Algo salió mal pero fue controlado") : console.log("asdfv");
        e instanceof(Error) ? cargarSweetAlertLocal() : console.log("");
        // pokeApi2();
        
    }
}

function cargarSweetAlertCDN(){
    // console.log("cargarSweetAlertCDN")
    const insertarScript = document.createElement("script");
    insertarScript.src = "https://cdn.jsdelivr.net/npm/sweetalert2@11";

    // insertarScript.onload = () =>{
    //     Swal.fire({
    //         title: "Mensaje cargado desde CDN",
    //         text: "El proceso ha sido exitoso",
    //         icon: "success",
    //         // footer: "Ya nos despedimos",
    //         position: "center",
    //         // showConfirmButton: "false",
    //         // showCancelButton: "true",
    //         showCloseButton : "true",
    //         // timer: 2000
    //     });
    // }
    document.head.appendChild(insertarScript);
}

function cargarSweetAlertLocal(){
    console.log("cargarSweetAlertLocal");
    const insertarRutaLocal = document.createElement("script");
    insertarRutaLocal.src = "js/sweetalert2_11.js";

    insertarRutaLocal.onload = () => {
        Swal.fire("Mensaje cargado desde local");
    }
    document.head.appendChild(insertarRutaLocal);
}

// function cargarSweetAlert() {
//     const cdnUrl = 'https://cdn.jsdelivr.net/npm/sweetalert2@11';
  
//     // Intenta cargar el script desde el CDN
//     fetch(cdnUrl, { method: 'HEAD' })
//       .then(response => {
//         // Verificar el código de estado de la respuesta
//         if (response.ok) {
//           // Si hay acceso al CDN, cargar SweetAlert2 desde allí
//         //   console.log(response.headers);
//           cargarDesdeCDN();
//         } else {
//           // Si no hay acceso al CDN, cargar SweetAlert2 desde archivos locales
//           cargarDesdeArchivosLocales();
//         }
//       })
//       .catch(() => {
//         // En caso de error, cargar SweetAlert2 desde archivos locales
//         cargarDesdeArchivosLocales();
//       });
// }
  
// Función para cargar SweetAlert2 desde el CDN
//   function cargarDesdeCDN() {
//     const script = document.createElement('script');
//     script.src = 'https://cdn.jsdelivr.net/npm/sweetalert2@10';
//     script.onload = () => {
//       // SweetAlert2 cargado exitosamente desde el CDN
//       Swal.fire('¡Hola desde SweetAlert2!');
//     };
//     document.head.appendChild(script);
//   }
  
  // Función para cargar SweetAlert2 desde archivos locales
//   function cargarDesdeArchivosLocales() {
//     // Puedes cargar los archivos locales como prefieras
//     // Aquí puedes incluir lógica para cargar desde un archivo local
//     // o utilizar SweetAlert2 de otra manera cuando no hay acceso al CDN
//     console.log('No se pudo acceder al CDN, cargando desde archivos locales.');
//   }

// Llamar a la función para iniciar el proceso de carga
//   cargarSweetAlert();
//   cargarCdnSweetAlert();
//   cargarSweetAlert();