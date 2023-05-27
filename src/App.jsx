import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Fase 5 - Operar</h1>
      <h2>Diseño de sitios web - (301122A_1391)</h2>
      <div className="card">
        <h3>Integrantes</h3>
        <h4>Carlos Arturo Arias Ortiz</h4>
        <h4>Edgar Dario Mejia Delgado</h4>


        <h6>Enlace del proyecto: </h6>
        <a href="public/index.html">Click aqui para ir al proyecto</a>
       

      <hr />
      <br /><br />
      </div>
      <p className="read-the-docs">
      Esta pagina fue desarrollada por Carlos Arias - Edgar Mejia _ Fecha actualización: 26/05/2023
      </p>
    </>
  )
}

export default App
