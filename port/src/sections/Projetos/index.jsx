import styles from "./styles.module.css";
import { CardProjeto } from "../../components/CardProjeto";
import { projetos } from "../../data/projetos";

export function Projetos() {
    return (
        <section id="projetos" className={styles.container}>
            <h2>Projetos</h2>
            <div>
                {
                    projetos.map((projeto, index) => {
                        return (
                            <CardProjeto
                                key={index}
                                nome={projeto.titulo}
                                img={projeto.capa}
                                desc={projeto.sub}
                                id={projeto.id}
                            />
                        );
                    })
                }
            </div>
        </section>
    );
}
