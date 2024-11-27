import { useEffect, useState } from "react";
import { Tarefa } from "../models/Tarefa";
import axios, { AxiosError } from "axios";
import { Link } from "react-router-dom";
import alterarTarefa from "../utilitarios/AlterarTarefa";
import { isUndefined } from "util";

function ListarNaoConcluidas() {
    const [tarefasNaoConcluidas, setTarefasNaoConcluidas] = useState<Tarefa[]>([]);

    useEffect(() =>
    {
        axios.get<Tarefa[]>("http://localhost:5000/api/tarefas/naoconcluidas")
        .then(resposta => setTarefasNaoConcluidas(resposta.data))
        .catch((erro: AxiosError) =>console.log(`${erro.response?.statusText}: ${erro.response?.data}`));
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
                            tarefasNaoConcluidas.map(({ tarefaId, titulo, descricao, criadoEm, categoria, status }) =>
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

export default ListarNaoConcluidas;