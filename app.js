"use strict";
// Desafio 1
let employee = {
    code: 10,
    name: "John",
};
// Desafio 2
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Atriz"] = 0] = "Atriz";
    Profissao[Profissao["Padeiro"] = 1] = "Padeiro";
})(Profissao || (Profissao = {}));
const pessoa1 = {
    nome: "maria",
    idade: 29,
    profissao: Profissao.Atriz,
};
const pessoa2 = {
    nome: "roberto",
    idade: 19,
    profissao: Profissao.Padeiro,
};
const pessoa3 = {
    nome: "laura",
    idade: 32,
    profissao: Profissao.Atriz,
};
const pessoa4 = {
    nome: "carlos",
    idade: 19,
    profissao: Profissao.Padeiro,
};
// Desafio 3
let botaoAtualizar = document.getElementById("atualizar-saldo");
let botaoLimpar = document.getElementById("limpar-saldo");
let soma = document.getElementById("soma");
let campoSaldo = document.getElementById("campo-saldo");
campoSaldo.innerHTML = "0";
function somarAoSaldo(soma) {
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
