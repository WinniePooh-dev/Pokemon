import React from "react";
import { Link } from "react-router-dom";

import "./style.scss";

export const ToHome = () => {
    return (
        <Link className={'to-home'} to={"/pokemon-list"}>
            To Home
        </Link>
    )
}