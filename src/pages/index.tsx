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
        <div>
            <h1>Poke Next</h1>

            <ul>
                {pokemons.map((pokemon: any) => (
                    <li key={pokemon.id}>{pokemon.name}</li>
                ))}
            </ul>
        </div>
    );
}
