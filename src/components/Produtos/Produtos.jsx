import React from "react";
import './Produtos.css';

const Produtos = (props) => {
    return (
        <div className="card-produto">
            <div className="imagem">
                <img src={props.img} alt={props.nome} />
            </div>
            <div className="info">
                <h4>{props.nome}</h4>
                <h4>R${props.preco}</h4>
                <h5>{props.estado}</h5>
            </div>
        </div>
    )
}

export default Produtos;