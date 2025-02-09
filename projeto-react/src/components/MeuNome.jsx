import React from 'react'

function MeuNome() {
    const meuNome = "aniel"
    const Sobrenome = "matsumoto"
    const anoNascimento= 1997
    let comanda = {nome: "josé", valor:1200,
        
    }
  return (
    <>
    <p>meu nome é {meuNome} {Sobrenome} tenho {2024-anoNascimento} anos</p>
    <p>o valor da comanda do {comanda.nome} é de {comanda.valor.toFixed(2)}</p>

    </>
  )
}

export default MeuNome