// components/Header.js

import Image from 'next/image'; // Importa o componente Image do Next.js

const Header = () => {
  return (
    <header style={headerStyle}>
      <div style={logoContainerStyle}>
        <Image src="/logo-salao.png" alt="Logo Salão de Beleza" width={100} height={100} />
        <h1 style={titleStyle}>Salão de Beleza</h1>
      </div>
    </header>
  );
};

// Estilos do header
const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 20px',
  backgroundColor: '#fff',
  color: '#fff',
  position: 'fixed',
  top: 10,
  left: 0,
  width: '100%',
  height: '60px',
  zIndex: 1000,
};

// Estilo do container do logo
const logoContainerStyle = {
  display: 'flex',
  alignItems: 'center',
};

// Estilo do título
const titleStyle = {
  marginLeft: '10px', // Espaço entre o logo e o título
  fontSize: '24px',
  color: '#fff',
};

export default Header;
