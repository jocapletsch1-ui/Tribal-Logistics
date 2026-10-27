import s from './Login.module.css'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router'

function AlterarSenha() {
  const [erro, setErro] = useState('')
  const [sucesso, setSucesso] = useState('')
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()

    const dados = new FormData(event.currentTarget)
    const novaSenha = String(dados.get('novaSenha') ?? '').trim()
    const confirmarSenha = String(dados.get('confirmarSenha') ?? '').trim()

    if (!novaSenha || !confirmarSenha) {
      setSucesso('')
      setErro('Preencha os dois campos de senha.')
      return
    }

    if (novaSenha.length < 6) {
      setSucesso('')
      setErro('A nova senha deve ter pelo menos 6 caracteres.')
      return
    }

    if (novaSenha !== confirmarSenha) {
      setSucesso('')
      setErro('As senhas não coincidem.')
      return
    }

    setErro('')
    setSucesso('Senha alterada com sucesso!')

    window.setTimeout(() => {
      navigate('/perfilgestor')
    }, 900)
  }

  return (
    <>
      <div className={s.quadrado}><h1>TRIBAL LOGISTICS</h1></div>
      <div className={s.quadradoTribo}>
        <div className={s.quadradoLogin1}>
          <form onSubmit={handleSubmit}>
            <div className={s.Email}>
              <label id={s.label1} className={s.Placeholders} htmlFor="novaSenha">Nova Senha</label>
              <input
                id="novaSenha"
                name="novaSenha"
                type="password"
                placeholder="Digite sua nova senha"
                autoComplete="new-password"
                required
              />
            </div>

            <div className={s.Senha}>
              <label className={s.Placeholders} htmlFor="confirmarSenha">Confirmar Senha</label>
              <input
                id="confirmarSenha"
                name="confirmarSenha"
                type="password"
                placeholder="Confirme sua nova senha"
                autoComplete="new-password"
                required
              />
            </div>

            {erro && <p className={s.erro} role="alert">{erro}</p>}
            {sucesso && (
              <p style={{ color: '#22c55e', margin: '12px 0', fontWeight: 600 }}>
                {sucesso}
              </p>
            )}
            <button type="submit" className={s.Botao}>Alterar Senha</button>
            <Link to="/home">
              <p className={s.textobotaocadastro}>Voltar</p>
            </Link>
          </form>
        </div>
      </div>
    </>
  )
}

export default AlterarSenha