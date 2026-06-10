let abastecer 
let litros 
let preço

preço = parseFloat(prompt("qual o preço do combustivel"))
litros = parseFloat(prompt("quantos litros vc gastou"))

abastecer = litros * preço
alert("Vc tera que abastecer  " +  abastecer)