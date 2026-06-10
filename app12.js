let mesesVida
let idadeAtul
let mesesAdicionais

idadeAtul = parseInt(prompt("Qual sua idade "))
mesesAdicionais = parseInt(prompt("Meses adicionais"))


mesesVida = (idadeAtul * 12) + mesesAdicionais
alert("Sua idade em meses e" + mesesVida)