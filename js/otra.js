function calcularPresupuesto(){
    let numinv = parseInt(document.getElementById("numero-inv").value);
    let costocom = parseFloat(document.getElementById("cost-comida").value);
    let costobeb = parseFloat(document.getElementById("cost-bebida").value);
    let costdec = parseFloat(document.getElementById("cost-decor").value);
    let costmus = parseFloat(document.getElementById("cost-musica").value);
    let propina = parseFloat(document.getElementById("propina-porc").value);

    let totalcom = numinv * costocom;
    document.getElementById("comida-total-s").innerText = totalcom.toLocaleString("es-CO");

    let totalbeb = numinv * costobeb;
    document.getElementById("bebida-total-s").innerText = totalbeb.toLocaleString("es-CO");

    let totaldec = numinv * costdec;
    document.getElementById("decoracion").innerText = totaldec.toLocaleString("es-CO");

    let totalmus = numinv * costmus;
    document.getElementById("musica").innerText = totalmus.toLocaleString("es-CO");

    let subtotal = totalcom + totalbeb + totaldec + totalmus;
    document.getElementById("subtotal").innerText = subtotal.toLocaleString("es-CO");

    let totalpropina = subtotal * (propina / 100);
    document.getElementById("propina").innerText = totalpropina.toLocaleString("es-CO");

    let totalgeneral = subtotal + totalpropina;
    document.getElementById("total-general").innerText = totalgeneral.toLocaleString("es-CO");

    let costoinvitado = totalgeneral / numinv;
    document.getElementById("costo-inv").innerText = costoinvitado.toLocaleString("es-CO");
}