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

construirElEncabezado();