import { Router } from 'express';
import { connect } from '../db';

const router = Router();

router.post('/clientes', async (req, res) => {
  const { nome, email, telefone } = req.body;
  
  try {
    const pool = await connect();
    const result = await pool.request()
      .input('nome', nome)
      .input('email', email)
      .input('telefone', telefone)
      .query('INSERT INTO Clientes (Nome, Email, Telefone) VALUES (@nome, @email, @telefone)');
    
    res.status(201).json({ message: 'Cliente criado com sucesso' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao criar cliente' });
  }
});

router.get('/clientes', async (req, res) => {
  try {
    const pool = await connect();
    const result = await pool.request().query('SELECT * FROM Clientes');
    
    res.status(200).json(result.recordset);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao obter clientes' });
  }
});

router.put('/clientes/:id', async (req, res) => {
  const { id } = req.params;
  const { nome, email, telefone } = req.body;

  try {
    const pool = await connect();
    const result = await pool.request()
      .input('id', id)
      .input('nome', nome)
      .input('email', email)
      .input('telefone', telefone)
      .query('UPDATE Clientes SET Nome = @nome, Email = @email, Telefone = @telefone WHERE Id = @id');
    
    res.status(200).json({ message: 'Cliente atualizado com sucesso' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao atualizar cliente' });
  }
});

router.delete('/clientes/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const pool = await connect();
    await pool.request()
      .input('id', id)
      .query('DELETE FROM Clientes WHERE Id = @id');
    
    res.status(200).json({ message: 'Cliente deletado com sucesso' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao deletar cliente' });
  }
});

export default router;