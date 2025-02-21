import styles from "./styles.module.css";

export function Post() {
    return (
        <article className={styles.container}>
            <div>
                <img src="https://avatars.githubusercontent.com/u/131066052?v=4" alt="profile" />
                <div>
                    <strong>Nome de Usuário</strong>
                    <span>Dev Front-End</span>
                </div>
            </div>
            <div>
                <p>
                Fala galeraa 👋
                <br/><br/>
                Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
                <br/><br/>
                👉 jane.design/doctorcare
                <br/><br/>
                #novoprojeto #nlw #rocketseat
                </p>
            </div>
            <form>
                <strong>Deixe seu feedback</strong>
                <textarea name="feedback" cols="100" rows="10">
                Nossa, adorei amigo! Parabéns
                </textarea>
                <button>Publicar</button>
            </form>
            
        </article>
    );
}