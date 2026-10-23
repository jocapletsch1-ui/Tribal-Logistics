import { useState } from "react";
import styles from "./FiltroCargas.module.css";

export default function FiltroCargas({ onFiltrar }) {
  const [nome, setNome] = useState("");
  const [categoria, setCategoria] = useState("");
  const [status, setStatus] = useState("");
  const [dataColeta, setDataColeta] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    onFiltrar({
      nome: nome.trim(),
      categoria,
      status,
      dataColeta,
    });
  }

  function limparFiltros() {
    setNome("");
    setCategoria("");
    setStatus("");
    setDataColeta("");

    onFiltrar({
      nome: "",
      categoria: "",
      status: "",
      dataColeta: "",
    });
  }

  return (
    <>
      <form className={styles.filtros} onSubmit={handleSubmit}>
        <div className={styles.campo}>
          <label htmlFor="nomeCarga">Buscar por nome</label>
          <input
            id="nomeCarga"
            type="text"
            placeholder="Digite o nome da carga"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        <div className={styles.campo}>
          <label htmlFor="categoriaCarga">Categoria</label>
          <select
            id="categoriaCarga"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="">Todas as categorias</option>
            <option value="Grãos">Grãos</option>
            <option value="Insumos">Insumos</option>
            <option value="Madeira">Madeira</option>
            <option value="Alimentos">Alimentos</option>
            <option value="Construção">Construção</option>
            <option value="Líquidos">Líquidos</option>
            <option value="Fibras">Fibras</option>
            <option value="Minérios">Minérios</option>
          </select>
        </div>

        <div className={styles.campo}>
          <label htmlFor="statusCarga">Status</label>
          <select
            id="statusCarga"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">Todos os status</option>
            <option value="Pendente">Pendente</option>
            <option value="Em andamento">Em andamento</option>
            <option value="Concluída">Concluída</option>
          </select>
        </div>

        <div className={styles.campo}>
          <label htmlFor="dataCarga">Data de coleta</label>
          <input
            id="dataCarga"
            type="date"
            value={dataColeta}
            onChange={(e) => setDataColeta(e.target.value)}
          />
        </div>

        <button className={styles.filtrar} type="submit">
          Filtrar
        </button>

        <button className={styles.limpar} type="button" onClick={limparFiltros}>
          Limpar
        </button>
      </form>
    </>
  );
}
