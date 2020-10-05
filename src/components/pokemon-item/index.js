import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useRouteMatch } from "react-router-dom";
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
            return data.evolution_chain.url;
        })
        .then(url => dispatch(getURL(url))).catch(console.error());
    }, [match.params.id, dispatch]);

    const pokemon_item = useSelector(state => state.pokemon.pokemon_item);

    return (
        <Fragment>
            <ToHome/>
            <PokemoList {...pokemon_item}/>
        </Fragment>
    )
}

function PokemoList ({ name, color, effect_entries, evolution_chain, base_happiness,
    capture_rate, is_legendary, evolves_from_species, egg_groups, flavor_text_entries,
    pal_park_encounters, shape, growth_rate, habitat, hatch_counter, is_baby, is_main_series,
    is_mythical, effect_changes }) {
        const match = useRouteMatch('/pokemon-list/:id');
    return (
        <ul className={'pokemon-info'}>
            <li><span>name:</span>{name}</li>
            {color && <li><span>color:</span>{color.name}</li>}
            {effect_entries && <li><span>effect entries:</span>{effect_entries[1].effect}</li>}
            {effect_entries && <li><span>short effect:</span>{effect_entries[1].short_effect}</li>}
            {evolution_chain && <li><span>evolution chain:</span><Link to={`/pokemon-list/${match.params.id}/evolution-chain`}>
            {evolution_chain.url}</Link></li>}
            {<li><span>base happiness:</span>{base_happiness}</li>}
            {<li><span>capture rate:</span>{capture_rate}</li>}
            <li><span>is legendary:</span>{is_legendary ? 'Yes' : 'Not'}</li>
            {evolves_from_species ? <li><span>evolves from species:</span>{evolves_from_species.name}</li> : null}
            {egg_groups && <li><span>egg groups:</span>{egg_groups[0].name}</li>}
            {flavor_text_entries && <li><span>flavor text entries:</span>{flavor_text_entries[42].flavor_text}</li>}
            {pal_park_encounters && <li><span>pal park encounters:</span>{pal_park_encounters[0].area.name}</li>}
            {shape && <li><span>shape:</span>{shape.name}</li>}
            {growth_rate && <li><span>growth rate:</span>{growth_rate.name}</li>}
            {habitat && <li><span>habitat:</span>{habitat.name}</li>}
            <li><span>hatch counter:</span>{hatch_counter}</li>
            <li><span>is baby:</span>{is_baby ? 'Yes' : 'Not'}</li>
            <li><span>is main series:</span>{is_main_series ? 'Yes' : 'Not'}</li>
            <li><span>is mythical:</span>{is_mythical ? 'Yes' : 'Not'}</li>
            {effect_changes && effect_changes.length ? <li><h3><span>effect changes:</span></h3>
            <br/>
            <span>effect entries:</span>{effect_changes[0].effect_entries[1].effect}
            <br/>
            <span>version group:</span>{effect_changes[0].version_group.name}
            <br/>
            {effect_changes[1] && <div>
                <span>effect entries:</span>{effect_changes[1].effect_entries[1].effect}
                <br/>
                <span>version group:</span>{effect_changes[1].version_group.name}
            </div>}
            </li> : null}
        </ul>
    )
}