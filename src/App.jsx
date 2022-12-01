import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import  Login from './Components/Login';
import Paquetes from './Components/Paquetes';
import Register from './Components/Register';
import Navbar from './Components/Navbar';
import Inicio from './Components/Inicio';
import Contactenos from './Components/Contactenos';
import Privacidad from './Components/Privacidad';
import CrearOrden from './Components/CrearOrden';
import ActualizarOrden from './Components/ActualizarOrden';
import Nosotros from './Components/Nosotros';
import Recuperar from './Components/Recuperar';
import Consulta from './Components/Consulta';
import './App.css'
import Delete from './Components/Delete';


function App() {
  

  return (
    
    <BrowserRouter>
      <Navbar />
      <div className='App'>
      <Routes>
        
        <Route path="/" element={<Inicio />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/Paquetes" element={<Paquetes />}></Route>
        <Route path="/Contactenos" element={<Contactenos />}></Route>
        <Route path="/Privacidad" element={<Privacidad />}></Route>
        <Route path="/CrearOrden" element={<CrearOrden />}></Route>
        <Route path="/Nosotros" element={<Nosotros />}></Route>
        <Route path="/Recuperar" element={<Recuperar />}></Route>
        <Route path="/Consulta/:id" element={<Consulta />}></Route>
        <Route path="/Consulta/:id/ActualizarOrden" element={<ActualizarOrden />}></Route>
        <Route path="/Consulta/:id/Delete" element={<Delete />}></Route>
        
        

      </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
