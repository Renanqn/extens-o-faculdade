import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const Sidebar: React.FC = () => {
  const router = useRouter();
  const [selectedItem, setSelectedItem] = useState<string | null>(null); 

  const handleLinkClick = (item: string) => {
    setSelectedItem(item);
  };

  return (
    <aside style={sidebarStyle}>
      <div style={logoContainerStyle}>
        <h1 style={titleStyle}>Painel de controle</h1>
      </div>
      <nav>
        <ul style={navStyle}>
          {['agendamento', 'clientes', 'colaboradores', 'servicos', 'horarios'].map((item) => (
            <li key={item}>
              <Link href={`/${item}`} legacyBehavior>
                <a
                  style={selectedItem === item ? activeLinkStyle : linkStyle}
                  onClick={() => handleLinkClick(item)}
                >
                  <div style={linkContentStyle}>
                    <Image
                      src={`/icon-${item}.png`}
                      alt={item.charAt(0).toUpperCase() + item.slice(1)}
                      width={20}
                      height={20}
                      style={iconStyle}
                    />
                    {item.charAt(0).toUpperCase() + item.slice(1)} {/* Capitaliza o nome do item */}
                  </div>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

const sidebarStyle: React.CSSProperties = {
  height: '100vh',
  width: '180px',
  backgroundColor: '#e78377',
  color: '#fff',
  padding: '0',
  margin: '0',
  border: 'none',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 1000,
  fontSize: '18px',
  overflow: 'hidden',
};

const logoContainerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: '20px',
};

const titleStyle: React.CSSProperties = {
  marginTop: '10px',
  fontSize: '20px',
  color: '#fff',
};

const navStyle: React.CSSProperties = {
  listStyle: 'none',
  padding: 0,
};

const linkStyle: React.CSSProperties = {
  display: 'block',
  color: '#fff',
  textDecoration: 'none',
  fontSize: '18px',
  marginBottom: '15px',
  width: '100%',
  padding: '15px 10px',
  borderRadius: '0px',
  transition: 'background-color 0.3s',
};

const activeLinkStyle: React.CSSProperties = {
  ...linkStyle,
  backgroundColor: '#d25c5c',
};

const linkContentStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
};

const iconStyle: React.CSSProperties = {
  marginRight: '10px',
  width: '20px',
  height: '20px',
};

export default Sidebar;
