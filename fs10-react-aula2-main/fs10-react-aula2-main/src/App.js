//Styles
import './App.css';
//Componentes
import Dashboard from './components/Dashboard';
import Header from './components/Header';
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
            </Routes>  

          </BrowserRouter>
          
          
        </main>
        
      </>
  );
}

export default App;
