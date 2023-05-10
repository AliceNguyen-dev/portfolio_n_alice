// server.js

const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

// Configuration de la base de données MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'contact-portfolio',
});

// Connexion à la base de données MySQL
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connecté à la base de données MySQL');
});

// Middleware pour le corps de la requête
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Route pour gérer la soumission du formulaire de contact
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;

    // Insertion des données dans la base de données
    const sql = `INSERT INTO user (name, email, message) VALUES (?, ?, ?)`;
    db.query(sql, [name, email, message], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Erreur du serveur');
        } else {
            res.send('Message envoyé avec succès !');
        }
    });
});

// Démarrage du serveur
app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
});