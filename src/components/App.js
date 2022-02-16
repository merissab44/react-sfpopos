import './App.css';
import Title from './Title';
import { Outlet } from 'react-router';

function App() {
  return (
    <div className="App">
      <Title />
      <Outlet />
    </div>
  );
}

export default App;
