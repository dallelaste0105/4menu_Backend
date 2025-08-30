const { criarRestaurante, adicionarItem } = require('../models/restauranteModel');

// Cadastrar restaurante
function cadastrarRestaurante(req, res) {
    const { nome, telefone } = req.body;

    if (!nome || !telefone) {
        return res.status(400).json({ error: 'Campos obrigatórios' });
    }

    criarRestaurante(nome, telefone, (err, result) => {
        if (err) return res.status(500).json({ error: 'Erro ao salvar no banco' });

        res.status(201).json({
            message: 'Restaurante cadastrado com sucesso',
            restauranteId: result.insertId
        });
    });
}

// Adicionar item a um restaurante
function cadastrarItem(req, res) {
    const { restauranteId, nomeItem } = req.body;

    if (!restauranteId || !nomeItem) {
        return res.status(400).json({ error: 'Campos obrigatórios' });
    }

    adicionarItem(restauranteId, nomeItem, (err, result) => {
        if (err) return res.status(500).json({ error: 'Erro ao adicionar item' });

        res.status(201).json({ message: 'Item adicionado com sucesso' });
    });
}

module.exports = { cadastrarRestaurante, cadastrarItem };