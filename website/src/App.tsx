import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ListarTarefas from './pages/ListarTarefas';
import CadastrarTarefa from './pages/CadastrarTarefa';
import ListarConcluidas from './pages/ListarConcluidas';
import ListarNaoConcluidas from './pages/ListarNaoConcluidas';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/pages/tarefa/listar" element={<ListarTarefas/>}/>
          <Route path="/pages/tarefa/cadastrar" element={<CadastrarTarefa/>}/>
          <Route path="/pages/tarefa/concluidas" element={<ListarConcluidas/>}/>
          <Route path="/pages/tarefa/naoconcluidas" element={<ListarNaoConcluidas/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
