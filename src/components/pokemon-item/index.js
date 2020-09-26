import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Api from "../../api";
import { getPokemonItem } from "../../redux/actions";

const { loadPokemonItem } = new Api();

export const PokemonItem = ({ match }) => {

    const dispatch = useDispatch();
    
    useEffect(() => {
        loadPokemonItem(match.params.id).then(data => dispatch(getPokemonItem(data))).catch(console.error());
    }, [match.params.id, dispatch]);

    const pokemon_item = useSelector(state => state.pokemon.pokemon_item);

    return (
        <div>
            PokemonItem
            {console.log(pokemon_item)}
            {goToBack()}
        </div>
    )
}

const goToBack = () => {
    return (
        <Link to={"/pokemon-list"}>
            назад
        </Link>
    )
}