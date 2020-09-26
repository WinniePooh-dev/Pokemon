import { GET_POKEMON, GET_POKEMON_ITEM } from '../action-types';

const init_state = {
    pokemon: [],
    pokemon_item: {}
}

export default function(state = init_state, action) {
    switch (action.type) {
        case GET_POKEMON:
            return {
                ...state,
                pokemon: action.payload
            };
        case GET_POKEMON_ITEM:
            return {
                ...state,
                pokemon_item: action.payload
            }
    
        default:
            return state;
    }
}