const precoGasolina = 5.79;
const precoEtanol = 4.29;
const precoDiesel = 6.79;

// Função principal
function atualizarValor() {
    const tipo = document.getElementById("combustivel").value;
    const litrosElement = document.getElementById("litros");
    const litros = parseFloat(litrosElement.value);

    let precoPorLitro;
    // Switch case
    switch (tipo) {
        case "gasolina":
            precoPorLitro = precoGasolina;
            break;
        case "etanol":
            precoPorLitro = precoEtanol;
            break;
        case "diesel":
            precoPorLitro = precoDiesel;
            break;
        default:
            document.getElementById("resultado").textContent = "Selecione um tipo de combustível";
            return;
    }
    calcularValorAbastecimento(precoPorLitro, litros);
}

function calcularValorAbastecimento(precoCombustivel, litros) {
    // Verifica se o valor dos litros é um número válido
    if (isNaN(litros) || litros <= 0) {
        document.getElementById("resultado").textContent = "Insira um valor válido para litros";
        return;
    }
    const valorTotal = precoCombustivel * litros;
    document.getElementById("resultado").textContent = formatarMoeda(valorTotal); // Formata o valor como moeda
}

function formatarMoeda(valor) {
    return "R$ " + valor.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

// Adiciona os event listeners
document.getElementById("litros").addEventListener("input", atualizarValor);
document.getElementById("combustivel").addEventListener("change", atualizarValor);
document.getElementById("litros").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        event.atualizarValor();
    }
});