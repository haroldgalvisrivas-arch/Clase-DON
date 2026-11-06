function calcular(){
    let invitados = parseInt(document.getElementById("invitados").value);
    let comidas = parseInt(document.getElementById("comida").value);
    let bebida = parseInt(document.getElementById("bebida").value);
    let decoracion = parseInt(document.getElementById("decoración").value);
    let musica = parseInt(document.getElementById("musica").value);
    let propina = parseFloat(document.getElementById("propina").value);
    let totalComida = invitados * comidas, totalBebida= bebida*invitados;
    let subtotal = musica + decoracion + totalBebida + totalComida;
    let servicio = (propina/100) * subtotal;
    let totalgenral = subtotal + servicio;
    let costoInvitados = totalgenral/invitados;

    document.getElementById("comidaTotal").innerText = totalComida.toLocaleString();
    document.getElementById("bebidaTotal").innerText = totalBebida.toLocaleString();
    document.getElementById("decoración1").innerText = decoracion.toLocaleString();
    document.getElementById("musica1").innerText = musica.toLocaleString();
    document.getElementById("subtotal").innerText = subtotal.toLocaleString();
    document.getElementById("propina1").innerText = servicio.toLocaleString();
    document.getElementById("total").innerText = totalgenral.toLocaleString();
    document.getElementById("costoInvitado").innerText = costoInvitados.toLocaleString();

}