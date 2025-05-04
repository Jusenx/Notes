const express = require("express");
const router = express.Router();
const notesController = require("../controllers/notesController");
const authenticateToken = require("../middlewares/authMiddleware");

// Proteger as rotas
router.post("/notes", authenticateToken, notesController.createNote);
router.get("/notes", authenticateToken, notesController.getUserNotes);

module.exports = router;
