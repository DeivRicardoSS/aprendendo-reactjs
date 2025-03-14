import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

export function CardProjeto({nome, img, desc, id}) {
    const navigate = useNavigate();

    return (
        <article 
            className={styles.container}
            onClick={()=> navigate(`/detalhes/${id}`)}
        >
            <img src={img} alt="projeto" />
            <strong>{nome}</strong>
            <span>{desc}</span>
        </article>
    );
}