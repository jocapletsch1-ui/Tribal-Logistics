import { useState } from 'react'
import s from './Login.module.css'
import { Link } from 'react-router'


function Login() {
  const [] = useState(0)

  return (
    <>
    
      <div className={s.quadrado}><h1>TRIBAL LOGISTICS</h1></div>
        <div className={s.quadradoTribo}>
          <div className={s.quadradoLogin}>
            <div className={s.Email}> 
              <p className={s.Placeholders}>E-mail</p>
              <input type="text"  placeholder="exemplo@gmail.com" />
            </div>
            <div className={s.Senha}>
              <p className={s.Placeholders}>Senha</p>
              <input type="password" className={s.Senha} placeholder="12345678" />
            </div>
            <p className={s.esqueceuocu}>Esqueceu sua senha?</p>
            <Link to="/login"><button className={s.Botao}>Login</button></Link>
            <Link to="/cadastro">
              <p className={s.textobotaocadastro}>Não tem uma conta? <br />Cadastre-se</p>
            </Link>
          </div>
        </div>

        
    </>
  )
}

export default Login