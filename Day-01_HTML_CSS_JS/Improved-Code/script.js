// ==========================
// DOM Elements
// ==========================

const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

const loginBtn = document.getElementById("loginBtn");
const showBtn = document.getElementById("showBtn");

const result = document.getElementById("result");
const output = document.getElementById("output");

// ==========================
// Valid Login Credentials
// ==========================

const validUsername = "admin";
const validPassword = "admin";

// ==========================
// Login Validation
// ==========================

loginBtn.addEventListener("click", login);

function login() {

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (username === "" || password === "") {

        result.className = "error";
        result.textContent = "Please enter both username and password.";
        return;

    }

    if (username === validUsername && password === validPassword) {

        result.className = "success";
        result.textContent = "Login Successful!";

    } else {

        result.className = "error";
        result.textContent = "Invalid username or password.";

    }

}

// ==========================
// Show Details
// ==========================

showBtn.addEventListener("click", showDetails);

function showDetails() {

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (username === "" || password === "") {

        result.className = "error";
        result.textContent = "Please enter both username and password.";
        return;

    }

    const hiddenPassword = "*".repeat(password.length);

    result.className = "info";

    result.textContent =
`Username : ${username}
Password : ${hiddenPassword}`;

}

// ==========================
// JavaScript Practice
// ==========================

let text = "";

// Function

function greet(name) {
    return `Hello, ${name}!`;
}

text += "===== Function =====\n";
text += greet("Samhitha");
text += "\n\n";

// Addition Function

function addNumbers(a, b) {
    return a + b;
}

text += "===== Addition =====\n";
text += `10 + 20 = ${addNumbers(10, 20)}`;
text += "\n\n";

// Arrow Functions

const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => (a / b).toFixed(2);

text += "===== Arrow Functions =====\n";
text += `Addition       : ${add(5, 3)}\n`;
text += `Subtraction    : ${sub(5, 3)}\n`;
text += `Multiplication : ${mul(5, 3)}\n`;
text += `Division       : ${div(5, 3)}`;

text += "\n\n";

// Conditional Statements

const marks = 85;

text += "===== Condition =====\n";

if (marks >= 90) {

    text += "Grade : A";

} else if (marks >= 75) {

    text += "Grade : B";

} else {

    text += "Grade : C";

}

text += "\n\n";

// For Loop

text += "===== For Loop =====\n";

for (let i = 1; i <= 5; i++) {
    text += i + "\n";
}

text += "\n";

// While Loop

text += "===== While Loop =====\n";

let i = 1;

while (i <= 5) {
    text += i + "\n";
    i++;
}

output.textContent = text;