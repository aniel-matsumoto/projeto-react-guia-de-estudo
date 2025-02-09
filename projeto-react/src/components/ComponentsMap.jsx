import React from 'react'
import Pessoa from './Pessoa'
function ComponentsMap() {


  return (
    <>
    {pessoas.map((pess) => (
        <Pessoa nome={Pessoa.nome} idade= {Pessoa.idade} />
    ))
    }
    </>
  )
}

export default ComponentsMap