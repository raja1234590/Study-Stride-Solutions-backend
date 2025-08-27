// const express = require("express");
// const router = express.Router();

// // Example: send message
// router.post("/", (req, res) => {
//   const { message } = req.body;
//   res.json({ reply:`You said:${message}` });  // 👈 now matches frontend
// });
// // Example: get all messages (optional)
// router.get("/", (req, res) => {
//   res.json({ success: true, messages: ["Hello", "Hi there!"] });
// });

// module.exports = router;

//console.log("📌 chatRoute.js loaded");

const express = require("express");
const router = express.Router();
const { askAI } = require("../controllers/Aichatcontroller.js"); // import controller

// POST: delegate to controller
router.post("/", askAI);
//});

module.exports = router;
