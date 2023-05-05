
document.querySelector("#form").addEventListener("submit", function(event) {
    event.preventDefault();

    const userName = event.target.name.value;
    const userPassword = event.target.password.value;

    let errorsText = ""

    if(userName == "") {
        errorsText += "Debes introducir un nombre\n";
    }

    if(userName.length < 3) {
        errorsText += "Tu nombre debe contener al menos 3 caracteres\n";
    }

    if(userPassword == "") {
        errorsText += "Debes introducir una contraseña\n";
    }

    if(userPassword < 5) {
        errorsText += "Debes introducir una contraseña de al menos 8 caracteres\n";
    }

    const alert = document.createElement("p");
    form.appendChild(alert);
    alert.innerText = errorsText;

    setTimeout(() => {
        alert.remove();
    }, 4000);
})