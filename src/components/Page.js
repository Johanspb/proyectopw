import React from 'react'
import { Routes , Route} from "react-router-dom";
import Inicio from './page/inicio/index.js';
import { ProductosList } from './page/productos/index.js';
import { ProductosDetalles } from './page/productos/ProductosDetalles.js';

export const Paginas = () => {
  return (
    <section>
      <Routes>
        <Route path='/' exact Component={Inicio}/>
        <Route path='/productos' exact Component={ProductosList}/>
        <Route path='/producto/:id' exact Component={ProductosDetalles}/>
      </Routes>
    </section>
  )
}