function copiarTexto(id) {
  const texto = document.getElementById(id).innerText;

  navigator.clipboard.writeText(texto)
    .then(() => {
      alert("Prompt copiado com sucesso!");
    })
    .catch(() => {
      alert("Erro ao copiar o texto.");
    });
}