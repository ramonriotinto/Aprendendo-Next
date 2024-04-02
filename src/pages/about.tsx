import Image from "next/image";
import styles from "../styles/About.module.css";

export default function About() {
    return (
        <>
            <div className={styles.about}>
                <h1>Sobre o Projeto</h1>
                <p>Aprendendo Next</p>
                <Image
                    src="/images/pokemon-wallpaper.jpg"
                    width="400"
                    height="350"
                    alt="Charizard"
                />
            </div>
        </>
    );
}
