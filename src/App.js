import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import ListClientesComponent from './components/ListClienteComponent';
import AddClienteComponent from './components/AddClienteComponent';
import FooterComponent from './components/FooterComponent';
import ListProductoComponents from './components/ListProductoComponents';
import AddProductoComponent from './components/AddProductoComponent';
import HomeComponent from './components/HomeComponent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderComponent></HeaderComponent>
        <div className='container'>
          <Routes>
            <Route exact path='/' element={<HomeComponent></HomeComponent>}></Route>
            <Route path='clientes' element={<ListClientesComponent></ListClientesComponent>}></Route>
            <Route path='add-cliente' element={<AddClienteComponent></AddClienteComponent>}></Route>
            <Route path='edit-cliente/:id' element={<AddClienteComponent></AddClienteComponent>}></Route>
            <Route path='productos' element={<ListProductoComponents></ListProductoComponents>}></Route>
            <Route path='add-producto' element={<AddProductoComponent></AddProductoComponent>}></Route>
            <Route path='edit-producto/:id' element={<AddProductoComponent></AddProductoComponent>}></Route>
          </Routes>
        </div>
        <FooterComponent></FooterComponent>
      </BrowserRouter>
    </div>
  );
}

export default App;
