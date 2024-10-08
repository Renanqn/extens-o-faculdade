// pages/agendamentos.tsx

import { useState } from 'react';
import Layout from '../components/Layout'; // Importa o Layout.tsx
import MyCalendar from '../components/MyCalendar'; // Importa o novo componente de calendário

const Agendamentos = () => {
  const [viewMode] = useState('month'); // Mantenha o modo de visualização padrão como 'month'

  return (
    <Layout> {/* Utiliza o Layout para envolver o conteúdo */}
      <div style={pageStyle}>
        <div style={headerStyle}>
        </div>

        {/* Exibe o calendário */}
        <div>
          {viewMode === 'month' && <MyCalendar />} {/* Renderiza o componente de calendário */}
        </div>
      </div>
    </Layout>
  );
};

// Estilos da página de agendamentos
const pageStyle = {
  padding: '20px',
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column' as const,
};

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '20px',
  width: '100%',
};

export default Agendamentos;