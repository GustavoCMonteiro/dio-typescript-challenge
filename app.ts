// Desafio 1
let employee: { code: number; name: string } = {
  code: 10,
  name: "John",
};

// Desafio 2
enum Profissao {
  Atriz,
  Padeiro,
}

interface Pessoa {
  nome: string;
  idade: number;
  profissao: Profissao;
}

const pessoa1: Pessoa = {
  nome: "maria",
  idade: 29,
  profissao: Profissao.Atriz,
};

const pessoa2: Pessoa = {
  nome: "roberto",
  idade: 19,
  profissao: Profissao.Padeiro,
};

const pessoa3: Pessoa = {
  nome: "laura",
  idade: 32,
  profissao: Profissao.Atriz,
};

const pessoa4: Pessoa = {
  nome: "carlos",
  idade: 19,
  profissao: Profissao.Padeiro,
};

// Desafio 3
let botaoAtualizar = document.getElementById(
  "atualizar-saldo"
) as HTMLButtonElement;
let botaoLimpar = document.getElementById("limpar-saldo") as HTMLButtonElement;
let soma = document.getElementById("soma") as HTMLInputElement;
let campoSaldo = document.getElementById("campo-saldo") as HTMLInputElement;

campoSaldo.innerHTML = "0";

function somarAoSaldo(soma: number) {
  let campo = Number(campoSaldo.innerHTML) + soma;
  campoSaldo.innerHTML = String(campo);
}

function limparSaldo() {
  campoSaldo.innerHTML = "0";
}

botaoAtualizar.addEventListener("click", function () {
  somarAoSaldo(Number(soma.value));
});

botaoLimpar.addEventListener("click", function () {
  limparSaldo();
});
