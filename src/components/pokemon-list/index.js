import React, { Component } from "react";
import { connect } from "react-redux";
import Api from "../../api";
import * as actions from "../../redux/actions";

import './style.scss';

class PokemonList extends Component {

    componentDidMount() {
        Api.loadPokemon().then(response => this.props.getPokemon(response.data.game_indices)).catch(er => console.log(er))
    }

    render() {
        const { pokemon } = this.props;
        return (
            <ul className={'pokemon-list'}>
                {pokemon.length && pokemon.slice(0, 20).map((pokemon, index) => {
                    console.log(pokemon)
                    return (
                        <li key={++index}>
                            {this.renderPokemon(pokemon)}
                        </li>
                    )
                })}
            </ul>
        )
    }

    renderPokemon = pokemon => <div className={'pokemon-list-item'}>{ pokemon.version.name }</div>
}

const mapStateToProps = ({ pokemon }) => {
    return pokemon
}

export default connect(mapStateToProps, actions)(PokemonList)