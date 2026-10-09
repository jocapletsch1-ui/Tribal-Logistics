import { useState } from 'react'
import s from './App.module.css'

function App() {
  const [] = useState(0)

  return (
    <>
    
      <div className={s.quadrado}></div>
      <div className={s.quadradoTribo}><h2>tribal <br/> logistics</h2></div>
      <div className={s.quadradoEstoque}></div>
    </>
  )
}

export default App
