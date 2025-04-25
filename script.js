// Script para exibir e esconder o botão de voltar ao topo
window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.getElementById("scrollTopBtn").style.display = "block";
    } else {
        document.getElementById("scrollTopBtn").style.display = "none";
    }
};

document.getElementById("scrollTopBtn").onclick = function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
};
