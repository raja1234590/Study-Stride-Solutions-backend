const express = require("express");
const router = express.Router();
const protect = require("../middleware/protect");

// ✅ Import all auth functions from one controller
const {
  signup,
  login,
  logout,
  forgotPassword,
  resetPassword,
} = require("../controllers/Authcontroller");

// ✅ Protected route
router.get("/profile", protect, (req, res) => {
  res.json({ message: "This is a protected route", user: req.user });
});

// ✅ Auth routes
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

// ✅ Forgot/Reset password routes
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);

module.exports = router;
