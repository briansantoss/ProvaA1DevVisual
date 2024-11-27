import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tarefa } from "../models/Tarefa";
import axios, { AxiosError } from "axios";
import alterarTarefa from "../utilitarios/AlterarTarefa";

function ListarConcluidas() {
    const [tarefasConcluidas, setTarefasConcluidas] = useState<Tarefa[]>([]);

    useEffect(() =>
    {
        axios.get("http://localhost:5000/api/tarefas/concluidas")
        .then(resposta => setTarefasConcluidas(resposta.data))
        .catch((erro: AxiosError) => console.log(`${erro.response?.statusText}: ${erro.response?.data}`));
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
                            tarefasConcluidas.map(({ tarefaId, titulo, descricao, criadoEm, categoria, status }) =>
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

export default ListarConcluidas;