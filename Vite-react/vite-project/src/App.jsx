

import "./App.css";
import Card from "./componentes/cards";

function App() {
 
const noticias = [
  {
    titulo: "titulo 1",
    descricao: "descrição 1",
    link: "link 1"
  },
  {
    titulo: "titulo 2",
    descricao: "descrição 2",
    link: "link 2"
  },
  {
    titulo: "titulo 3",
    descricao: "descrição 3",
    link: "link 3"
  },
];

  return (
    <>
    <section id="cartoes">
      <Card 
      titulo1="Meu titulo"
      descricao1="descrição 1"
      link1="#!"
      />
      <Card 
      titulo2="titulo 2"
      descricao2="descrição 2"
      link2="#"
      />
      <Card 
      titulo3="titulo 3"
      descricao3="descrição 3"
      link3="#"
      />
      <Card />
      <Card />
    </section>
      
    </>
  );
}

export default App;
