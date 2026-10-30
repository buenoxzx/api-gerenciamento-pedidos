
let pedidos = [];
let proximoId = 1;

// RF01 - Criar pedido
function criar(dados) {
    const { cliente, tipo, valor, prioridade } = dados;

    if (!cliente || typeof cliente !== 'string' || !cliente.trim()) {
        return {
            erro: 'O cliente é obrigatório!'
        };
    }

    if (typeof valor !== 'number' || !Number.isFinite(valor) || valor <= 0) {
        return {
            erro: 'O valor deve ser um número maior que zero!'
        };
    }

    if (!['entrega', 'retirada'].includes(tipo)) {
        return {
            erro: 'O tipo deve ser entrega ou retirada!'
        };
    }

    if (!['normal', 'alta'].includes(prioridade)) {
        return {
            erro: 'A prioridade deve ser normal ou alta!'
        };
    }

    const novoPedido = {
        id: proximoId,
        cliente: cliente.trim(),
        tipo,
        valor,
        prioridade,
        status: 'recebido'
    };

    pedidos.push(novoPedido);
    proximoId++;

    return novoPedido;
}

// RF02 - Listar pedidos
function listar() {
    return pedidos;
}

// RF03 - Consultar pedido por ID
function buscarPorId(id) {
    return pedidos.find(p => p.id === id);
}

// RF04 - Atualizar status
function atualizarStatus(id, novoStatus) {
    const pedido = buscarPorId(id);

    if (!pedido) {
        return {
            erro: 'Pedido não encontrado!'
        };
    }

    const transicoesPermitidas = {
        recebido: ['em_preparacao', 'cancelado'],
        em_preparacao: ['enviado', 'cancelado'],
        enviado: ['entregue'],
        entregue: [],
        cancelado: []
    };

    if (!transicoesPermitidas[pedido.status].includes(novoStatus)) {
        return {
            erro: `Não é permitido mudar de ${pedido.status} para ${novoStatus}!`
        };
    }

    pedido.status = novoStatus;

    return pedido;
}

module.exports = {
    criar,
    listar,
    buscarPorId,
    atualizarStatus
};
