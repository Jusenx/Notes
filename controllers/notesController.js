const db = require('../db/database');

//Criar uma nota

exports.createNote = (req, res) => {
    const { title, content } = req.body;
    const user_id = req.user.id; // Pega o id do usuário que está logado, que foi adicionado no middleware de autenticação

    if (!title) {
        return res.status(400).json({ error: 'Título é obrigatório'});
    }

    const query = `
        INSERT INTO notes (user_id, title, content) VALUES (?, ?, ?)
        `;

        db.run(query, [user_id, title, content], function(err) {
            if (err) return res.status(500).json({ error: 'Erro ao criar nota' });

            res.status(201).json({ message: 'Nota criada com sucesso', note_id: this.lastID});
        });
};  

// Listar todas as notas do usuário logado
exports.getUserNotes = (req, res) => {
    const user_id = req.user.id;

    const query = `
        SELECT * FROM notes WHERE user_id = ?
    `;

    db.all(query, [user_id], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });

        res.json(rows);
    });
};