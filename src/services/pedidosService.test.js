
let pedidosService;

beforeEach(() => {
    jest.resetModules();
    pedidosService = require('./pedidosService');
});

describe('Testes do serviço de pedidos', () => {

    // TESTE 1 - Criar pedido válido
    test('Deve criar um pedido válido', () => {
        const dados = {
            cliente: 'Carlos Silva',
            tipo: 'entrega',
            valor: 350,
            prioridade: 'normal'
        };

        const resultado = pedidosService.criar(dados);

        expect(resultado).toHaveProperty('id');
        expect(resultado.cliente).toBe('Carlos Silva');
        expect(resultado.status).toBe('recebido');
    });

    // TESTE 2 - Impedir pedido sem cliente
    test('Não deve criar pedido sem cliente', () => {
        const resultado = pedidosService.criar({
            cliente: '',
            tipo: 'entrega',
            valor: 350,
            prioridade: 'normal'
        });

        expect(resultado).toHaveProperty('erro');
    });

    // TESTE 3 - Impedir valor igual a zero
    test('Não deve criar pedido com valor igual a zero', () => {
        const resultado = pedidosService.criar({
            cliente: 'Carlos Silva',
            tipo: 'entrega',
            valor: 0,
            prioridade: 'normal'
        });

        expect(resultado).toHaveProperty('erro');
    });

    // TESTE 4 - Impedir tipo inválido
    test('Não deve aceitar um tipo de pedido inválido', () => {
        const resultado = pedidosService.criar({
            cliente: 'Carlos Silva',
            tipo: 'invalido',
            valor: 350,
            prioridade: 'normal'
        });

        expect(resultado).toHaveProperty('erro');
    });

    // TESTE 5 - Impedir prioridade inválida
    test('Não deve aceitar uma prioridade inválida', () => {
        const resultado = pedidosService.criar({
            cliente: 'Carlos Silva',
            tipo: 'entrega',
            valor: 350,
            prioridade: 'urgente'
        });

        expect(resultado).toHaveProperty('erro');
    });

    // TESTE 6 - Listar pedidos
    test('Deve listar os pedidos cadastrados', () => {
        pedidosService.criar({
            cliente: 'Carlos Silva',
            tipo: 'entrega',
            valor: 350,
            prioridade: 'normal'
        });

        const resultado = pedidosService.listar();

        expect(resultado).toHaveLength(1);
        expect(resultado[0].cliente).toBe('Carlos Silva');
    });

    // TESTE 7 - Buscar pedido pelo ID
    test('Deve encontrar um pedido pelo ID', () => {
        const pedido = pedidosService.criar({
            cliente: 'Maria Souza',
            tipo: 'retirada',
            valor: 150,
            prioridade: 'alta'
        });

        const resultado = pedidosService.buscarPorId(pedido.id);

        expect(resultado).toBeDefined();
        expect(resultado.cliente).toBe('Maria Souza');
    });

    // TESTE 8 - Atualizar status corretamente
    test('Deve atualizar o status de um pedido', () => {
        const pedido = pedidosService.criar({
            cliente: 'João Silva',
            tipo: 'entrega',
            valor: 200,
            prioridade: 'normal'
        });

        const resultado = pedidosService.atualizarStatus(
            pedido.id,
            'em_preparacao'
        );

        expect(resultado.status).toBe('em_preparacao');
    });

    // TESTE 9 - Impedir mudança de status não permitida
    test('Não deve permitir uma transição de status inválida', () => {
        const pedido = pedidosService.criar({
            cliente: 'Ana Souza',
            tipo: 'retirada',
            valor: 100,
            prioridade: 'alta'
        });

        const resultado = pedidosService.atualizarStatus(
            pedido.id,
            'entregue'
        );

        expect(resultado).toHaveProperty('erro');
    });

    // TESTE 10 - Impedir atualização de pedido inexistente
    test('Não deve atualizar um pedido inexistente', () => {
        const resultado = pedidosService.atualizarStatus(
            999,
            'em_preparacao'
        );

        expect(resultado).toHaveProperty('erro');
    });

});
