import { useState, useEffect, ChangeEvent } from 'react'
import { Categoria } from '../models/Categoria';
import axios, { AxiosError } from 'axios';
import { Tarefa } from '../models/Tarefa';
import { Link } from 'react-router-dom';

function CadastrarTarefa() {
    const [categorias, setCategorias] = useState<Categoria[]>([]);
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [categoriaId, setCategoriaId] = useState("");

    useEffect(() =>
    {
        axios.get<Categoria[]>("http://localhost:5000/api/categoria/listar")
        .then(resposta => setCategorias(resposta.data));
    });

    function enviarTarefa(e: any) {
        e.preventDefault();

        const tarefa: Tarefa = {
            titulo: titulo,
            descricao: descricao,
            categoriaId: categoriaId,
        }

        axios.post("http://localhost:5000/api/tarefas/cadastrar", tarefa)
        .then((resposta) => console.table(`${resposta.data}`))
        .catch((erro: AxiosError) => alert(`${erro.response?.statusText}: ${erro.response?.data}`));
    }

    return (
        <>
            <form onSubmit={enviarTarefa}>
                <div>
                    <label htmlFor="titulo">Título: </label>
                    <input type="text" name="titulo" id="titulo" onChange={(e: any) => setTitulo(e.target.value)} required/>
                </div>
                <div>
                    <textarea name="descricao" id="descricao" onChange={(e: any) => setDescricao(e.target.value)}></textarea>
                </div>
                <div>

                </div>
                <div>
                    <select name="categoriaId" onChange={(e: any) => setCategoriaId(e.target.value)} required>
                        <option value="0" selected disabled>Escolha uma categoria</option>
                        {
                            categorias.map(({ nome, categoriaId }) =>
                            (
                                <option value={categoriaId} key={categoriaId}>{nome}</option>
                            ))
                        }
                    </select>
                </div>
                <div>
                    <input type="submit" value="Cadastrar tarefa"/>
                </div>
            </form>
            <div>
                <Link to="/pages/tarefa/listar">Ir para lista de tarefas</Link>
            </div>
            <div>
                <Link to="/">Voltar para home</Link>
            </div>
        </>
    )
}

export default CadastrarTarefa;