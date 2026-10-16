import GraficoMapa from './components/GraficoMapa'
import GraficoPie from './components/graficoPie'
import s from './Home.module.css'


function Home() {

    return (
        <>
        
        <div className={s.parteDeCima}>
        <h1 className={s.titulo}>Tribal <br /> ㅤㅤ Logistics</h1>
        <div className={s.nav}>
        <h2 className={s.tituloPagina}>Dashboard</h2>
        <p>Olá gestor, bem vindo ao menu de cargas.</p>
        </div>
        <button className={s.botaoCarga}> + Nova Carga</button>
        </div>    

        <div className={s.graficos}>
        <GraficoPie/>
        <GraficoMapa/>
        </div>

        </>
    )
}
export default Home