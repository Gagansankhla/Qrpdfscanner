import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Sender from './components/Sender';
import Reciever from './components/Reciever';
import Home from './components/Home';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/send' element={<Sender />} />
          <Route exact path='/receive' element={<Reciever />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
