/* =========================
AUTH SYSTEM INTERACTIONS

========================= */

/* Dark mode */
function toggleDarkMode() {
document.body.classList.toggle("dark-mode");
}

/* Password show/hide */
function togglePassword(id, icon) {
let input = document.getElementById(id);
let iconEl = document.getElementById(icon);


if (!input || !iconEl) return;

if (input.type === "password") {
    input.type = "text";
    iconEl.className = "bi bi-eye-slash position-absolute";
} else {
    input.type = "password";
    iconEl.className = "bi bi-eye position-absolute";
}


}

/* Password strength */
function checkStrength() {
let pwd = document.getElementById("password").value;
let meter = document.getElementById("strengthText");


if (!meter) return;

if (pwd.length === 0) {
    meter.innerText = "Password strength";
    meter.style.color = "gray";
} else if (pwd.length < 4) {
    meter.innerText = "Weak";
    meter.style.color = "red";
} else if (pwd.length < 8) {
    meter.innerText = "Medium";
    meter.style.color = "orange";
} else {
    meter.innerText = "Strong";
    meter.style.color = "green";
}


}

/* Register validation */
function validateRegister(e) {
e.preventDefault();

let name = document.getElementById("name").value.trim();
let email = document.getElementById("email").value.trim();
let password = document.getElementById("password").value.trim();

if (name === "" || email === "" || password === "") {
    alert("Please fill all fields");
    return false;
}

if (password.length < 6) {
    alert("Password must be minimum 6 characters");
    return false;
}

alert("Registration successful");

setTimeout(() => {
    window.location.href = "index.html";
}, 900);

return true;


}



function forgotSubmit(e) {
e.preventDefault();

let email = document.getElementById("forgotEmail").value.trim();

if (email === "") {
    alert("Please enter email");
    return false;
}

alert("Reset link sent successfully!");

// simulate real flow → redirect
setTimeout(() => {
    window.location.href = "reset-password.html";
}, 1200);

return true;


}



function resetSubmit(e) {
e.preventDefault();


let pass1 = document.getElementById("newPassword").value;
let pass2 = document.getElementById("confirmPassword").value;

if (pass1 === "" || pass2 === "") {
    alert("Please fill both fields");
    return false;
}

if (pass1 !== pass2) {
    alert("Passwords do not match");
    return false;
}

alert("Password updated ");
return true;


}


/* Login submit */
function loginSubmit(e) {
e.preventDefault();


let email = document.querySelector("input[type='email']").value.trim();
let password = document.getElementById("loginPassword").value.trim();
let btn = document.getElementById("loginBtn");

if (email === "" || password === "") {
    alert("Enter email and password");
    return false;
}

// show spinner properly
btn.innerHTML = '<span class="spinner-border spinner-border-sm"></span> Logging in';
btn.disabled = true;

setTimeout(() => {
    window.location.href = "dashboard.html";
}, 900);

return true;


}



/* Loading spinner effect */
function showLoading(btn) {
btn.innerHTML = '<span class="spinner-border spinner-border-sm"></span> Processing';
btn.disabled = true;
}
