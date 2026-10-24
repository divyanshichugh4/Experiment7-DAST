const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send(`
        <html>
          <head><title>Experiment 7 - DAST</title></head>
          <body>
            <h1>Experiment 7: DAST Security Testing</h1>
            <p>Welcome to the test application.</p>
          </body>
        </html>
    `);
});

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "OK",
        message: "Application is running"
    });
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});