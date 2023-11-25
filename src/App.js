import React from 'react'
import { Header } from "./components/Header";
import { Carrito } from "./components/Carrito";
import {DataProvider} from './context/DataProvider';
import { BrowserRouter as Routes } from 'react-router-dom';
import { Paginas } from './components/Page.js';
import { ProductosList } from './components/page/productos/index.js';
import Inicio from './components/page/inicio/index.js';
import "boxicons";

function App() {

  return (
    <DataProvider>
    <div className="App">
      <Routes>
      <Header />
      <Carrito />
      <Paginas/>
      </Routes>
    </div>
    </DataProvider>
  );
}

export default App;
