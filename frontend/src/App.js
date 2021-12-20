import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Sender from './components/Sender';
import Reciever from './components/Reciever';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div className="App">
          <button >Send</button>
          <button>Recieve</button>

          <Route exact path="/send">
            <Sender />
          </Route>
          <Route exact path="/receive">
            <Reciever />
          </Route>
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
