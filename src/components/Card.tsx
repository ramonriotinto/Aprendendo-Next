import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Card.module.css";

export default function Card({ pokemon }: any) {
    return (
        <div className={styles.card}>
            <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                width="250"
                height="200"
                alt={pokemon.name}
            />
            <p className={styles.id}>#{pokemon.id}</p>
            <h3 className={styles.title}>{pokemon.name}</h3>
            <Link className={styles.link} href={`/pokemon/${pokemon.id}`}>
                Detalhes
            </Link>
        </div>
    );
}
