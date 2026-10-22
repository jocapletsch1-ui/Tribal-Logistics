import s from "./CabecalhoPagina.module.css";
import { Link } from "react-router";

function CabecalhoPagina({ titulo, descricao, acao }) {
  return (
    <header className={`${s.cabecalho} ${acao ? s.comAcao : ""}`}>
      <h1 className={s.marca}>
        Tribal
        <span className={s.marcaLinha2}>Logistics</span>
      </h1>

      <div className={s.identificacaoPagina}>
        <h2 className={s.titulo}>{titulo}</h2>
        {descricao && <p className={s.descricao}>{descricao}</p>}
      </div>

      {acao && (
        <Link to={acao.caminho} className={s.acao}>
          {acao.texto}
        </Link>
      )}
    </header>
  );
}

export default CabecalhoPagina;
