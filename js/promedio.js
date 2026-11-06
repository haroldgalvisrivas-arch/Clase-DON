function promedios(){
    let nota1 = parseFloat(document.getElementById("not1").value);
    let nota2 = parseFloat(document.getElementById("not2").value);
    let nota3 = parseFloat(document.getElementById("not3").value);
    let promedio = (nota1+nota2+nota3)/3;

    document.getElementById("resultado").value = promedio.toFixed(1);

}