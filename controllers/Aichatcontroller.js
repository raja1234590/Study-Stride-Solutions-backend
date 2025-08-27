// controllers/aiController.js
// import axios from 'axios';
// import dotenv from 'dotenv';
const axios = require('axios'); // Use require for consistency with existing code
const dotenv = require('dotenv'); // Use require for consistency with existing code

// ✅ Load environment variables
dotenv.config();

const askAI = async (req, res) => {
  const { message } = req.body; // frontend sends "message"

  const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

  if (!GOOGLE_API_KEY) {
    console.error("❌ GOOGLE_API_KEY is missing from environment");
    return res.status(500).json({ error: "Google API key not found" });
  }

  try {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GOOGLE_API_KEY}`;

    const response = await axios.post(
      url,
      {
        contents: [
          {
            parts: [{ text: message }],
          },
        ],
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    // ✅ Extract AI response
    const candidates = response.data?.candidates;
    const reply = candidates?.[0]?.content?.parts?.[0]?.text?.trim();

    if (!reply) {
      return res.json({ data: "⚠️ Sorry, I couldn't generate a response. Please try again." });
    } 

    res.json({data: reply }); // ✅ backend sends "reply" now
    console.log("AI Reply:", reply);

  } catch (error) {
    console.error("Google AI API error:", error.response?.data || error.message);
    res.status(500).json({ error: "Failed to fetch AI response" });
  }
};



module.exports = { askAI }; // export the controller function