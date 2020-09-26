import React, { Component } from "react";
import { connect } from "react-redux";
import Api from "../../api";
import * as actions from "../../redux/actions";

import './style.scss';

class PokemonList extends Component {

    componentDidMount() {
        Api.loadPokemon().then(data => this.props.getPokemon(data)).catch(er => console.log(er))
    }

    render() {
        const { pokemon, history } = this.props;
        return (
            <ul className={'pokemon-list'}>
                {pokemon.length && pokemon.slice(0, 20).map(pokemon => {
                    const id = pokemon.url.slice(0,-1).match(/\d+$/ig).toString();
                    return (
                        <li key={id} onClick={() => history.push(`/pokemon-list/${id}`)}>
                            {this.renderPokemon(pokemon)}
                        </li>
                    )
                })}
            </ul>
        )
    }

    renderPokemon = pokemon => <div className={'pokemon-list-item'}>{ pokemon.name }</div>
}

const mapStateToProps = ({ pokemon }) => {
    return pokemon
}

export default connect(mapStateToProps, actions)(PokemonList)