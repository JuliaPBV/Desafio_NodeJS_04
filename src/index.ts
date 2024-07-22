/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
	process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);

});
	// CÓDIGO PARA ATENDER OS REQUERIMENTOS
	// R01, R02, R03, R04, R05


import * as readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Alunos{
    protected nome: string;
    protected idade: number;
    protected nota: number;

    constructor(nome: string, idade: number, nota: number){
        this.nome = nome;
        this.idade = idade;
        this.nota = nota;
    }

    public getNota(): number {
        return this.nota;
    }
}

let alunos: Array <Alunos> = [];

function dadosAlunos(): any {
    rl.question('Qual é o seu nome? ', (nome) => {
        rl.question('Qual a sua idade? ', (idadeInput) => {
            const idade = parseInt(idadeInput);
            rl.question('Digite sua nota: ', (notaInput) => {
                const nota = parseFloat(notaInput);

                const aluno = new Alunos(nome, idade, nota);
                alunos.push(aluno);

                if(alunos.length < 3) {
                    console.log('Dados do aluno adicionados com sucesso!\n');
                    dadosAlunos();
                } else {
                    somaNotas();
                    rl.close();
                }
            });
        });
    });
}
dadosAlunos();

function somaNotas(): any {
    let soma = 0;
    for (let aluno of alunos) {
        soma += aluno.getNota();
    }
    console.log('Total da soma das notas dos alunos:', soma);
}

