const express = require("express");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

// Create Express app
const app = express();

// Enable JSON parsing for request body
app.use(express.json());

// API endpoint to get Supabase key and URL
app.get("/api/supabase-config", (req, res) => {
  const supabaseKey = process.env.SUPABASE_KEY;
  const supabaseUrl = process.env.SUPABASE_URL;

  res.json({
    key: supabaseKey,
    url: supabaseUrl,
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
