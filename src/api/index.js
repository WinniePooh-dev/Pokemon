import axios from "axios";

export default class Api {
    static loadPokemon = async () => {
        const response = await axios.get('https://pokeapi.co/api/v2/generation/1/').then(response => response.data.pokemon_species).catch(console.error());
        return response
    };

    loadPokemonItem = async id => {
        const response = await axios.get(`https://pokeapi.co/api/v2/ability/${id}/`);
        return response
    };
};