
const express = require('express');
const router = express.Router();

const pedidosController = require('../controllers/pedidosController');

// RF01 - Criar pedido
router.post('/pedidos', pedidosController.criarPedido);

// RF02 - Listar pedidos
router.get('/pedidos', pedidosController.listarPedidos);

// RF03 - Consultar pedido por ID
router.get('/pedidos/:id', pedidosController.consultarPedido);

// RF04 - Atualizar status
router.patch('/pedidos/:id/status', pedidosController.atualizarStatus);

module.exports = router;
