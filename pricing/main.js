const path = "config";

let construirElEncabezado = async()=>{
    let peticion = await fetch(`${path}.json`);
    let res = await peticion.json();
    let seleccion = document.querySelector("#myJsonSection");
    seleccion.insertAdjacentHTML("beforeend",/*html*/`
        <h1 class="display-8 fw-normal text-body-emphasis text-start">${res.section.titulo}</h1>
        <p class="fs-5 text-body-secondary text-start">
        ${res.section.parrafo.map((value)=> /*html*/`${value.imagen}${value.texto}<br>`).join("")}
        </p>
    `);
}
let construirLasCartas = async()=>{
    let peticion = await fetch(`${path}.json`);
    let res = await peticion.json();
    let seleccion = document.querySelector("#cart");
    seleccion.insertAdjacentHTML("beforeend",/*html*/`
        ${res.cartas.contenido.map((value)=> /*html*/`
        <div class="col">
            <div ${value.configcart}>
                <div class="card-header py-3 text-bg-danger border-danger rounded-0">
                    <h4 class="my-0 fw-normal">${value.titulo}</h4>
                </div>
                <div class="card-body">
                    <h1 class="card-title pricing-card-title">
                        ${value.precio}
                        <small class="text-body-secondary fw-light">
                        ${value.unidad}
                        </small>
                    </h1>
                    <ul class="list-unstyled mt-3 mb-4">
                    ${value.cont}
                    </ul>
                    <button type="button" ${value.configboton}>
                    ${value.boton}
                    </button>
                </div>
            </div>
        </div>
        `).join("")}
    `);
}
let construirLaTabla = async()=>{
    let peticion = await fetch(`${path}.json`);
    let res = await peticion.json();
    let seleccion = document.querySelector("#compare");
    seleccion.insertAdjacentHTML("beforeend",/*html*/`
        <h2 class="display-6 text-center mb-4">${res.tabla.texto1}</h2>
        <div class="table-responsive">
            <table class="table text-center">
                <thead>
                <tr>
                    <th style="width: 34%;"></th>
                    ${res.tabla.contenido.map((value)=> /*html*/`
                    <th style="width: 22%;" ${value.configtext}>${value.plan}</th>
                    `).join("")}
                </tr>
                </thead>
                <tbody>                   
                <tr>
                    <td scope="row" class="text-start ">${res.tabla.texto2}</td>
                    ${res.tabla.contenido.map((value)=> /*html*/`
                    <td scope="row" ${value.configtext}>${value.precio}</td>            
                    `).join("")}
                </tr>
                <tr>
                    <td scope="row" class="text-start">${res.tabla.texto3}</td>
                    ${res.tabla.contenido.map((value)=> /*html*/`
                    <td scope="row" ${value.configtext}>${value.calidad}</td>            
                    `).join("")}
                </tr>
                <tr>
                    <td scope="row" class="text-start">${res.tabla.texto4}</td>
                    ${res.tabla.contenido.map((value)=> /*html*/`
                    <td scope="row" ${value.configtext}>${value.resolucion}</td>            
                    `).join("")}
                </tr>
                <tr>
                    <td scope="row" class="text-start">${res.tabla.texto5}</td>
                    ${res.tabla.contenido.map((value)=> /*html*/`
                    ${value.img}
                    `).join("")}
                </tr>
                </tbody>
            </table>
        </div>
    `);
}
construirElEncabezado();
construirLasCartas();
construirLaTabla();
