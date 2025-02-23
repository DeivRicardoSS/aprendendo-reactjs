import styles from "./styles.module.css";
import { Comment } from "../Comment";

export function Post({nome, cargo, img, time, post}) {
    return (
        <article className={styles.container}>
            <header>
                <div>
                    <img src={img} alt="profile" />
                    <div>
                        <strong>{nome}</strong>
                        <span>{cargo}</span>
                    </div>
                </div>
                <time title="11 de Maio as 8:13" datetime="2022-05-11">Publicado há {time}</time>
            </header>
            
            <div>
                {post}     
            </div>
            <form>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder="Deixe seu comentário"/>
                <footer>
                    <button>Comentar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment/>
            </div>
            
        </article>
    );
}