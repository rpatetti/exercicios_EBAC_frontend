const alunos = [{
  nome: 'João',
  nota: 7
}, {
  nome: 'Maria',
  nota: 5
}, {
  nome: 'Ana',
  nota: 8
}, {
  nome: 'Pedro',
  nota: 4
}, {
  nome: 'Lucas',
  nota: 6
}, {
  nome: 'Laura',
  nota: 9
}];
function filtraAprovados(alunos) {
  return alunos.filter(aluno => aluno.nota >= 6);
}
const aprovados = filtraAprovados(alunos);
console.log(aprovados);