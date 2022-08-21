import './App.css';
import {BrowserRouter, Route} from "react-router-dom"
import Header from './components/header';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <div>
        <Route path='/' exact>
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
