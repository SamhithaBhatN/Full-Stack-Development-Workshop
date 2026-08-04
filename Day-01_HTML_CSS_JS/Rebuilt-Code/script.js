const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("loginBtn");
const result = document.getElementById("result");

function login() {

    const username = usernameInput.value;
    const password = passwordInput.value;

    if (username === "admin" && password === "admin") {
        result.textContent = "Accepted";
    } else {
        result.textContent = "Not Accepted";
    }

}

loginButton.addEventListener("click", login);