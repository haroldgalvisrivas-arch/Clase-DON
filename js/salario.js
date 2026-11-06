function salario(){
    let horas = parseFloat(document.getElementById("horas").value);
    let valor = parseFloat(document.getElementById("valor").value);
    let pagos = horas  * valor;
    document.getElementById("pago").value = pagos.toLocaleString();
}