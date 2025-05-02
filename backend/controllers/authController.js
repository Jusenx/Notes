const db = require('../db/database');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SECRET = 'secreto'; // em produção tem que ser algo em segredo, tipo em um .env

exports.register = (req, res) => {
    const { email, password } = req.body;
    const hashed = bcrypt.hashSync(password, 10); // serve para criptografar a senha 
    db.run('INSERT INTO users (email, password) VALUES (?, ?)', [email, hashed], function(err){
        if (err) return res.status(400).json({error: 'Email já resgistrado'});
        res.status(201).json({message: 'Usuário criado com sucesso'});
    });
};

exports.login = (req, res) => {
    const { email, password } = req.body;
    db.get('SELECT * FROM users WHERE email = ?', [email], (err, user) =>{
        if (err || !user) return res.status(401).json({error: "Usuário não encontrado"});

        const valid = bcrypt.compareSync(password, user.password);
        if (!valid) return res.status(401).json({error: "Senha incorreta"});

        const token = jwt.sign({ id: user.id}, SECRET, { expiresIn: '1h' });
        res.json({ token });
    });
}