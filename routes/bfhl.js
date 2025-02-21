const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const { data } = req.body;
    
    // Check if 'data' is provided and is an array
    if (!data || !Array.isArray(data)) {
        return res.status(400).json({ message: "Invalid input: 'data' should be an array." });
    }

    // Separate numbers and alphabets
    const numbers = data.filter(item => !isNaN(item)).map(Number);
    const alphabets = data.filter(item => isNaN(item));

    // Return response
    res.json({
        is_success: true,
        user_id: "priyankabarman1604@gmail.com",  // Replace with actual user ID
        numbers: numbers,
        alphabets: alphabets
    });
});

module.exports = router;
