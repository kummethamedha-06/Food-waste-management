const bcrypt = require("bcrypt");
const db = require("./db");

const email = "meeha@example.com";
const plainPassword = "medha123"; // User's password

bcrypt.hash(plainPassword, 10, (err, hashedPassword) => {
    if (err) {
        console.error("Error hashing password:", err);
        return;
    }

    db.query("INSERT INTO users (email, password) VALUES (?, ?)", [email, hashedPassword], (err, result) => {
        if (err) {
            console.error("Error inserting user:", err);
        } else {
            console.log("User registered successfully!");
        }
        process.exit(); // Exit script after execution
    });
});
