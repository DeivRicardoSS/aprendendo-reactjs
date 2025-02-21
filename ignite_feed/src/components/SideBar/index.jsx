import styles from "./styles.module.css";

export function SideBar() {
    return (
        <aside className={styles.container}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1518057111178-44a106bad636?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <div className={styles.profile}>
                <img src="https://avatars.githubusercontent.com/u/131066052?v=4" alt="profile" />
                <strong>Deivyson Santos</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <a href="#">
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}