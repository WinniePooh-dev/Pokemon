import { GET_POKEMON } from '../action-types';

const init_state = {
    pokemon: []
}

export default function(state = init_state, action) {
    switch (action.type) {
        case GET_POKEMON:
            return {
                ...state,
                pokemon: action.payload
            };
    
        default:
            return state;
    }
}