import * as action_types from "../action-types";

export const getPokemon = pokemon => {
    return {
        type: action_types.GET_POKEMON,
        payload: pokemon
    }
}