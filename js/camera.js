const botaoIniciarCamera = document.querySelector('[data-video-botao]');
const campoCamera = document.querySelector('[data-camera]');
const video = document.querySelector('[data-video]');
const botaoTirarFoto = document.querySelector('[data-tirar-foto]');
const videoCanvas = document.querySelector('[data-video-canvas]');
const mensagem = document.querySelector('[data-mensagem]');
const enviarFotoEAbrirConta = document.querySelector('[data-enviar]');

let imagemURL = "";

botaoIniciarCamera.addEventListener("click", async function () {
    const iniciarVideo = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });

    botaoIniciarCamera.style.display = "none";
    campoCamera.style.display = "block";

    video.srcObject = iniciarVideo;
})

botaoTirarFoto.addEventListener("click", function () {
    videoCanvas.getContext('2d').drawImage(video, 0, 0, videoCanvas.width, videoCanvas.heigth);

    imagemURL = videoCanvas.toDataURL('image/jpeg');

    campoCamera.style.display = "none";
    mensagem.style.display = "block";
})

enviarFotoEAbrirConta.addEventListener("click", function () {
    const receberDados = localStorage.getItem("cadastro");
    const dadosRecebidosConvertidos = JSON.parse(receberDados);

    dadosRecebidosConvertidos.imagem = imagemURL;

    localStorage.setItem("cadastro", JSON.stringify(dadosRecebidosConvertidos));

    window.location.href = '../pages/abrir-conta-form-3.html';

})
