const path = "config";

let construirElEncabezado = async()=>{
    let peticion = await fetch(`${path}.json`);
    let res = await peticion.json();
    let seleccion = document.querySelector("#myJsonSection");
    seleccion.insertAdjacentHTML("beforeend",/*html*/`
        <h1 class="display-4 fw-normal text-body-emphasis">${res.section.titulo}</h1>
        <p class="fs-5 text-body-secondary">
        ${res.section.parrafo.map((value)=> /*html*/`${value.imagen}${value.texto}<br>`).join("")}
        </p>
    `);
}
let construirLasCartas = async()=>{
    let peticion = await fetch(`${path}.json`);
    let res = await peticion.json();
    let seleccion = document.querySelector("#cart");
    seleccion.insertAdjacentHTML("beforeend",/*html*/`
        ${res.cartas.contenido.map((value)=> /*html*/`${value.imagen}<div class="col"><div class="card mb-4 rounded-0 shadow-sm border-danger opacity-50"><div class="card-header py-3 text-bg-danger border-danger rounded-0"><h4 class="my-0 fw-normal">${value.titulo}</h4></div><div class="card-body"><h1 class="card-title pricing-card-title">${value.precio}<small class="text-body-secondary fw-light">${value.unidad}</small></h1><ul class="list-unstyled mt-3 mb-4">${value.cont}</ul><button type="button" class="w-100 btn btn-lg btn-outline-danger">${value.boton}</button></div></div></div>`).join("")}
        
    `);
}
construirElEncabezado();
construirLasCartas();

