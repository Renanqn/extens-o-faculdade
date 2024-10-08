import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div style={{ display: 'flex', height: '90vh', overflow: 'hidden' }}>
      <Sidebar />
      <div style={{ flex: 1, marginLeft: '65px', display: 'flex', flexDirection: 'column' }}>
        <Header />
        <main style={{ flex: '1 0 calc(100vh - 65px)', padding: '0', marginTop: '0', overflow: 'hidden' }}>
          {/* Ocupará todo o espaço abaixo do Header sem permitir rolagem */}
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;



