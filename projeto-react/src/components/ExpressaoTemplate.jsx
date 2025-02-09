import React from 'react'

function ExpressaoTemplate() {
    let nome ="jose"
    let nf = {
        cliente:"papai noel",
        valor:1300
    }
  return (
    <>
        <p>ano que vem será {2024+1}</p>
        <p>bem vindo {nome}</p>
        <p>a nota do cliente {nf.cliente} é de {nf.valor.toFixed(2)}</p>
    </>
  )
}

export default ExpressaoTemplate