import { funçõesexportadas } from "./conectionAPI.js";
const lista = document.querySelector("[data-lista]");



listaVideos();

function constroiCard(video, titulo, imagem, descricao){
    lista.innerHTML += `
        <li class="videos__item">
        <iframe width="100%" height="72%" src=${video}
            title=${titulo} frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        <div class="descricao-video">
            <img src=${imagem} alt="logo canal alura">
            <h3>${titulo}</h3>
            <p>${descricao}</p>
        </div>
        </li>
    `;
}

async function listaVideos(){ //utilizando função importada
    const listaAPI = await funçõesexportadas.listaVideosDaAPI();
    listaAPI.forEach(element => {
        console.table(element)
        constroiCard(element.url, element.titulo, element.imagem, element.descricao);
    });
}