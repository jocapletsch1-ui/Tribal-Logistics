import { useState } from 'react'
import s from './App.module.css'

function App() {
  const [] = useState(0)

  return (
    <>
    
      <div className={s.quadrado}><h1>TRIBAL LOGISTICS</h1></div>
      <div className={s.quadradoTribo}>
        <h2>Tribal <br/> ㅤ ㅤLogistics</h2>
        <p>Concebindo pra revolucionar o <br /> mercado logístico</p>
      </div>
      <div className={s.quadradoEstoque}>
        <h2>Problemas na <br />logística?</h2>
        <p>A Tribal Logistics estará aqui para resolver <br /> seu problema</p>
      </div>
      <button className={s.botaoLogin}>login</button>
    </>
  )
}

export default App
