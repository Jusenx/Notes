const express = require('express');
const app = express();
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');
const notesRoutes = require('./routes/notesRoutes');
require('./db/database'); // cria as tabelas

app.use(cors());
app.use(express.json());

// Rotas
app.use('/auth', authRoutes);  // /auth/register, /auth/login
app.use('/', notesRoutes);     // /notes (GET e POST)

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
