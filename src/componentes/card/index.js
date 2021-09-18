import React from "react";
import "./style.css";
import { useState, useEffect } from "react";
// import { Container } from './styles';

function Card(props) {
  return (
    <div className="card">
      <div className="container">
        <div className="bola_azul"></div>
        <div className="bolas_topo"></div>
        <div className="bolas_topo"></div>
        <div className="bolas_topo"></div>
      </div>
      <div className="layout_tela">
        <div className="tela">
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${props.imageIndex}.gif`}></img>
          <p>{props.name}</p>
        </div> 
      </div>
      <div className="flex_end">
        <div className="bola_verde"></div>
        <div className="retangulo"></div>
        <div className="tela_verde"></div>
        <div className="pad"></div>
      </div>
      <div className="seta"></div>
    </div>
  );
}

export default Card;
