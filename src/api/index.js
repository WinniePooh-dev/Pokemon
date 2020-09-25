import axios from "axios";

export default class Api {
    static loadPokemon = async () => {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
        return response
    }
}