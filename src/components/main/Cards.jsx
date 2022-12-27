import React, { useState } from "react";
import Parent from "../Parent";
import "../css/styles.css";
import { Link } from "react-router-dom";

function Cards(props) {
  const PokemonCards = (obj) => {
    return obj.map((obj, index) => (
      <Link
        to={`PokemonProfile/${obj.nombre}`}
        className="linkCards"
        key={index}
      >
        <li className="li-Cards">
          <div className="Cards" class="main-Card">
            <div className="CardsUp">
              <p className="Codigo">{"#" + obj.ID}</p>
            </div>
            <div className="CardsBody">
              <img className="pokemon" src={obj.imagen}></img>
            </div>
            <div className="CardsDown" id={obj.ID + "2"}>
              <p className="pokeName">
                <b>{obj.nombre}</b>
              </p>
            </div>
          </div>
        </li>
      </Link>
    ));
  };
  return (
    <div className="Card">
      <ul className="ul-Cards">{PokemonCards(props.DatosApi)}</ul>
    </div>
  );
}

export default Cards;
