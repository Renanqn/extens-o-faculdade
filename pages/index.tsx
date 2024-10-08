import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

export default function Home() {
  return (
    <div style={layoutStyle}>
      <Sidebar />
      <div style={contentContainerStyle}>
        <Header />
        <main style={mainContentStyle}>
        </main>
      </div>
    </div>
  );
}

// Estilos para ajustar o layout
const layoutStyle = {
  display: 'flex',
  height: '100vh', // Garante que a altura ocupe toda a tela
};

const contentContainerStyle = {
  flex: 1,
  marginLeft: '250px', // Deixa espaço para a sidebar
};

const mainContentStyle = {
  padding: '20px',
  marginTop: '60px', // Deixa espaço para o header
  color: '#000',
};