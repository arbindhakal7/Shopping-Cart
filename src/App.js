import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from './components/header';
import Home from './components/Home';
import Cart from './components/Cart';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <div className='App'>
        <Routes>
      <Route  exact path='/' component={Home}/>
      <Route  exact path='/cart' component={Cart}/>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
