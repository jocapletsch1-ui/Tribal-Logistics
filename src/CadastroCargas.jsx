import s from "./CadastroCargas.module.css";
import Sidebar from "./components/Sidebar";
import CabecalhoPagina from "./components/CabecalhoPagina";
import iconePacote from '/package-plus.png';

function CadastroCargas() {
  return (
    <div className={s.conteudo}>
      <div className="fundoDashboard" aria-hidden="true" />
      <CabecalhoPagina
        titulo="Cadastro de Cargas"
        descricao="Cadastre os dados da nova carga."
      />
      <Sidebar />
      <div className={s.wrapAll2}>
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
                <label htmlFor="">Peso (toneladas)</label>
                <input type="text" />
              </span>
              <span className={s.titulos}>
                <h2>Origem e Destino</h2>
              </span>
              <span className={s.Span}>
                <label htmlFor="">Destino</label>
                <input type="text" />
              </span>
              <span className={s.Span}>
                <label htmlFor="">Previsão de Coleta</label>
                <input type="text" />
              </span>
            </div>
            <div className={s.wrapTwo2}>
              <span className={s.Span}>
                <label htmlFor="">Categoria</label>
                <input type="text" />
              </span>
              <span className={s.Span}>
                <label htmlFor="">Valor da Carga (R$)</label>
                <input type="text" />
              </span>
              <div className={s.wrapSpan}>
                <span className={s.Span}>
                  <label htmlFor="">Data de Coleta</label>
                  <input type="text" />
                </span>
                <span className={s.Span}>
                  <label htmlFor="">Origem</label>
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
        <div className={s.quadradoAviso}>
          <h1>Antes de cadastrar</h1>
          <img src={iconePacote} alt="Ícone de pacote" className={s.iconePacote} />
          <p className={s.p1}>
            Confira peso, valor e locais de coleta e entrega. Esses dados ajudam a definir o veículo adequado.
          </p>
          <p className={s.p2}>A carga será registrada como pendente até que um motorista aceite.</p>
        </div>
      </div>
    </div>
  );
}

export default CadastroCargas;
