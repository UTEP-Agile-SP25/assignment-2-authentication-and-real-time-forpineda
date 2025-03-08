import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth, db } from "./config.js";
import { doc, setDoc } from "firebase/firestore";

// Keep user signed in across pages
onAuthStateChanged(auth, async (user) => {
    if (user) {
        console.log("User Logged In:", user.email);
        localStorage.setItem("user", JSON.stringify(user)); // Store user data
    } else {
        console.log("No User is Signed In");
        localStorage.removeItem("user");
    }
});

export async function signUp(fullName, email, password) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log("User Signed Up:", user.email);

        // Update Display Name
        await updateProfile(user, {
            displayName: fullName,
        });

        // Save user data to Firestore
        const userRef = doc(db, "users", user.uid);
        await setDoc(userRef, {
            fullName: fullName,
            email: user.email,
            uid: user.uid,
            timestamp: new Date()
        });

        console.log("User data saved to Firestore.");
    } catch (error) {
        if (error.code === "auth/email-already-in-use") {
            alert("This email is already in use. Please use a different email or log in.");
        } else {
            console.error("Error creating user:", error);
        }
    }
}

export async function login(email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log("User Logged In:", userCredential.user.email);
    } catch (error) {
        console.error("Login error:", error.message);
    }
}

export async function logout() {
    try {
        await signOut(auth);
        console.log("Successfully Logged Out");
    } catch (error) {
        console.error("Logout Error:", error.message);
    }
}
