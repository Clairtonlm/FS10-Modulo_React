//Styles
import './App.css';
import Contato from './components/Contatos';
//Componentes

import PageLayout from './components/Layouts/PageLayout';
import NotFound from './components/NotFound';

import Portifolio from './components/Portifolio';
import Sobre from './components/Sobre';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return(
      <>
        
        
          <BrowserRouter>
          <Routes>
            <Route path='/' element={<PageLayout/>}/>
            <Route path='/sobre' element={<Sobre/>}/>
            <Route path='/Potifolio' element={<Portifolio/>}/>
            <Route path='/Contato' element={<Contato/>}/>
            <Route path='*' element={<NotFound/>}/>
            </Routes>  

          </BrowserRouter>
          
          
        
        
      </>
  );
}

export default App;
