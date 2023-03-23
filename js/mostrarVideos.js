import { funçõesexportadas } from "./conectionAPI.js";

const listacampo = document.querySelector("[data-lista]");


listaVideos();

function constroiCard(video, titulo, imagem, descricao){
    listacampo.innerHTML += `
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
    try{
        const listaAPI = await funçõesexportadas.listaVideosDaAPI();
        listaAPI.forEach(element => {
        console.table(element);
        constroiCard(element.url, element.titulo, element.imagem, element.descricao);});
    }
    catch{
       listacampo.innerHTML = `<h2 class="mensagem__titulo">Não foi possível carregar a lista de vídeo</h2>`;  
    }
}

export const funcaoMostrar = {
    constroiCard
}








