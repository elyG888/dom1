function calcular() {
    //Crear variables

    let nota1=parseFloat(document.getElementById("nota1").value);
    let nota2=parseFloat(document.getElementById("nota2").value);
    let nota3=parseFloat(document.getElementById("nota3").value);

    //Validar que ninguna nota este fuera del rango (0-5)
    if(nota1<0 || nota1>5){
        alert("Nota 1: Invalida");
        return;
    }

    if(nota2<0 || nota2>5){
        alert("Nota 2: Invalida");
        return;
    }

    if(nota3<0 || nota3>5){
        alert("Nota 3: Invalida");
        return;
    }

    let promedio =(nota1+nota2+nota3)/3;
    document.getElementById("promedio").value =promedio.toFixed(1);

    if(promedio <3) {
        alert ("El estudiante reprobo");
        return;
    }
}