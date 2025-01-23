// classe que representa o item de uma lista de tarefas

type Task = {
  nome: string;
  concluida: string;
};

class Tarefa {
  // inicialização das propriedades do objeto
  constructor(nome: string) {
    this._nome = nome;
    this._concluida = false;
  }

  private _nome: string;
  private _concluida: boolean;

  public get nome(): string {
    return this._nome;
  }

  public set nome(nome: string) {
    this._nome = nome;
  }

  public set concluida(concluida: boolean) {
    this._concluida = concluida;
  }

  public mudarNomeEConcluida(nome: string, concluida: boolean) {
    this._nome = nome;
    this._concluida = concluida;
  }
}

const tarefa = new Tarefa("Aprenda JavaScript");

tarefa.nome = "Outra tarefa";
tarefa.concluida = true;

tarefa.mudarNomeEConcluida("Mudou a tarefa", false);

class Pessoa {
  constructor(nome: string, idade: number, sexo: string, cor: string) {
    this._nome = nome;
    this._idade = idade;
    this._sexo = sexo;
    this._cor = cor;
  }

  private _nome: string;
  private _idade: number;
  private _sexo: string;
  private _cor: string;

  public get nome() {
    return this._nome;
  }

  public get idade() {
    return this._idade;
  }

  public get sexo() {
    return this._sexo;
  }

  public get cor() {
    return this._cor;
  }

  public set nome(nome: string) {
    this._nome = nome;
  }

  public set idade(idade: number) {
    this._idade = idade;
  }
}

const pessoa = new Pessoa("Cezar", 34, "M", "branco");

console.log(pessoa);

pessoa.idade = 34;
pessoa.sexo;

const task: Task = {
  nome: "",
  concluida: "false",
};

task.nome = "Fulano"