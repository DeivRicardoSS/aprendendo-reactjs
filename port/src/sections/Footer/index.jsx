import styles from "./styles.module.css";
import { InstagramLogo, Envelope, GithubLogo, WhatsappLogo, LinkedinLogo } from "phosphor-react";

export function Footer() {
    return (
        <footer className={styles.container}>
            <p>© 2025 Deivyson Santos</p>
            <div>
                <a href="https://www.instagram.com/deivs_05/">
                <InstagramLogo size={32} weight="duotone" />
                </a>
                <a href="deivysonrssantos@outlook.com">
                <Envelope size={32} weight="duotone" />
                </a>
                <a href="https://github.com/DeivRicardoSS">
                <GithubLogo size={32} weight="duotone" />
                </a>
                <a href="https://www.linkedin.com/in/deivyson-ricardo-33354425b/">
                <LinkedinLogo size={32} weight="duotone" />
                </a>
            </div>
        </footer>
    );
}