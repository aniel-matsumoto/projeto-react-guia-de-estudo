import React from 'react'

function Pessoa(props) {
  return (
    <>
    <h1>nome:{props.nome}</h1>
    <h2>idade:{props.idade}</h2>
    <hr/>
    </>
  )
}

export default Pessoa