import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>Welcome to My App</h1>
      <div style={{ display: 'flex', gap: '2rem' }}>
        <Login />
        <Register />
      </div>
    </div>
  );
}

export default App;