let produto 
let desconto
let produtoDescontado 
 
desconto = parseFloat(prompt("Vc tera de desconto "))
produto = parseFloat(prompt("Proço do produto "))

produtoDescontado = ( desconto * produto) / 100
alert("Seu produto custara depois do desconto" + produtoDescontado)