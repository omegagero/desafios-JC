function validarNumero() {
    const inputNumerico = document.getElementById("inputNumerico");
    if (inputNumerico.value < 0) {
        inputNumerico.value = 0; 
    }
}


document.addEventListener("DOMContentLoaded", function() {
    const selectMoneda = document.getElementById("selectMoneda");
    const inputNumerico = document.getElementById("inputNumerico");
    const botonBuscar = document.querySelector("button");
    const resultadoParrafo = document.getElementById("resultado");
    
    botonBuscar.addEventListener("click", function() {
        const monedaSeleccionada = selectMoneda.value;
        const cantidad = parseFloat(inputNumerico.value);

        
        if (isNaN(cantidad) || cantidad < 0) {
            resultadoParrafo.textContent = "Por favor, ingrese una cantidad válida.";
            return;
        }
//doble método de error
        try {
            fetch("https://mindicador.cl/api/")
                .then(response => {
                    if (!response.ok) {
                        throw new Error('La solicitud a la API falló');
                    }
                    return response.json();
                })
                .then(data => {
                    const valorMoneda = data[monedaSeleccionada].valor;
                    const resultado = cantidad / valorMoneda;
                    resultadoParrafo.textContent = `Son $${resultado.toFixed(2)} (${monedaSeleccionada}) `;
                })
                .catch(error => {
                    console.error("Error al obtener el valor de la moneda:", error);
                    resultadoParrafo.textContent = "Ha ocurrido un error al obtener el valor de la moneda.";
                });
        } catch (error) {
            console.error("Error al realizar la solicitud:", error);
            resultadoParrafo.textContent = "Ha ocurrido un error al realizar la solicitud a la API.";
        }
        
    });
});


async function getAndCreateDataToChart(monedaSeleccionada) {
    try {
        const res = await fetch(`https://mindicador.cl/api/${monedaSeleccionada}`);
        if (!res.ok) {
            throw new Error('La solicitud a la API falló');
        }
        
        const data = await res.json();
        const ultimos10Dias = data.serie.slice(0, 10).reverse();
        
        const labels = ultimos10Dias.map(sismo => sismo.fecha);
        const valores = ultimos10Dias.map(sismo => sismo.valor);
        
        const datasets = [
            {
                label: `${data.nombre}`,
                borderColor: "rgb(255, 99, 132)",
                data: valores
            }
        ];

        return { labels, datasets };
    } catch (error) {
        console.error('Ocurrió un error:', error);
       
        return null; 
    }
}




let myChart; 

async function renderGrafica() {
    const selectMoneda = document.getElementById("selectMoneda");
    const monedaSeleccionada = selectMoneda.value;

    const data = await getAndCreateDataToChart(monedaSeleccionada);

    const config = {
        type: "line",
        data
    };

    const myChartElement = document.getElementById("myChart");
    myChartElement.style.backgroundColor = "white";

    
    if (myChart) {
        myChart.destroy();
    }

    
    myChart = new Chart(myChartElement, config);
}

document.addEventListener("DOMContentLoaded", function() {
    const botonBuscar = document.querySelector("button");
    botonBuscar.addEventListener("click", renderGrafica);
});

