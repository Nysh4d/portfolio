const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files (like HTML, CSS, JS, images)
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve home1.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'home1.html'));
});

// Route to serve page2.html
app.get('/page2', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'page2.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
