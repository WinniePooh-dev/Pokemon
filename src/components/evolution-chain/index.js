import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import Api from "../../api";
import { getEvolutionChain } from "../../redux/actions";
import { ToHome } from "../to-home";

import "./style.scss";

const { loadEvolutionChain } = new Api();

const EvolutionChain = ({ match }) => {

    const dispatch = useDispatch();

    useEffect(() => {
        loadEvolutionChain(match.params.id).then(data => dispatch(getEvolutionChain(data))).catch(er => console.log(er))
    });

    const evolution_chain = useSelector(state => state.pokemon.evolution_chain);
    
    return (
        <div className={'evolution-chain'}>
            <ToHome/>
            <GoToBack id={match.params.id}/>
        </div>
    )
}

const GoToBack = props => {
    return (
        <Link className={'to-home'} to={`/pokemon-list/${props.id}`}>
            Go To Back
        </Link>
    )
}

export default withRouter(EvolutionChain);