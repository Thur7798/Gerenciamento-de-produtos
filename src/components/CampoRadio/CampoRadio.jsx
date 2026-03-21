import React from "react";
import './CampoRadio.css';

const CampoRadio = (props)=>{

    const aoEscolhido = (evento)=>{
        props.aoAlterado(evento.target.value);
    }

    return(
        <div className="campo-radio">
            <input id={props.value} type="radio" name={props.name} value={props.value} onChange={aoEscolhido}/>
            <label htmlFor={props.value}>{props.label}</label>
        </div>
    )

}

export default CampoRadio;