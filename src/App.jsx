import s from './App.module.css'
import { Link } from 'react-router'


function App() {
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
      <div className={s.grupoLogin}>
        <Link to="/login" className={s.botaoLogin} type="button">
          login
          <span className={s.setaLogin} aria-hidden="true">→</span>
        </Link>
        <p className={s.mensagemLogin}>Tribal Logistics · Gestão de estoque e cargas</p>
      </div>
    </>
  )
}

export default App
