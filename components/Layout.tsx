import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1, marginLeft: '65px' }}> {/* Ajuste a largura conforme necessário */}
        <Header />
        <main style={{ padding: '20px', marginTop: '5px' }}> {/* Deixa espaço abaixo do Header */}
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;

