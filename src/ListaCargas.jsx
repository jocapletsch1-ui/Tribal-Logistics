import { useState } from "react";
import CabecalhoPagina from "./components/CabecalhoPagina";
import Sidebar from "./components/Sidebar";
import FiltroCargas from "./components/FiltroCargas";
import { cargas } from "./components/cargas";
import s from "./ListaCargas.module.css";

function ListaCargas() {
  const [filtros, setFiltros] = useState({
    nome: "",
    categoria: "",
    status: "",
    dataColeta: "",
  });

  const cargasFiltradas = cargas.filter((carga) => {
    return (
      carga.nome.toLowerCase().includes(filtros.nome.toLowerCase()) &&
      (!filtros.categoria || carga.categoria === filtros.categoria) &&
      (!filtros.status || carga.status === filtros.status) &&
      (!filtros.dataColeta || carga.dataColeta === filtros.dataColeta)
    );
  });

  function formatarData(data) {
    return data.split("-").reverse().join("/");
  }

  function classeStatus(status) {
    if (status === "Pendente") return s.pendente;
    if (status === "Em andamento") return s.andamento;
    if (status === "Concluída") return s.concluida;
    return "";
  }

  return (
    <div className={s.conteudo}>
      <div className="fundoDashboard" aria-hidden="true" />
    <div className={s.CabecalhoPagina}>
      <CabecalhoPagina
        titulo="Lista de Cargas"
        descricao="Consulte, acompanhe e gerencie os registros da sua operação."
        />
    </div>

      <section className={s.areaCargas}>
        <div className={s.areaFiltro}>
          <FiltroCargas onFiltrar={setFiltros} />
          <div className={s.resumo}>
            Todos os registros · {cargasFiltradas.length} cargas encontradas
          </div>
        </div>

        <section className={s.containerTabela}>
          <h2 className={s.tituloTabela}>Cargas cadastradas</h2>

          <div className={s.areaTabela}>
            <table className={s.tabela}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Carga</th>
                  <th>Categoria</th>
                  <th>Status</th>
                  <th>Data de coleta</th>
                </tr>
              </thead>

              <tbody>
                {cargasFiltradas.length > 0 ? (
                    cargasFiltradas.map((carga) => (
                        <tr key={carga.id}>
                      <td>#{String(carga.id).padStart(4, "0")}</td>
                      <td className={s.nomeCarga}>{carga.nome}</td>
                      <td>{carga.categoria}</td>
                      <td>
                        <span
                          className={`${s.status} ${classeStatus(carga.status)}`}
                          >
                          {carga.status}
                        </span>
                      </td>
                      <td>{formatarData(carga.dataColeta)}</td>
                    </tr>
                  ))
                ) : (
                    <tr>
                    <td colSpan="5" className={s.vazio}>
                      Nenhuma carga encontrada.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      </section>

      <Sidebar />
    </div>
  );
}

export default ListaCargas;
