var linha = parseInt(prompt("Linhas"));

for(let i = 1; i <= linha; i++){
    let linha = ''
    for(let j = 1; j <= i; j++){
        linha += '*'
    }
    console.log(linha);
}