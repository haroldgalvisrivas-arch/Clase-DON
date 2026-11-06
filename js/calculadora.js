function suma(){
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let sumar = num1 + num2;

    document.getElementById("resultado").value = sumar;
}

function resta(){
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let restar = num1 - num2;

    document.getElementById("resultado").value = restar;
}

function multiplicar(){
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let multiplica = num1 * num2;

    document.getElementById("resultado").value = multiplica;
}

function dividir(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let divide = num1 / num2;

    document.getElementById("resultado").value = divide;
}