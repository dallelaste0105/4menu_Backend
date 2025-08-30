const express = require('express');
const router = express.Router();
const restauranteController = require('../controllers/restauranteController');

router.post('/criarRestaurante', restauranteController.cadastrarRestaurante);
router.post('/adicionarItem', restauranteController.cadastrarItem);

module.exports = router;