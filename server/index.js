const express = require("express");
const cors = require("cors");
const db = require("./db"); 
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = 5000;

// ✅ Correct CORS middleware
app.use(cors());
app.use(express.json());

// 🔹 Test Route
app.get("/", (req, res) => {
    res.send("Server is running!");
});

// 🔹 User Registration Route
app.post("/register", async (req, res) => {
    const { email, password, username, age, phoneNumber, address, role } = req.body;

    if (!email || !password || !username || !age || !phoneNumber || !address || !role) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        const checkQuery = "SELECT * FROM users WHERE email = ?";
        db.query(checkQuery, [email], async (err, results) => {
            if (err) return res.status(500).json({ error: "Database error" });
            if (results.length > 0) return res.status(400).json({ error: "User already exists" });

            const hashedPassword = await bcrypt.hash(password, 10);
            const insertQuery = `
                INSERT INTO users (email, password, username, age, phoneNumber, address, role)
                VALUES (?, ?, ?, ?, ?, ?, ?)`;

            db.query(insertQuery, [email, hashedPassword, username, age, phoneNumber, address, role], (err, result) => {
                if (err) return res.status(500).json({ error: "Error registering user" });
                res.status(201).json({ message: "User registered successfully!" });
            });
        });
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});

// 🔹 User Login Route
app.post("/login", (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required" });
    }

    const query = "SELECT * FROM users WHERE email = ?";
    db.query(query, [email], async (err, results) => {
        if (err) return res.status(500).json({ error: "Database query error" });
        if (results.length === 0) return res.status(401).json({ error: "User not found" });

        const user = results[0];
        const isPasswordMatch = await bcrypt.compare(password, user.password);

        if (!isPasswordMatch) {
            return res.status(401).json({ error: "Invalid credentials" });
        }

        const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, "secret_key", { expiresIn: "1h" });

        res.json({ message: "Login successful", token, role: user.role });
    });
});

// 🔹 Save Learning Challenge Data Route

// 🔹 Save Donation Data Route

app.get('/feedback', (req, res) => {
    db.query('SELECT * FROM feedback ORDER BY created_at DESC', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});
app.post('/feedback', (req, res) => {
    const feedbackText = req.body.feedback_text;
    if (!feedbackText) {
        return res.status(400).send('Feedback is required');
    }
    console.log('Received feedback:', feedbackText);
    res.status(200).send('Thank you for your feedback!');
});


// 🔹 Get Donations Route
// Correct example
app.get('/donations', async (req, res) => {
    try {
        const donations = await getDonationsFromDB(); // Your data-fetching logic
        res.json(donations); // Send JSON response
    } catch (err) {
        console.error('Error fetching donations:', err);
        res.status(500).json({ error: 'Internal Server Error', details: err.message });
    }
});



// Add donation
app.post('/donations', (req, res) => {
    const { foodname, meal_type, category, quantity, email, phoneno, district, address } = req.body;
    db.query('INSERT INTO donations (foodname, meal_type, category, quantity, email, phoneno, district, address) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        [foodname, meal_type, category, quantity, email, phoneno, district, address],
        (err, result) => {
            if (err) return res.status(500).send(err);
            res.status(201).send({ message: 'Donation added successfully' });
        });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
