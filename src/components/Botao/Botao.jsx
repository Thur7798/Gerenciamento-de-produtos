import React from "react";
import './Botao.css'

const Botao=(props)=>{
    return(
        <button>
            {props.texto}
        </button>
    )
}

export default Botao