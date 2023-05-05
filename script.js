// const btn = document.querySelector("#btn");
// btn.addEventListener("click", function() {
//     document.body.setAttribute("background-color", "pink");
// })

document.querySelector("#form").addEventListener("submit", function(event) {
    event.preventDefault();

    const userName = event.target.name.value;
    const userPassword = event.target.password.value;

    if(userName == "") {
        console.log("Nombre requerido");
    }

    if(userPassword == "") {
        console.log("Contraseña requerida");
    }
})