let nameInput = document.getElementById("name");
let email = document.getElementById("email");
let message = document.getElementById("message");
let phone = document.getElementById("phone");
let alertMessage = document.getElementsByClassName("alert");
let submitBtn = document.getElementById("submitBtn");
let form = document.getElementById("form");

function submitForm() {
    let valid = true;

    if (nameInput.value === "") {
        alertMessage[0].innerText = "You Should Enter Your Name";
        alertMessage[0].style.color = "red";
        alertMessage[0].style.fontSize = "14px";
        valid = false;
    }

    if (phone.value === "") {
        alertMessage[1].innerText = "You Should Enter Your Phone Number";
        alertMessage[1].style.color = "red";
        alertMessage[1].style.fontSize = "14px";    
        valid = false;
    }

    if (email.value === "") {
        alertMessage[2].innerText = "You Should Enter Your Email";
        alertMessage[2].style.color = "red";
        alertMessage[2].style.fontSize = "14px";
        valid = false;
    }

    if (message.value === "") {
        alertMessage[3].innerText = "You Should Enter Your Message";
        alertMessage[3].style.color = "red";
        alertMessage[3].style.fontSize = "14px";
        valid = false;
    }

    if (valid) {
        form.reset();
        console.log(`Form submitted successfully!  your name is ${nameInput.value}, phone is ${phone.value}, email is ${email.value}, and message is ${message.value}`);
    }
}

form.addEventListener("submit", function (event) {
    event.preventDefault();
});

submitBtn.addEventListener("click", submitForm);
