import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Login from './Pages/Login';
import Booking from './Pages/Booking';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route exact path="/Booking" element={<Booking/>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
