import s from './Cadastro.module.css'
import { Link } from 'react-router'

function Cadastro() {
  return (
    <>
      <div className={s.quadrado}><h1>TRIBAL LOGISTICS</h1></div>

      <div className={s.quadradoLogin}>
      
        <div className={s.formGroup}>
          <label className={s.label}>E-mail</label>
          <input className={s.inputCadastro} type="email" placeholder="exemplo@gmail.com" />
        </div>

        <div className={s.formGroup}>
          <label className={s.label}>Senha</label>
          <input className={s.inputCadastro} type="password" placeholder="12345678" />
        </div>

        <div className={s.formGroup}>
          <label className={s.label}>Confirmar senha</label>
          <input className={s.inputCadastro} type="password" placeholder="Repita a senha" />
        </div>

        <Link to="/home"><button type="button" className={s.botao}>Cadastrar</button></Link>
        <Link to="/login" className={s.linkLogin}>Já tem uma conta? Entrar</Link>
      </div>
    </>
  )
}

export default Cadastro
