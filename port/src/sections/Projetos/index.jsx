import styles from "./styles.module.css";
import { CardProjeto } from "../../components/CardProjeto";

export function Projetos() {
    return (
        <section id="projetos" className={styles.container}>
            <h2>Projetos</h2>
            <div>
                <CardProjeto
                    nome="Landing Page Combogó"
                    img="/assets/combogo.png"
                    desc="Landing page para a agência combogó."
                />

                <CardProjeto
                    nome="Shlomo"
                    img="/assets/shlomo.png"
                    desc="Aplicativo de auxlílio de leitura."
                />

                <CardProjeto
                    nome="Teko - Ideação"
                    img="/assets/teko.png"
                    desc="Ideação de uma plataforma de jogos em nuvem"
                />

                <CardProjeto
                    nome="PhyEdu - Ideação"
                    img="/assets/phyedu.png"
                    desc="Ideação de uma plataforma de estudos online."
                />
            </div>
        </section>
    );
}