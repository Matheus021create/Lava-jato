
document.addEventListener("DOMContentLoaded", () => {
  console.log("Site do Lava Jato carregado com sucesso!");

  const links = document.querySelectorAll("nav a");

  links.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const destino = document.querySelector(this.getAttribute("href"));
      destino.scrollIntoView({ behavior: "smooth" });
    });
  });
});
function mostrarServico(servico) {
  const numero = "351924708633";
  const dias = "Segunda a Sábado";
  const horarios = "das 08h às 18h";

  const mensagem = `Olá! Gostaria de agendar o serviço de *${servico}*. 
\nQuais os horários disponíveis para ${dias}, entre ${horarios}?`;

  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
  
  window.open(url, "_blank");
}