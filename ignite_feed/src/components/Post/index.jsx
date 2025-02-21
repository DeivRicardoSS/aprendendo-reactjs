import styles from "./styles.module.css";

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
                <button>Comentar</button>
            </form>
            
        </article>
    );
}