function test() {
    alert("This is a JS test.")
}

function setFocus() {
    document.getElementById("inputEmail").focus();
  }

function validateLogin() {
    var emailEntered = document.getElementById("inputEmail").value;
    var passwordEntered = document.getElementById("inputPassword").value;
    if ((emailEntered === "") | (passwordEntered === "")) {
            document.getElementById("loginErrorPlaceholder").textContent = "Username and/or password cannot be empty.";
    } else {
        alert("Page should redirect here.")
    }
}