let aluno= require('./index');
console.log(aluno);

//MICRO DESAFIO 2
//1.- Nosso objeto aluno terá o método calcularMedia que retorna a média de suas notas.

for (let i=0; i< aluno.length; i++){
    let mediaNotas = aluno[i].notas.reduce((total, next)=> total + next)/aluno[i].notas.length;
console.log(aluno[i].nome+ " - tem media de notas: " +mediaNotas);
}

//2.- Também terá um método chamado faltas, que simplesmente aumenta o número de faltas em 1

function IncrementoFaltas (){
    for(let i= 0; i< aluno.length; i++){
    let incrementoFaltas = aluno[i].quantidadeFaltas +1;
    console.log(incrementoFaltas);};
}
IncrementoFaltas();

//Micro desafio - Passo 3
//Em um arquivo diferente, crie o objeto literal curso que tem como atributos: nome do curso
//(string), nota de aprovação (number), faltas máximas (number) e uma lista de estudantes
//(um array composto pelos alunos criados no passo 1)

let curso= require('./index2');
console.log(curso);

//Micro desafio - Passo 4
//Crie o método que permite adicionar alunos à lista do curso, ou seja, quando chamamos
//nosso método em nosso objeto curso, deverá adicionar um aluno a mais na propriedade
//lista de estudantes do objeto curso.

function adicionarNome (){
    for (let i= 0; i< curso.length; i++){
        aluno= curso[i].aluno.push('filipe');
};}
console.log(curso);


//Micro desafio - Passo 5
console.log()