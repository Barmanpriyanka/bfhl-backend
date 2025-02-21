const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

// Root route to check if server is running
app.get("/", (req, res) => {
    res.send("Backend is running successfully!");
});

// Import bfhl route from routes folder
const bfhlRoutes = require('./routes/bfhl');
app.use('/bfhl', bfhlRoutes);

const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
    const url = `http://localhost:${PORT}/bfhl`;
    console.log(`Server is running on port ${PORT}`);
    console.log(`Click here to open: \x1b[36m${url}\x1b[0m`);
});
