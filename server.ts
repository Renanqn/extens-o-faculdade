import express from 'express';
import clienteRoutes from './routes/clienteRoutes';

const app = express();

app.use(express.json());

app.use('/api', clienteRoutes);

app.get('/', (req, res) => {
  res.send('Servidor está rodando!');
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});