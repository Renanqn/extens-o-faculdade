import sql from 'mssql';

const dbConfig: sql.config = {
  user: process.env.DB_USER || 'seu-usuario', 
  password: process.env.DB_PASSWORD || 'sua-senha', 
  server: process.env.DB_SERVER || 'localhost', 
  database: process.env.DB_NAME || 'nome-do-banco-de-dados', 
  options: {
    encrypt: true, 
    trustServerCertificate: true
  }
};

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
