import axios, { AxiosError} from "axios";
import { useEffect, useState } from "react";
import { Tarefa } from "../models/Tarefa";
import { Link } from 'react-router-dom';
import alterarTarefa from "../utilitarios/AlterarTarefa";

function ListarTarefas() {
    const [tarefas, setTarefas] = useState<Tarefa[]>([]);

    useEffect(() =>
     {
        axios.get<Tarefa[]>("http://localhost:5000/api/tarefas/listar")
        .then(resposta => setTarefas(resposta.data))
        .catch((erro: AxiosError) => console.log(`${erro.response?.statusText}: ${erro.response?.data}`))
     });

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Título</th>
                        <th>Descrição</th>
                        <th>Data criação</th>
                        <th>Categoria</th>
                        <th>Status</th>
                    </tr>
                </thead>
                    <tbody>
                        {
                            tarefas.map(({ tarefaId, titulo, descricao, criadoEm, categoria, status }) =>
                                (
                                    <tr key={tarefaId}>
                                        <td>{tarefaId}</td>
                                        <td>{titulo}</td>
                                        <td>{descricao}</td>
                                        <td>{criadoEm}</td>
                                        <td>{categoria?.nome}</td>
                                        <td>{status}</td>
                                    </tr>
                                ))
                        }
                    </tbody>
            </table>
            <Link to="/">Voltar para home</Link>
        </>
    )
}

export default ListarTarefas;