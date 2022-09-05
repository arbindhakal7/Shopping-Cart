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
        <Route path="/" element={<Home />} /> 
        <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
