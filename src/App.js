import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from '../src/pages/Home';
import Menu from './pages/Menu';
import Combos from './pages/Combos';
import Historia from './pages/Historia';
import Cupones from './pages/Cupones';
import Ordenes from './pages/Ordenes';
import Account from './pages/Account';
import Welcome from './pages/Welcome';
import Email from './pages/Email';
import Newpassword from './pages/Newpassword';
import Name from './pages/Name';
import Password from './pages/Password';
import Sendrecovery from './pages/Sendrecovery';
import { CartProvider } from './Components/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='/email' element={<Email />} />
          <Route path='/name' element={<Name />} />
          <Route path='/password' element={<Password />} />
          <Route path='/newpassword' element={<Newpassword />} />
          <Route path='/sendrecovery' element={<Sendrecovery />} />
          <Route path='/home' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/combos' element={<Combos />} />
          <Route path='/historia' element={<Historia />} />
          <Route path='/cupones' element={<Cupones />} />
          <Route path='/ordenes' element={<Ordenes />} />
          <Route path='/account' element={<Account />} />  
        </Routes>
      </Router>
    </CartProvider>    
  );
}

export default App;
