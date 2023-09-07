window.addEventListener("scroll", function () {
  var linkVoltarAoTopo = document.querySelector(".voltar-ao-topo");
  if (window.scrollY > 200) {
    // Exibe o link quando a rolagem for maior que 200 pixels
    linkVoltarAoTopo.style.display = "block";
  } else {
    linkVoltarAoTopo.style.display = "none";
  }
});