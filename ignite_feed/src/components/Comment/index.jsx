import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./styles.module.css";

export function Comment() {
    return(
        <div className={styles.container}>
            <img src="https://avatars.githubusercontent.com/u/131066052?v=4" alt="" />
            <div>
                <div>
                    <header>
                        <div>
                            <strong>Nome de Usuário</strong>
                            <time title="11 de Maio as 8:13" datetime="2022-05-11">Cerca de 2h atráz</time>
                        </div>
                        <button title="Deletar Comentário">
                            <Trash/>
                        </button>
                    </header>
                    <div>
                        
                    </div>
                </div>
                <footer>
                    <button>
                        <ThumbsUp/> Aplaudir • 20
                    </button>
                </footer>
            </div>
        </div>
    );
}