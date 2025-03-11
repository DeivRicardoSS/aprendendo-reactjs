import styles from "./styles.module.css";
export function CardProjeto({nome, img, desc, id}) {
    return (
        <article className={styles.container}>
            <img src={img} alt="projeto" />
            <strong>{nome}</strong>
            <span>{desc}</span>
        </article>
    );
}