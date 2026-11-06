function sumar () {

    //let = Declarar una variable
    //parseInt = Indica que es una variable númerica entera
    //dcument. = Indica que lo buscara en el HTML
    //getElementById indica que lo busque  por el id de las etiquetas
    //("num1") = Es el id que tiene la etiqueta en el HTML
    //.value = Para guardar lo que se escriba dentro de la etiqueta
    let varn1=parseInt(document.getElementById("num1").value);
    let varn2=parseInt(document.getElementById("num2").value);

    let suma =varn1+varn2;
                            //.value cuando se mostrata en el input 
    document.getElementById("resultado1").value =suma;

}


function restar () {
    let varn1=parseInt(document.getElementById("num1").value);
    let varn2=parseInt(document.getElementById("num2").value);

    document.getElementById("resultado1").value = varn1-varn2 ;

}


function multi() {
    let varn1=parseInt(document.getElementById("num1").value);
    let varn2=parseInt(document.getElementById("num2").value);

    document.getElementById("resultado1").value= ` ${varn1*varn2}` ; 


}


function divi() {
    let varn1=parseInt(document.getElementById("num1").value);
    let varn2=parseInt(document.getElementById("num2").value);

        //Ventana emergente
    if (varn2===0){
        alert("No se puede dividir por cero.");
        return;   //Finaliza el código para no mostrar el resultado
    }

    document.getElementById("resultado1").value= ` ${varn1/varn2}` ; 
}