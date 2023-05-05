const btn = document.querySelector("#btn");

const form = document.querySelector("#form");
form.addEventListener("submit", function(event) {
    event.preventDefault();

    const userName = event.target.name.value;
    const userPassword = event.target.password.value;

    if(userName == "") {
        console.log("Nombre requerido");
    }

    if(userPassword == "") {
        console.log("Contraseña requerida");
    }

    const alert = document.createElement("p");
    form.appendChild(alert);
    alert.innerText = errorsText;
})