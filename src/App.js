import logo from '../assets/img/logo.png'; // If App.js is in `src/components/`
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

export default App;
