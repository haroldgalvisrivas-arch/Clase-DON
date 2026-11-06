function calcular(){
    let cantidad = parseInt(document.getElementById("cantidad").value);
    let precio = parseInt(document.getElementById("precio").value);
    let subtotal = cantidad * precio;
    let iva = subtotal * 0.19;
    let descuento = subtotal * 0.10;
    let total = subtotal + iva;
    

    document.getElementById("subtotal").value=subtotal.toLocaleString();
    document.getElementById("iva").value=iva.toLocaleString();
    
    let totaldescuento = total  - descuento;
    document.getElementById("descuento").value=descuento.toLocaleString();
    document.getElementById("total").value=totaldescuento.toLocaleString();
   



}