import React from "react";
import './Seção.css';
import Produtos from "../Produtos/Produtos";

const Seção = (props) => {
    return (
        <section className="section-produtos">
            <h3 className="titulo-secao">{props.nome}</h3>
            <div className="lista-produtos">
                {props.produtos.map( prod => <Produtos 
                key={prod.nome}
                img={prod.img}
                nome={prod.nome}
                preco={prod.preco}
                estado={prod.estado}
                />)}
            </div>
        </section>

    )

}

export default Seção;