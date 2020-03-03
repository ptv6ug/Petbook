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
        /*alert("Page should redirect here.")*/
        window.location.href = "dashboard.html";
    }
}

var likes1 = 0;
function increaseLike1() {
  likes1 += 1;
  document.getElementById("likes1").innerHTML= likes1;
}

var likes2 = 0;
function increaseLike2() {
  likes2 += 1;
  document.getElementById("likes2").innerHTML= likes2;
}

var likes3 = 0;
function increaseLike3() {
  likes3 += 1;
  document.getElementById("likes3").innerHTML= likes3;
}
