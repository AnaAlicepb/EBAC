class Alunos {
    constructor(nomeAluno, notaAluno) {
        this.nome = nomeAluno;
        this.nota = notaAluno;
    }
}

const alunos = [
    new Alunos('Ana Alice', 10),
    new Alunos('Adriana', 5),
    new Alunos('Guilherme', 6)
];

function buscarAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
}

const alunosAprovados = buscarAprovados(alunos);

console.log(alunosAprovados);
