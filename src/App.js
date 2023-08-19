import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Cart from './Cart';
import MensClothing from './MensClothing';
import Womensclothing from './WomensClothing';
import Electronics from './Electronics';
import Jewelery from './Jewelery';

function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/cart' Component={Cart} />
          <Route path='/mensclothing' Component={MensClothing} />
          <Route path='/womensclothing' Component={Womensclothing} />
          <Route path='/electronics' Component={Electronics} />
          <Route path='/jewelery' Component={Jewelery} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
