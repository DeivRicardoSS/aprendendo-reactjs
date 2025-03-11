import styles from "./styles.module.css";

export function CardHabilidade({tec, nivel, porc, img}) {
    return (
        <div className={styles.container}>
            <img src={img} alt="icone" />
            <div>
                <strong>Tecnologia: {tec}</strong>
                <span>Nível: {nivel}</span>
                <div>
                    <div style={{ width: `${porc}%` }}></div>
                </div>
            </div>
        </div>
    );
}