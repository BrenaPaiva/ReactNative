import { Route, Routes } from 'react-router-dom';
import Menu from './Jogo/Menu';
import PaginaDois from './Components/PaginaDois';
import PaginaUm from './Components/PaginaUm';
import PaginaTres from './Components/PaginaTres';
import Jogo from './Jogo/Jogo';



function App() {

  return (
    <div>
      Nosso projeto com rotas
      <div>
        <Routes>
          <Route path='/' element={<Menu />} />
          <Route path='/pagina-um/:time' element={<PaginaUm />} />
          <Route path='/pagina-dois' element={<PaginaDois />} />
          <Route path='/pagina-tres' element={<PaginaTres />} />
          <Route path='/jogo' element={< Jogo />} />
          {/*<Route path='/timeform' element={< Listagem />} />*/}
          {/*<Route path='/questoesform' element={< QuestoesForm />} />*/}


        </Routes>
      </div>
    </div>

  );
}

export default App;