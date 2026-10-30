
const pedidosService = require('../services/pedidosService');

// RF01 - Criar pedido
function criarPedido(req, res) {
    const resultado = pedidosService.criar(req.body);

    if (resultado.erro) {
        return res.status(400).json(resultado);
    }

    return res.status(201).json(resultado);
}

// RF02 - Listar pedidos
function listarPedidos(req, res) {
    const pedidos = pedidosService.listar();

    return res.status(200).json(pedidos);
}

// RF03 - Consultar pedido por ID
function consultarPedido(req, res) {
    const id = Number(req.params.id);

    const pedido = pedidosService.buscarPorId(id);

    if (!pedido) {
        return res.status(404).json({
            erro: 'Pedido não encontrado!'
        });
    }

    return res.status(200).json(pedido);
}

// RF04 - Atualizar status
function atualizarStatus(req, res) {
    const id = Number(req.params.id);
    const novoStatus = req.body.status;

    const resultado = pedidosService.atualizarStatus(id, novoStatus);

    if (resultado.erro) {
        const codigo = resultado.erro === 'Pedido não encontrado!' ? 404 : 400;

        return res.status(codigo).json(resultado);
    }

    return res.status(200).json(resultado);
}

module.exports = {
    criarPedido,
    listarPedidos,
    consultarPedido,
    atualizarStatus
};
