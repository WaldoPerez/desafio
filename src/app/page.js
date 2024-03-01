"use client";
import React, { useState } from 'react';
import { Modal } from 'bootstrap';
import { FormGroup, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

function App() {
  const [movimientos, setMovimientos] = useState([]);
  const [tipoMovimiento, setTipoMovimiento] = useState('gasto');
  const [categoria, setCategoria] = useState('');
  const [monto, setMonto] = useState('');
  const [fecha, setFecha] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleRegistro = () => {
    const nuevoMovimiento = {
      id: Date.now(), 
      tipo: tipoMovimiento,
      categoria: categoria,
      monto: monto,
      fecha: fecha,
      descripcion: descripcion
    };
    setMovimientos([...movimientos, nuevoMovimiento]);
    limpiarCampos();
  };

  const limpiarCampos = () => {
    setCategoria('');
    setMonto('');
    setFecha('');
    setDescripcion('');
  };

  const eliminarMovimiento = (id) => {
    const nuevosMovimientos = movimientos.filter((movimiento) => movimiento.id !== id);
    setMovimientos(nuevosMovimientos);
  };

  return (
    <div className="form-container">
     <div className='forma'>
      <h1>Registro de Proyectos</h1>
      <div className="input-container">
        <label className="label">
          Tipo de Proyectos:
          <select value={tipoMovimiento} onChange={(e) => setTipoMovimiento(e.target.value)}>
            <option value="No-Ambientales">No ambientales</option>
            <option value="Ambientales">Ambientales</option>
          </select>
        </label>
        <label className="label">
          Categoria:
          <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
            {tipoMovimiento === 'No-Ambientales' ? (
              <optgroup label="No-Ambientales">
                <option value="Alimentación">Alimentación</option>
                <option value="Vivienda">Vivienda</option>
                <option value="Desarrollo de software">Desarrollo de software</option>
                <option value="Campaña Marketing">Campaña Marketing</option>
              </optgroup>
            ) : (
              <optgroup label="Ambientales">
                <option value="Alimentación">Alimentación</option>
                <option value="Vivienda">Vivienda</option>
                <option value="Desarrollo de software">Desarrollo de software</option>
                <option value="Campaña Marketing">Campaña Marketing</option>
              </optgroup>
            )}
          </select>
        </label>
        <label className="label">
          Monto:
          <input type="number" value={monto} onChange={(e) => setMonto(e.target.value)} />
        </label>
        <label className="label">
          Fecha:
          <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />
        </label>
        <label className="label">
          Descripción:
          <input type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
        </label>
        <button className="btn btn-primary boton" onClick={handleRegistro}>Registrar</button>
      </div>
    </div>

    <h2>Movimientos</h2>
    <div className="proyectos-container">
      <div className="proyectos-No-Ambientales">
        <h3>No Ambientales</h3>
        <ul>
          {movimientos.map((movimiento) => {
            if (movimiento.tipo === 'No-Ambientales') {
              return (
                <li key={movimiento.id}>
                  {movimiento.categoria} - ${movimiento.monto} - {movimiento.fecha} - {movimiento.descripcion}
                  <button className="btn btn-danger" onClick={() => eliminarMovimiento(movimiento.id)}>Eliminar</button>
                </li>
              );
            }
            return null;
          })}
        </ul>
      </div>
      <div className="proyectos-Ambientales">
        <h3>Ambientales</h3>
        <ul>
          {movimientos.map((movimiento) => {
            if (movimiento.tipo === 'Ambientales') {
              return (
                <li key={movimiento.id}>
                  {movimiento.categoria} - ${movimiento.monto} - {movimiento.fecha} - {movimiento.descripcion}
                  <button className="btn btn-danger" onClick={() => eliminarMovimiento(movimiento.id)}>Eliminar</button>
                </li>
              );
            }
            return null;
          })}
        </ul>
      </div>
    </div>
  </div>
  );
}
export default App;

