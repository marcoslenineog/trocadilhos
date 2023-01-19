// Função para chamar a API do OpenAI e gerar o trocadilho
function generateJoke() {
    // Obtendo o tema inserido pelo usuário
    var theme = document.getElementById("input_frase").value;
  
    // Configurando a chamada para a API do OpenAI com o tema inserido pelo usuário
    var settings = {
      "url": "https://api.openai.com/v1/engines/davinci-codex/completions",
      "method": "POST",
      "timeout": 0,
      "headers": {
        "Content-Type": "application/json",
        "Authorization": "Bearer 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"
      },
      "data": JSON.stringify({
        "prompt": "Crie um trocadilho infame sobre " + theme + " e que faça sentido como uma história, porém cômica",
        "max_tokens": 600
      }),
    };
  
    // Fazendo a chamada para a API e obtendo a resposta
    $.ajax(settings).done(function (response) {
      // Atualizando o texto dentro do modal com o trocadilho gerado
      document.getElementById("trocadilho").innerHTML = response.choices[0].text;
    });
  }
  
  // Abrir o modal quando o botão "Gerar trocadilho" é clicado
  function openModal() {
    document.getElementById("modal").style.display = "block";
  }
  
  // Fechar o modal quando o botão "Fechar" é clicado
  function closeModal() {
    document.getElementById("modal").style.display = "none";
  }
  
  // Adicionando eventos de clique aos botões "Gerar trocadilho" e "Fechar"
  document.getElementById("gerar-trocadilho").addEventListener("click", function() {
    if (document.getElementById("input_frase").value != "") {
      generateJoke();
      openModal();
    }
  });
  
  document.getElementById("fechar-modal").addEventListener("click", closeModal);
  
