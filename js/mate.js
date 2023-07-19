function mcm(num1, num2) {
    return (num1 * num2) / mcd(num1, num2);
}
function mcd(num1, num2) {
    if (num2 === 0) {
        return num1;
    } else {
        return mcd(num2, num1 % num2);
    }
}
function simplificarFraccion(numerador, denominador) {
    var divisor = mcd(numerador, denominador);
    var numeradorSimplificado = numerador/divisor
    var denominadorSimplificado = denominador/divisor
    document.getElementById("totalNumerador").value=numeradorSimplificado
    document.getElementById("totalDenominador").value=denominadorSimplificado
}
function calcularFraccion(){
    var numerador1 = Number(document.getElementById("numerador1").value)
    var denominador1 = Number(document.getElementById("denominador1").value)
    var numerador2 = Number(document.getElementById("numerador2").value)
    var denominador2 = Number(document.getElementById("denominador2").value)
    var op = Number(document.getElementById("operacion").value)
    var resultadoNumerador = Number
    var resultadoDenominador = Number
    switch (op) {
        case 1:
            if (denominador1==denominador2) {
                resultadoNumerador = numerador1+numerador2
                resultadoDenominador = denominador1
            } else {
                resultadoNumerador = (numerador1*denominador2) + (numerador2*denominador1)
                resultadoDenominador = denominador1*denominador2
            }
            break;
        case 2:
            if (denominador1==denominador2) {
                resultadoNumerador = numerador1-numerador2
                resultadoDenominador = denominador1
            } else {
                resultadoNumerador = (numerador1*denominador2) - (numerador2*denominador1)
                resultadoDenominador = denominador1*denominador2
            }
            break;
        case 3:
            resultadoNumerador = numerador1*numerador2
            resultadoDenominador = denominador1*denominador2
            break;
        case 4:
            resultadoNumerador = numerador1*denominador2
            resultadoDenominador = numerador2*denominador1
            break;
        default:
            var total= "ERROR"
            break;
        }
        document.getElementById("totalNumerador").value=resultadoNumerador
        document.getElementById("totalDenominador").value=resultadoDenominador
}
function calcularOtros(){
    var numero1 = Number(document.getElementById("num1").value)
    var numero2 = Number(document.getElementById("num2").value)
    var opOtros = Number(document.getElementById("opcionOtros").value)
    var totalOtros = Number
    switch (opOtros) {
        case 1:
            totalOtros = mcm(numero1, numero2)
            break;
        case 2:
            totalOtros = mcd(numero1, numero2)
            break;
        default:
            var total= "ERROR"
            break;
        }
        document.getElementById("totalOtros").value=totalOtros
}
