import { Link } from 'react-router-dom';

function Home() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/pages/tarefa/listar">Listar tarefas</Link>
                </li>
                <li>
                    <Link to="/pages/tarefa/cadastrar">Cadastrar tarefas</Link>
                </li>
                <li>
                    <Link to="/pages/tarefa/concluidas">Listar tarefas concluídas</Link>
                </li>
                <li>
                    <Link to="/pages/tarefa/naoconcluidas">Listar tarefas não concluídas</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Home;