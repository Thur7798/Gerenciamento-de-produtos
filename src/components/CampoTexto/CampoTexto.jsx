import React, {useState} from "react";
import './CampoTexto.css'

const CampoTexto= (props) =>{
    const [nome, setNome] = useState('');

    const aoDigitado=(evento)=>{
        props.aoAlterado(evento.target.value)
    }

    return(
        <div>
            <label>{props.label}</label>
            <input type="text" value={props.valor} placeholder={props.placeholder} onChange={aoDigitado}/>
        </div>
    )
}

export default CampoTexto;