
const express = require("express");

const app = express();

// Azure or another hosting platform may provide PORT.
// The fallback is useful when running locally.
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Deployment Lab API is running!",
    environment: process.env.NODE_ENV || "development",
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
    timestamp: new Date().toISOString(),
  });
});

app.get("/api/users", (req, res) => {
  res.status(200).json([
    { id: 1, name: "Darshan" },
    { id: 2, name: "Alex" },
  ]);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server listening on port ${PORT}`);
});
