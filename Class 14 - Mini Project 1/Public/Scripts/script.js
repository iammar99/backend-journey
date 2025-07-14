// ----------------------- Year -----------------------

document.getElementById("year").innerHTML = new Date().getFullYear()

// ----------------------- Password  -----------------------

function hidePassword() {
    const passwordInput = document.getElementById("exampleInputPassword1");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    }
    else {
        passwordInput.type = "password";
    }
}


function hideConfirmPassword() {
    const passwordInput = document.getElementById("confirmPassword");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    }
    else {
        passwordInput.type = "password";
    }
}
// -----------------------  TextArea -----------------------

const textarea = document.getElementById("floatingTextarea");

textarea.addEventListener("input", function () {
    this.style.height = "auto";
    this.style.height = this.scrollHeight + "px";
});


// -----------------------  Image form Submitted -----------------------


document.getElementById("image").addEventListener("change", function () {
    document.getElementById("imageUploadForm").submit();
});