// components/Sidebar.tsx

import Link from 'next/link';
import Image from 'next/image';

const Sidebar: React.FC = () => {
  return (
    <aside style={sidebarStyle}>
      <div style={logoContainerStyle}>
        <h1 style={titleStyle}>Painel de controle</h1>
      </div>
      <nav>
        <ul style={navStyle}>
          <li>
            <Link href="/agendamento" legacyBehavior>
              <a style={linkStyle}>
                <Image src="/icon-agendamento.png" alt="Agendamentos" width={20} height={20} style={iconStyle} />
                Agendamentos
              </a>
            </Link>
          </li>
          <li>
            <Link href="/clientes" legacyBehavior>
              <a style={linkStyle}>
                <Image src="/icon-cliente.png" alt="Clientes" width={20} height={20} style={iconStyle} />
                Clientes
              </a>
            </Link>
          </li>
          <li>
            <Link href="/colaboradores" legacyBehavior>
              <a style={linkStyle}>
                <Image src="/icon-colaborador.png" alt="Colaboradores" width={20} height={20} style={iconStyle} />
                Colaboradores
              </a>
            </Link>
          </li>
          <li>
            <Link href="/servicos" legacyBehavior>
              <a style={linkStyle}>
                <Image src="/icon-servicos.png" alt="Serviços" width={20} height={20} style={iconStyle} />
                Serviços
              </a>
            </Link>
          </li>
          <li>
            <Link href="/horarios" legacyBehavior>
              <a style={linkStyle}>
                <Image src="/icon-horario.png" alt="Horários" width={20} height={20} style={iconStyle} />
                Horários
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

// Estilos
const sidebarStyle: React.CSSProperties = {
  height: '100vh',
  width: '140px',
  backgroundColor: '#e78377',
  color: '#fff',
  padding: '20px',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 1000,
  fontSize: 32,
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
  display: 'flex',
  alignItems: 'center',
  color: '#fff',
  textDecoration: 'none',
  fontSize: '18px',
  marginBottom: '15px',
};

const iconStyle: React.CSSProperties = {
  marginRight: '10px',
};

export default Sidebar;