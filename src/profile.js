import { auth } from "./config.js";
import { onAuthStateChanged } from "firebase/auth";

onAuthStateChanged(auth, (user) => {
    if (user) {
        document.getElementById("userInfo").innerText = `Welcome, ${user.displayName} (${user.email})`;
    } else {
        window.location.href = "index.html"; // Redirect to login page
    }
});

