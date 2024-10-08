import { useState } from 'react';
import Image from 'next/image';

const Header: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header style={headerStyle}>
      <div style={userMenuStyle}>
        <div style={iconContainerStyle} onClick={toggleDropdown}>
          <Image src="/sukuna.png" alt="Login" width={60} height={60} />
        </div>
        {dropdownOpen && (
          <div style={dropdownStyle}>
            <ul style={dropdownMenuStyle}>
              <li style={dropdownItemStyle}>Configurações</li>
              <li style={dropdownItemStyle}>Logout</li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

const headerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 20px',
  backgroundColor: '#fff',
  color: '#333',
  position: 'fixed',
  top: 0,
  left: '160px',
  width: 'calc(100% - 170px)',
  height: '70px',
  zIndex: 999,
  boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
};

const userMenuStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  position: 'absolute',
  right: '60px',
  cursor: 'pointer',
};

const iconContainerStyle: React.CSSProperties = {
  width: '60px',
  height: '60px',
  borderRadius: '50%', 
  overflow: 'hidden',   
  backgroundColor: '#f0f0f0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const dropdownStyle: React.CSSProperties = {
  position: 'absolute',
  top: '100%',
  right: 0,
  backgroundColor: '#fff',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  borderRadius: '5px',
  zIndex: 1000,
  width: '150px',
  marginTop: '10px',
};

const dropdownMenuStyle: React.CSSProperties = {
  listStyle: 'none',
  padding: '10px 0',
  margin: 0,
};

const dropdownItemStyle: React.CSSProperties = {
  padding: '10px 20px',
  cursor: 'pointer',
  color: '#333',
  borderBottom: '1px solid #f0f0f0',
  backgroundColor: '#fff',
  textAlign: 'right',
};

export default Header;