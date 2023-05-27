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
        <h3>Integrantes:</h3>
        <h4>Carlos Arturo Arias Ortiz</h4>
        <h4>Edgar Dario Mejia Delgado</h4>
        <br />
        <h4>Tutor: Mario Luis Avila Perez</h4>
        <h6>Enlace del proyecto: </h6>
        <a href="inicio.html">Click aqui para ir al proyecto</a>
       

      <hr />
      <br />
      </div>
      <p className="read-the-docs">
      
      <footer>
      Esta pagina fue desarrollada por estudiantes de la UNAD de la Carrera Ing en sistemas -
                Fecha de Actualizacion: Santiago de Cali, Sabado 27 de Mayo de 2023
                Derechos reservados para el autor del sitio protegido contra Copyright.
                </footer>         
      </p>
    </>
  )
}

export default App
