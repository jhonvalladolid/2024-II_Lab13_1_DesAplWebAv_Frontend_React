import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import ListClientesComponent from './components/ListClienteComponent';
import AddClienteComponent from './components/AddClienteComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderComponent></HeaderComponent>
        <div className='container'>
          <Routes>
            <Route exact path='/' element={<ListClientesComponent></ListClientesComponent>}></Route>
            <Route path='clientes' element={<ListClientesComponent></ListClientesComponent>}></Route>
            <Route path='add-cliente' element={<AddClienteComponent></AddClienteComponent>}></Route>
            <Route path='edit-cliente/:id' element={<AddClienteComponent></AddClienteComponent>}></Route>
          </Routes>
        </div>
        <FooterComponent></FooterComponent>
      </BrowserRouter>
    </div>
  );
}

export default App;
