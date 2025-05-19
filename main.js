const form = document.querySelector(".Formulario form");
form.addEventListener("submit",(event) => { event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const mensaje = document.getElementById('mensaje').value;
    const correo = document.getElementById('correo').value;

    console.log("Nombre:", nombre);
    console.log("mensaje:", mensaje);
    console.log("Correo Electronico:", correo);

    alert(nombre+", el correo ingresado es: "+correo+ " y tu motivo para contactar es: \n" +mensaje);
}
);