import Titulo1 from "./components/Titulo1"
import Greeting from "./components/Greeting"
import ExpressaoTemplate from "./components/ExpressaoTemplate"
import MeuNome from "./components/MeuNome"
import ComponentsProps from "./components/ComponentsProps"
import Pessoa from "./components/Pessoa"
import ListaPessoas from "./ListaPessoas/ListaPessoas"
function App() {
  

  return (
    <>
      <Titulo1 />
      <Greeting />
      <ExpressaoTemplate />
      <MeuNome />
      <ComponentsProps nome={"mano juca vive"} idade={23} />

      {ListaPessoas.map((pessoa) => (
        <Pessoa key={pessoa.id} nome={pessoa.nome} idade={pessoa.idade} />
      ))}
    </>
  );
}

export default App;