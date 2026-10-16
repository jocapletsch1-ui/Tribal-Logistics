import GraficoMapa from './components/GraficoMapa'
import GraficoPie from './components/graficoPie'
import s from './Home.module.css'



function Home() {

    return (
        <>


        <div className={s.graficos}>
        <GraficoPie/>
        <GraficoMapa/>
        </div>

        </>
    )
}
export default Home