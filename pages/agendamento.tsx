import { useState } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout'; // Importa o Layout.tsx

const Agendamentos = () => {
  const [viewMode, setViewMode] = useState('day'); // Controla o filtro (dia, semana, mês)
  const [currentDate, setCurrentDate] = useState(new Date());

  // Função para formatar a data em um formato legível
  const formatDate = (date: Date) => {
    return date.toDateString();
  };

  // Avança para o próximo dia, semana ou mês
  const goForward = () => {
    const newDate = new Date(currentDate); // Certifica-se de criar uma nova instância
    if (viewMode === 'day') {
      newDate.setDate(currentDate.getDate() + 1);
    } else if (viewMode === 'week') {
      newDate.setDate(currentDate.getDate() + 7);
    } else if (viewMode === 'month') {
      newDate.setMonth(currentDate.getMonth() + 1);
    }
    setCurrentDate(newDate); // Atualiza o estado com a nova data
  };

  // Volta para o dia anterior, semana ou mês
  const goBack = () => {
    const newDate = new Date(currentDate); // Certifica-se de criar uma nova instância
    if (viewMode === 'day') {
      newDate.setDate(currentDate.getDate() - 1);
    } else if (viewMode === 'week') {
      newDate.setDate(currentDate.getDate() - 7);
    } else if (viewMode === 'month') {
      newDate.setMonth(currentDate.getMonth() - 1);
    }
    setCurrentDate(newDate); // Atualiza o estado com a nova data
  };

  // Retorna ao dia atual
  const goToToday = () => {
    setCurrentDate(new Date()); // Atualiza diretamente para a data atual
  };

  // Gera o calendário para o mês atual
  const generateCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();

    const calendar: (number | null)[][] = [];
    let week: (number | null)[] = [];
    
    // Preenche os dias antes do primeiro dia do mês
    for (let i = 0; i < firstDayOfMonth; i++) {
      week.push(null);
    }
    
    // Adiciona os dias do mês
    for (let day = 1; day <= daysInMonth; day++) {
      week.push(day);
      if (week.length === 7) {
        calendar.push(week);
        week = [];
      }
    }
    
    // Preenche os dias após o último dia do mês
    while (week.length < 7) {
      week.push(null);
    }
    
    if (week.length) {
      calendar.push(week);
    }
    
    return calendar;
  };

  return (
    <Layout> {/* Utiliza o Layout para envolver o conteúdo */}
      <div style={pageStyle}>
        <div style={headerStyle}>
          <div style={navigationStyle}>
            <button onClick={goBack} style={navButtonStyle}>Voltar</button>
            <button onClick={goToToday} style={navButtonStyle}>Hoje</button>
            <button onClick={goForward} style={navButtonStyle}>Avançar</button>
          </div>
          <div style={filterStyle}>
            <button onClick={() => setViewMode('day')} style={viewMode === 'day' ? activeButtonStyle : buttonStyle}>
              Dia
            </button>
            <button onClick={() => setViewMode('week')} style={viewMode === 'week' ? activeButtonStyle : buttonStyle}>
              Semana
            </button>
            <button onClick={() => setViewMode('month')} style={viewMode === 'month' ? activeButtonStyle : buttonStyle}>
              Mês
            </button>
          </div>
        </div>

        {/* Exibe a data atual */}
        <div style={dateDisplayStyle}>
          {viewMode === 'day' && <h3>Data: {formatDate(currentDate)}</h3>}
          {viewMode === 'week' && <h3>Semana de: {formatDate(currentDate)}</h3>}
          {viewMode === 'month' && <h3>Mês: {currentDate.toLocaleString('default', { month: 'long' })}</h3>}
        </div>

        {/* Exibe o calendário */}
        {viewMode === 'month' && (
          <div style={calendarStyle}>
            {generateCalendar().map((week, index) => (
              <div key={index} style={weekStyle}>
                {week.map((day, dayIndex) => (
                  <div key={dayIndex} style={dayStyle}>
                    {day !== null ? day : ' '}
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}

        {/* Links para navegação interna */}
        <div style={navLinkStyle}>
          <Link href="/clientes">Clientes</Link>
          <Link href="/colaboradores">Colaboradores</Link>
          <Link href="/servicos">Serviços</Link>
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

const filterStyle = {
  display: 'flex',
  gap: '10px',
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#f0f0f0',
  border: '1px solid #ccc',
  cursor: 'pointer',
};

const activeButtonStyle = {
  ...buttonStyle,
  backgroundColor: '#e78377',
  color: '#fff',
};

const navigationStyle = {
  display: 'flex',
  gap: '10px',
};

const navButtonStyle = {
  padding: '10px 20px',
  backgroundColor: '#fff',
  border: '1px solid #ccc',
  cursor: 'pointer',
};

const dateDisplayStyle = {
  marginBottom: '20px',
  textAlign: 'center' as const,
};

const calendarStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  gap: '5px',
  flexGrow: 1,
};

const weekStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  gap: '5px',
};

const dayStyle = {
  height: '80px', // Altura ajustada para ocupar mais espaço
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid #ccc',
};

const navLinkStyle = {
  marginTop: '20px',
  display: 'flex',
  gap: '20px',
};

export default Agendamentos;