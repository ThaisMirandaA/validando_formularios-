export default function eMaiorDeIdade(campo) {
    const dataDeNascimento = new Date(campo.value);
    if (!validaIdade(dataDeNascimento)) {
        campo.setCustomValidity('O usuário é menor de idade.');
    }
}

function validaIdade(data) {
    const dataAtual = new Date;
    const dataMaior18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());

    return dataAtual >= dataMaior18;
}