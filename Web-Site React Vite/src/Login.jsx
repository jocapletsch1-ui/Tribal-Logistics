import s from './Login.module.css'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router'


function Login() {
  const [erro, setErro] = useState('')
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()

    const dados = new FormData(event.currentTarget)
    const login = dados.get('login')
    const senha = dados.get('senha')

    if (login === 'admin' && senha === 'admin') {
      navigate('/home')
      return
    }

    setErro('Login ou senha inválidos.')
  }

  return (
    <>
    
      <div className={s.quadrado}><h1>TRIBAL LOGISTICS</h1></div>
        <div className={s.quadradoTribo}>
          <div className={s.quadradoLogin}>
            <form onSubmit={handleSubmit}>
              <div className={s.Email}>
                <label id={s.label1} className={s.Placeholders} htmlFor="login">Login</label>
                <input
                  id="login"
                  name="login"
                  type="text"
                  placeholder="Digite seu login"
                  autoComplete="username"
                  required
                />
              </div>
              <div className={s.Senha}>
                <label className={s.Placeholders} htmlFor="senha">Senha</label>
                <input
                  id="senha"
                  name="senha"
                  type="password"
                  placeholder="Digite sua senha"
                  autoComplete="current-password"
                  required
                />
              </div>
              <p className={s.esqueceuasenha}>Acesso de demonstração: admin / admin</p>
              {erro && <p className={s.erro} role="alert">{erro}</p>}
              <button type="submit" className={s.Botao}>Login</button>
            </form>
            <Link to="/cadastro">
              <p className={s.textobotaocadastro}>Não tem uma conta? <br />Cadastre-se</p>
            </Link>
          </div>
        </div>

        
    </>
  )
}

export default Login