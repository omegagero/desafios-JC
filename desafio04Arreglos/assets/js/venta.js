import propiedadesVenta from "./propiedades_venta.js"


const mostrarPropiedadesVenta = () => {
    const container = document.getElementById("soloPropiedadesVenta")

    propiedadesVenta.forEach((propiedad) => {
        const card = document.createElement("div")
        card.className = "col-md-4 mb-4"
        card.innerHTML = `
        
            <div class="card">
            <img
            src="${propiedad.src}"
            class="card-img-top"
            alt="Imagen de la propiedad"
            />
            <div class="card-body">
            <h5 class="card-title"><strong>${propiedad.title} </strong></h5>
            <p class="card-text">${propiedad.description}</p>
            <p><i class="fas fa-map-marker-alt"></i> ${propiedad.address}

        </p>
            <p>
            <i class="fas fa-bed"></i> ${propiedad.bedrooms} Habitaciones |
            <i class="fas fa-bath"></i> ${propiedad.bathrooms} Baños |
            <i class="fas fa-dollar-sign"></i> ${propiedad.costo}
            </p>


            <p class="${propiedad.smoking ? "text-success" : "text-danger"}">
                <i class="fas ${propiedad.smoking ? "fa-smoking" : "fa-smoking-ban"}"></i>
                ${propiedad.smoking ? "Esta permitido fumar" : "No se permite fumar"}
            </p>

            <p class="${propiedad.pets ? "text-success" : "text-danger" } ">
                <i class="fas ${propiedad.pets ? "fa-paw" : "fa-ban" }"></i>
                ${propiedad.pets ? "Mascotas permitidas" : "No se permiten mascotas"}
            </p>
            </div>
           </div> 
        `;
        container.appendChild(card)

    })
};


mostrarPropiedadesVenta()

