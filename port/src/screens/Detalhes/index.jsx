import { useParams } from "react-router-dom";
import { projetos } from "../../data/projetos";

export function Detalhes() {
    const { id } = useParams();

    const projeto = projetos.find(proj => proj.id == id);

    return(
        <>
            <section>
                <div></div>
                <section>
                    <h1>{projeto.titulo}</h1>
                    <div>
                        {projeto.sobre}
                    </div>
                </section>
            </section>
            <section>
                <article>
                    <strong>Tecnologias</strong>
                    <div>
                        {
                            projeto.tecnologias.map()
                        }
                    </div>
                </article>
                <article>
                    <strong>Visualizar</strong>
                    <button>
                        Projeto
                    </button>
                    <button>
                        Código
                    </button>
                </article>
            </section>
        </>
    );
}