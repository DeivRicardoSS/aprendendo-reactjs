import { Header } from '../../components/Header'
import { Home } from '../../sections/Home'
import { Sobre } from  '../../sections/Sobre'
import { Projetos } from '../../sections/Projetos'
import { Habilidades } from '../../sections/Habilidades'
import { Footer } from '../../sections/Footer'


export function Principal() {
    return(
        <>
            <Header/>
            <Home/>
            <Sobre/>
            <Projetos/>
            <Habilidades/>
            <Footer/>
        </>
    );
}