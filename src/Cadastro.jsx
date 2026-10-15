import { useState } from 'react'
import s from './Cadastro.module.css'
import { Link } from 'react-router'

function Cadastro() {
  const [] = useState(0)

  return (
    <>
      <div className={s.quadrado}><h1>TRIBAL LOGISTICS</h1></div>

      <div className={s.quadradoLogin}>
        <div className={s.formGroup}>
          <label className={s.label}>Nome</label>
          <input type="text" placeholder="Seu nome" />
        </div>

        <div className={s.formGroup}>
          <label className={s.label}>E-mail</label>
          <input type="email" placeholder="exemplo@gmail.com" />
        </div>

        <div className={s.formGroup}>
          <label className={s.label}>Senha</label>
          <input type="password" placeholder="12345678" />
        </div>

        <div className={s.formGroup}>
          <label className={s.label}>Confirmar senha</label>
          <input type="password" placeholder="Repita a senha" />
        </div>

        <Link to="/login"><button type="button" className={s.botao}>Cadastrar</button></Link>
        <Link to="/login" className={s.linkLogin}>Já tem uma conta? Entrar</Link>
      </div>
    </>
  )
}

export default Cadastro
