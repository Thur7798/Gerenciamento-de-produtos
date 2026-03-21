import React, { useState } from "react"
import Formulario from "./components/Formulario/Formulario"

function App() {

  const marcas=[
    "HP",
    "Positivo",
    "Dell",
    "Asus",
    "Xing Ling genérico"
  ]

  const secoes=[
    "Computadores",
    "Acessórios",
    "Impressoras",
    "Games",
    "Gadgets"
  ]

  const [produtos, setProdutos] = useState([])
  const adicionarProduto=(prod)=>{
    const listaNova = produtos.slice()
    listaNova.push(prod)
    setProdutos(listaNova)
  }


  
  return (
    <div>
      <Formulario secoes={secoes} marcas={marcas} aoProdutoCadastrado={prod=>adicionarProduto(prod)}/>  
    </div>
  )
}

export default App
