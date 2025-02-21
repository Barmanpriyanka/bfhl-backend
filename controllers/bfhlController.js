exports.handlePostRequest = (req, res) => {
    try {
        const { data } = req.body;

        if (!Array.isArray(data)) {
            return res.status(400).json({ is_success: false, message: "Invalid input format" });
        }

        const user_id = "john_doe_17091999"; // Replace with your actual details
        const email = "john@xyz.com";
        const roll_number = "ABCD123";

        const numbers = data.filter(item => !isNaN(item));
        const alphabets = data.filter(item => /^[A-Za-z]$/.test(item));

        const highest_alphabet = alphabets.length
            ? [alphabets.sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' })).pop()]
            : [];

        res.json({
            is_success: true,
            user_id,
            email,
            roll_number,
            numbers,
            alphabets,
            highest_alphabet
        });

    } catch (error) {
        res.status(500).json({ is_success: false, message: "Internal Server Error" });
    }
};

exports.handleGetRequest = (req, res) => {
    res.status(200).json({ operation_code: 1 });
};
