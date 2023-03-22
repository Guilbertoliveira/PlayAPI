import { funçõesexportadas } from "./conectionAPI.js";
const form = document.querySelector('[data-formulario]');

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    submitVideo();

})

async function submitVideo(){
  const url =   document.querySelector('[data-url]').value;
   const titulo =  document.querySelector('[data-titulo]').value;
   const imagem =  document.querySelector('[data-imagem]').value;
   const descricao = Math.floor(Math.random()*10).toString();

   await funçõesexportadas.criaVideo(titulo, descricao, url, imagem);

   window.location.href = "../pages/envio-concluido.html"; //indo para outra pagina via javascript
}

