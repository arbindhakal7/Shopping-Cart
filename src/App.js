import './App.css';
import {BrowserRouter, Route} from "react-router-dom"
import Header from './components/header';
import Cart from './components/Cart';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <div>
        <Route path='/' exact>
          <Home/>
        </Route>
        <Route path='/cart' exact>
          <Cart/>
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
