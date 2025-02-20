import styles from "./styles.module.css";

export function Button({type, children}) {
    return (
        <button className={[styles.container]}>
            {children}
        </button>
    );
}