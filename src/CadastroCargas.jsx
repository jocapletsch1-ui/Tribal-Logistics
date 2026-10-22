import s from "./CadastroCargas.module.css";
import Sidebar from "./components/Sidebar";

function CadastroCargas() {
  return (
    <div className={s.conteudo}>
      <Sidebar />
      <div className={s.quadradoLista}>
        <div className={s.titulos}>
          <h2>Nova Carga</h2>
          <p>Dados da carga</p>
        </div>
        <div className={s.wrapTwo}>
          <div>
            <div>
              <label htmlFor=""> Nome da Carga</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor=""> Peso (Toneladas)</label>
              <input type="text" />
            </div>
          </div>
          <div className={s.titulos}>
          <h2>Origem e Destino</h2>
        </div>
        <div>
            <div>
              <label htmlFor=""> Nome da Carga</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor=""> Peso (Toneladas)</label>
              <input type="text" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CadastroCargas;