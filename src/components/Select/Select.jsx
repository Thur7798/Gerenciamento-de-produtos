import React from "react";
import  './Select.css';

const secao= (props) =>{

    const aoEscolhido=(evento)=>{
        props.aoAlterado(evento.target.value)
    }

    return(
        <div >
            <label>{props.label}</label>
            <select value={props.valor} onChange={aoEscolhido}>
                {props.item.map(item=><option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default secao;
