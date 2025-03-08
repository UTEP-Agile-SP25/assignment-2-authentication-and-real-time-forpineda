import { logout, signUp, login } from "./auth.js";

// Sign Up Event
document.querySelector("#signUpForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    await signUp(fullName, email, password);
    window.location.href = "profile.html"; // Redirect to profile creation
});

// Log In Event
document.querySelector("#loginForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    const email = document.querySelector("#loginForm input[name='email']").value;
    const password = document.querySelector("#loginForm input[name='password']").value;

    await login(email, password);
    window.location.href = "profile.html"; // Redirect after login
});

// Log Out Event
document.querySelector("#logoutForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    await logout();
    alert("Logged out successfully!");
    window.location.href = "index.html"; // Redirect to login page
});
