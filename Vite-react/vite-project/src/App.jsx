

import "./App.css";
import Card from "./componentes/cards";

function App() {
 
const noticias = [
  {
    titulo: "titulo 1",
    descricao: "descrição 1",
    link: "link 1",
    status: true,
  },
  {
    titulo: "titulo 2",
    descricao: "descrição 2",
    link: "link 2",
    status: false,
  },
  {
    titulo: "titulo 3",
    descricao: "descrição 3",
    link: "link 3",
    status: true,
  },
];

  return (
    <>

    <section id="cartoes">
      {
        noticias.map((noticia)=>{
          return noticia.status &&  <Card 
                      titulo={noticia.titulo} 
                      descricao={noticia.descricao}
                      link={noticia.link} />
                      
        })
      }
   
      
    </>
  );
}

export default App;
