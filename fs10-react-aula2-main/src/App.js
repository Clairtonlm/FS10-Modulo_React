//Styles
import './App.css';

//Componentes

import PageLayout from './components/Layouts/PageLayout';
import NotFound from './components/NotFound';
import Contato from './components/Contatos';
import Dashboard from './components/Dashboard';
import Portifolio from './components/Portifolio';
import Sobre from './components/Sobre';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return(
      <>
        
        
          <BrowserRouter>
          <Routes>

            <Route path='/' element={<PageLayout/>}>
                <Route index element={<Dashboard/>}/>
                <Route path='/sobre' element={<Sobre/>}/>
                <Route path='/Portifolio' element={<Portifolio/>}/>
                <Route path='/Contatos' element={<Contato/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Route>
            
            
            </Routes>  

          </BrowserRouter>
          
          
        
        
      </>
  );
}

export default App;
