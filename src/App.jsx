import React, { useState } from "react"
import Formulario from "./components/Formulario/Formulario"
import Seção from "./components/Seção/Seção"

function App() {

  const marcas = [
    {
      nome: "HP",
      img: "https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg"
    },
    {
      nome: "Positivo",
      img: "https://images.seeklogo.com/logo-png/30/1/positivo-logo-png_seeklogo-306133.png"
    },
    {
      nome: "Dell",
      img: "https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg"
    },
    {
      nome: "Asus",
      img: "https://upload.wikimedia.org/wikipedia/commons/2/2e/ASUS_Logo.svg"
    },
    {
      nome: "Xing Ling genérico",
      img: "data:image/webp;base64,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"
    }
  ]

  const secoes = [
    "Computadores",
    "Acessórios",
    "Impressoras",
    "Games",
    "Gadgets"
  ]

  const [produtos, setProdutos] = useState([])
  const adicionarProduto = (prod) => {
    const listaNova = produtos.slice()
    listaNova.push(prod)
    setProdutos(listaNova)
  }

  const listaMarcas = marcas.map(marca => marca.nome);


  return (
    <div>
      <Formulario secoes={secoes} marcas={listaMarcas} aoProdutoCadastrado={prod => 
        {
          const marcaSelecionada = marcas.find(m => m.nome === prod.marca);
          
          adicionarProduto({
            ...prod,
            img: marcaSelecionada.img
          })} 
        }
        />
      {secoes.map((secao) => (
        <Seção
          nome={secao}
          key={secao}
          produtos={produtos.filter(prod => prod.secao === secao)}
        />
      ))}
    </div>
  )
}

export default App
