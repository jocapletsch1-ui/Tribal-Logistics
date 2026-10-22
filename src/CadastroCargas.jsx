import s from "./CadastroCargas.module.css";
import Sidebar from "./components/Sidebar";
import CabecalhoPagina from "./components/CabecalhoPagina";

function CadastroCargas() {
  return (
    <div className={s.conteudo}>
      <CabecalhoPagina
        titulo="Cadastro de Cargas"
        descricao="Cadastre os dados da nova carga."
      />
      <Sidebar />
      <div className={s.quadradoLista}>
        <div className={s.titulos}>
          <h2>Nova Carga</h2>
          <p>Dados da carga</p>
        </div>
        <div className={s.wrapAll}>
          <div className={s.wrapTwo1}>
            <span className={s.Span}>
              <label htmlFor="">Nome da Carga</label>
              <input type="text" />
            </span>
            <span className={s.Span}>
              <label htmlFor="">Nome da Carga</label>
              <input type="text" />
            </span>
            <span className={s.titulos}>
              <h2>Origem e Destino</h2>
            </span>
            <span className={s.Span}>
              <label htmlFor="">Nome da Carga</label>
              <input type="text" />
            </span>
            <span className={s.Span}>
              <label htmlFor="">Nome da Carga</label>
              <input type="text" />
            </span>
          </div>
          <div className={s.wrapTwo2}>
            <span className={s.Span}>
              <label htmlFor="">Nome da Carga</label>
              <input type="text" />
            </span>
            <span className={s.Span}>
              <label htmlFor="">Nome da Carga</label>
              <input type="text" />
            </span>
            <div className={s.wrapSpan}>
              <span className={s.Span}>
                <label htmlFor="">Nome da Carga</label>
                <input type="text" />
              </span>
              <span className={s.Span}>
                <label htmlFor="">Nome da Carga</label>
                <input type="text" />
              </span>
            </div>
          </div>
        </div>

        <div className={s.obs}>
          <label htmlFor="">Observações</label>
          <input type="text" />
        </div>
        <div className={s.botao}>
          <button className={s.botao1}>Cancelar</button>
          <button className={s.botao2}>Cadastrar</button>
        </div>

      </div>
    </div>
  );
}

export default CadastroCargas;
