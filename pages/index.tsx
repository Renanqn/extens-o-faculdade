import Header from '../components/header';
import Sidebar from '../components/sidebar';

export default function Home() {
  return (
    <div>
      <Header />
      <div style={containerStyle}>
        <Sidebar />
        <main style={mainContentStyle}>
          <h2>QUE TODOS VOCÊS MORRAM EM ETERNA AGONIA!</h2>
          {/* Conteúdo do painel */}
        </main>
      </div>
    </div>
  );
}

// Estilos para ajustar o layout
const containerStyle = {
  display: 'flex',
};

const mainContentStyle = {
  marginLeft: '250px', // Deixa espaço para a sidebar
  padding: '20px',
  width: '100%',
  marginTop: '60px', // Deixa espaço para o header
  color: '#000',
};
