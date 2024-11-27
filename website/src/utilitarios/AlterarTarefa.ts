import axios, { AxiosError } from "axios";

export default void function alterarTarefa(tarefaId: string) {
    axios.put(`http://localhost:5000/api/tarefas/alterar/${tarefaId}`)
    .then(resposta => alert(`${resposta.data}`))
    .catch((erro: AxiosError) => alert(`${erro.response?.statusText}: ${erro.response?.data}`));
}