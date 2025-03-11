import styles from "./styles.module.css";
import { InstagramLogo, Envelope, GithubLogo, WhatsappLogo } from "phosphor-react";

export function Footer() {
    return (
        <footer className={styles.container}>
            <p>© 2025 Deivyson Santos</p>
            <div>
                <a href="">
                <InstagramLogo size={32} weight="duotone" />
                </a>
                <a href="">
                <Envelope size={32} weight="duotone" />
                </a>
                <a href="">
                <GithubLogo size={32} weight="duotone" />
                </a>
                <a href="">
                <WhatsappLogo size={32} weight="duotone" />
                </a>
                
            </div>
        </footer>
    );
}