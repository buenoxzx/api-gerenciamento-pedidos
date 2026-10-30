
const express = require('express');
const pedidosRoutes = require('./routes/pedidos');

const app = express();

app.use(express.json());

app.use(pedidosRoutes);

app.get('/', (req, res) => {
    res.send('API de Gerenciamento de Pedidos funcionando!');
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
