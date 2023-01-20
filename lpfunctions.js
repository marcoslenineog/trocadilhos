// Declare sua API Key como uma variável global
const apiKey = process.env.API_KEY;


    
     function showModal() {
  // Verifica se o input esta preenchido
  if (document.getElementById("input_frase").value === "") {
    alert("Por favor, preencha o campo com o tema desejado");
    return;
  }
  // Exibe o modal
  var modal = document.getElementById("modal");
  modal.style.display = "block";

  // Chama a API da OpenAI para gerar o trocadilho
  var input_frase = document.getElementById("input_frase").value;
  var settings = {
    async: true,
    crossDomain: true,
    url: "https://api.openai.com/v1/engines/davinci-codex/completions",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer ${apiKey}"
    },
    processData: false,
    data: JSON.stringify({
      "prompt": "Trocadilho: " + input_frase,
      "max_tokens": 20,
      "stop": "."
    })
  }
  $.ajax(settings).done(function (response) {
    // Exibe o trocadilho no modal
    document.getElementById("modal-text").innerHTML = response.choices[0].text;
  });
}

// Fecha o modal
function closeModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "none";
}
