//Styles
import './App.css';
import Contato from './components/Contatos';
//Componentes
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Portifolio from './components/Portifolio';
import Sobre from './components/Sobre';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return(
      <>
        <Header />
        <main>
          <BrowserRouter>
          <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/sobre' element={<Sobre/>}/>
            <Route path='/Potifolio' element={<Portifolio/>}/>
            <Route path='/Contato' element={<Contato/>}/>
            </Routes>  

          </BrowserRouter>
          
          
        </main>
        
      </>
  );
}

export default App;
