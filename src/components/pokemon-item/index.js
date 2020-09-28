import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Api from "../../api";
import { getPokemonItem, getURL } from "../../redux/actions";
import { ToHome } from "../to-home";

import "./style.scss";

const { loadPokemonItem } = new Api();

export const PokemonItem = ({ match }) => {

    const dispatch = useDispatch();
    
    useEffect(() => {
        loadPokemonItem(match.params.id).then(data => {
            dispatch(getPokemonItem(data));
            return data;
        })
        .then(data => dispatch(getURL(data.evolution_chain.url))).catch(console.error());
    }, [match.params.id, dispatch]);

    const pokemon_item = useSelector(state => state.pokemon.pokemon_item);

    return (
        <Fragment>
            <ToHome/>
            <ul className={'pokemon-info'}>
                <li><span>name:</span>{pokemon_item.name}</li>
                {pokemon_item.color && <li><span>color:</span>{pokemon_item.color.name}</li>}
                {pokemon_item.effect_entries && <li><span>effect entries:</span>{pokemon_item.effect_entries[1].effect}</li>}
                {pokemon_item.effect_entries && <li><span>short effect:</span>{pokemon_item.effect_entries[1].short_effect}</li>}
                {pokemon_item.evolution_chain && <li><span>evolution chain:</span><Link to={`/pokemon-list/${match.params.id}/evolution-chain`}>
                {pokemon_item.evolution_chain.url}</Link></li>}
                {<li><span>base happiness:</span>{pokemon_item.base_happiness}</li>}
                {<li><span>capture rate:</span>{pokemon_item.capture_rate}</li>}
                <li><span>is legendary:</span>{!!pokemon_item.is_legendary ? 'Yes' : 'Not'}</li>
                {pokemon_item.evolves_from_species ? <li><span>evolves from species:</span>{pokemon_item.evolves_from_species.name}</li> : null}
                {pokemon_item.egg_groups && <li><span>egg groups:</span>{pokemon_item.egg_groups[0].name}</li>}
                {pokemon_item.flavor_text_entries && <li><span>flavor text entries:</span>{pokemon_item.flavor_text_entries[42].flavor_text}</li>}
                {pokemon_item.pal_park_encounters && <li><span>pal park encounters:</span>{pokemon_item.pal_park_encounters[0].area.name}</li>}
                {pokemon_item.shape && <li><span>shape:</span>{pokemon_item.shape.name}</li>}
                {pokemon_item.growth_rate && <li><span>growth rate:</span>{pokemon_item.growth_rate.name}</li>}
                {pokemon_item.habitat && <li><span>habitat:</span>{pokemon_item.habitat.name}</li>}
                <li><span>hatch counter:</span>{pokemon_item.hatch_counter}</li>
                <li><span>is baby:</span>{!!pokemon_item.is_baby ? 'Yes' : 'Not'}</li>
                <li><span>is main series:</span>{!!pokemon_item.is_main_series ? 'Yes' : 'Not'}</li>
                <li><span>is mythical:</span>{!!pokemon_item.is_mythical ? 'Yes' : 'Not'}</li>
                {pokemon_item.effect_changes && pokemon_item.effect_changes.length ? <li><h3><span>effect changes:</span></h3>
                <br/>
                <span>effect entries:</span>{pokemon_item.effect_changes[0].effect_entries[1].effect}
                <br/>
                <span>version group:</span>{pokemon_item.effect_changes[0].version_group.name}
                <br/>
                {pokemon_item.effect_changes[1] && <div>
                    <span>effect entries:</span>{pokemon_item.effect_changes[1].effect_entries[1].effect}
                    <br/>
                    <span>version group:</span>{pokemon_item.effect_changes[1].version_group.name}
                </div>}
                </li> : null}
            </ul>
        </Fragment>
    )
}