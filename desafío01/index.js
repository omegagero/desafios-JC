precio = 400000
cantidadSpan = 0

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio.toLocaleString()


let pagarSpan = document.querySelector(".valor-total")

pagar = cantidadSpan*precio

pagarSpan.innerHTML = pagar

// cantidadSpan = document.querySelector(".cantidad")

