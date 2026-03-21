import React, { useState } from "react";
import './Formulario.css';
import Botao from "../Botao/Botao";
import CampoRadio from "../CampoRadio/CampoRadio";
import CampoTexto from "../CampoTexto/CampoTexto";
import Select from "../Select/Select";

const Formulario = (props) => {

    const [secao, setSecao] = useState('');
    const [marca, setMarca] = useState('');
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [estado, setEstado] = useState('');

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoProdutoCadastrado(
            {
                "secao": secao,
                "marca": marca,
                "nome": nome,
                "preco": preco,
                "estado": estado
            }
        )
    }

    return (
        <section>
            <form onSubmit={aoSalvar}>
                <h2>Dados do produto: </h2>
                <Select label="Seção" valor={secao} item={props.secoes} aoAlterado={valor => setSecao(valor)} />
                <Select label="Marca" valor={marca} item={props.marcas} aoAlterado={valor => setMarca(valor)} />
                <CampoTexto label="Nome" valor={nome} placeholder="Digite o nome do produto: " aoAlterado={valor => setNome(valor)} />
                <CampoTexto label="Preço" valor={preco} placeholder="Digite o preço do produto: " aoAlterado={valor => setPreco(valor)} />
                <div className="grupo-radio">
                    <CampoRadio
                        name="estado"
                        value="Novo"
                        label="Novo"
                        aoAlterado={valor => setEstado(valor)}
                    />

                    <CampoRadio
                        name="estado"
                        value="Usado"
                        label="Usado"
                        aoAlterado={valor => setEstado(valor)}
                    />
                </div>
                <Botao texto="Criar produto" />
            </form>
        </section>
    )


}

export default Formulario;