const db = require('../db');

// Cria restaurante
function criarRestaurante(nome, telefone, callback) {
    const query = 'INSERT INTO restaurantes (nome, telefone) VALUES (?, ?)';
    db.query(query, [nome, telefone], callback);
}

// Adiciona item ao restaurante
function adicionarItem(restaurante_id, nomeItem, callback) {
    const query = 'INSERT INTO itens (nome, restaurante_id) VALUES (?, ?)';
    db.query(query, [nomeItem, restaurante_id], callback);
}

module.exports = { criarRestaurante, adicionarItem };