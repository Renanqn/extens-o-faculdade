import sql from 'mssql';

// Configuração de conexão com o banco de dados SQL Server
const dbConfig: sql.config = {
  user: process.env.DB_USER || 'seu-usuario', // Coloque seu usuário do banco de dados aqui
  password: process.env.DB_PASSWORD || 'sua-senha', // Coloque sua senha do banco de dados aqui
  server: process.env.DB_SERVER || 'localhost', // Coloque o nome ou IP do servidor aqui
  database: process.env.DB_NAME || 'nome-do-banco-de-dados', // Coloque o nome do seu banco de dados aqui
  options: {
    encrypt: true, // Isso é necessário para conexões seguras, desative se não precisar
    trustServerCertificate: true // Para desenvolvimento local, pode ser necessário usar isso
  }
};

// Função para conectar ao banco de dados
export const connectDB = async (): Promise<sql.ConnectionPool | null> => {
  try {
    const pool = await sql.connect(dbConfig);
    console.log('Conectado ao banco de dados SQL Server!');
    return pool;
  } catch (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return null;
  }
};

// Função para executar consultas
export const executeQuery = async (query: string, params?: any[]): Promise<sql.IResult<any> | null> => {
  const pool = await connectDB();
  if (!pool) {
    return null;
  }

  try {
    const request = pool.request();
    if (params) {
      params.forEach((param, index) => {
        request.input(`param${index + 1}`, param);
      });
    }
    const result = await request.query(query);
    return result;
  } catch (err) {
    console.error('Erro ao executar a consulta:', err);
    return null;
  }
};
