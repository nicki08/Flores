/*onload = () =>{
    document.body.classList.remove("container");
};
*/
onload = () => {
    document.body.classList.remove("container");

    const audio = document.getElementById("bg-music");
    const urlParams = new URLSearchParams(window.location.search);

    // Si viene desde el botón "CLICK AQUÍ", reproduce el audio
    if (urlParams.get("play") === "true" && audio) {
        audio.play().catch(error => {
            console.log("El navegador bloqueó el audio:", error);
        });
    }
};