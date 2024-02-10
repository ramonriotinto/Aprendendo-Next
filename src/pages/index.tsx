import Image from "next/image";
import styles from "../styles/Home.module.css";

export async function getStaticProps() {
    const maxPokemons = 251;

    const api = "https://pokeapi.co/api/v2/pokemon/";

    const response = await fetch(`${api}/?limit=${maxPokemons}`);

    const data = await response.json();

    // adicionando id aos pokemon
    data.results.forEach((item: any, index: any) => {
        item.id = index + 1;
    });

    return {
        props: {
            pokemons: data.results,
        },
    };
}

export default function Home({ pokemons }: any) {
    return (
        <>
            <div className={styles.title_container}>
                <h1 className={styles.title}>
                    Poke <span>Next</span>
                </h1>
                <Image
                    src="/images/pokeball.png"
                    width="50"
                    height="50"
                    alt="PokeNext"
                />
            </div>

            <div className={styles.pokemon_container}>
                {pokemons.map((pokemon: any) => (
                    <p key={pokemon.id}>{pokemon.name}</p>
                ))}
            </div>
        </>
    );
}
