const express = require("express");
const router = express.Router();
const notesController = require("../controllers/notesController");
const authenticateToken = require("../middlewares/authMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");

// Proteger as rotas
router.post("/notes", authenticateToken, notesController.createNote); // Adicionar Nota
router.delete("/notes/:id", authMiddleware, notesController.deleteNote); // Remover Nota
router.get("/notes", authenticateToken, notesController.getUserNotes); // Requisição das Notas

module.exports = router;
