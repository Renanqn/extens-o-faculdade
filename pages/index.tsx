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

const layoutStyle = {
  display: 'flex',
  height: '100vh', 
};

const contentContainerStyle = {
  flex: 1,
  marginLeft: '250px',
};

const mainContentStyle = {
  padding: '20px',
  marginTop: '60px',
  color: '#000',
};