// components/Sidebar.js

import Link from 'next/link';
import Image from 'next/image'; // Importa o componente Image do Next.js

const Sidebar = () => {
  return (
    <aside style={sidebarStyle}>
      <nav>
        <ul style={navStyle}>
          <li>
            <Link href="/agendamentos" legacyBehavior>
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
const sidebarStyle = {
  height: '100vh',
  width: '250px',
  backgroundColor: '#e78377',
  color: '#fff',
  padding: '20px',
  position: 'fixed',
  top: '60px',
  left: 0,
};

const navStyle = {
  listStyle: 'none',
  padding: 0,
};

const linkStyle = {
  display: 'flex', // Alterado para flex
  alignItems: 'center', // Alinha os itens ao centro verticalmente
  color: '#fff',
  textDecoration: 'none',
  fontSize: '18px',
  marginBottom: '15px',
};

const iconStyle = {
  marginRight: '10px', // Espaço entre o ícone e o texto
};

export default Sidebar;
