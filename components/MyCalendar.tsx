import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  // Defina alguns eventos de exemplo
  const events = [
    {
      id: 0,
      title: 'Evento 1',
      start: new Date(2024, 9, 8, 10, 0), // 8 de outubro de 2024 às 10:00
      end: new Date(2024, 9, 8, 12, 0),   // 8 de outubro de 2024 às 12:00
    },
    {
      id: 1,
      title: 'Evento 2',
      start: new Date(2024, 9, 9, 14, 0), // 9 de outubro de 2024 às 14:00
      end: new Date(2024, 9, 9, 15, 30),  // 9 de outubro de 2024 às 15:30
    },
    // Adicione mais eventos conforme necessário
  ];

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: '50px' }}
        messages={{
          allDay: 'Dia inteiro',
          previous: 'Anterior',
          next: 'Próximo',
          today: 'Hoje',
          month: 'Mês',
          week: 'Semana',
          day: 'Dia',
          agenda: 'Agenda',
          date: 'Data',
          time: 'Hora',
          event: 'Evento',
        }}
      />
    </div>
  );
};

export default MyCalendar;

