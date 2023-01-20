// Declare sua API Key como uma variável global
const apiKey = process.env.API_KEY;

// Função para chamar a API do OpenAI e gerar o trocadilho
async function generateJoke(topic) {
  try {
    // Utilizando o Fetch API para fazer a chamada à API do OpenAI
    const response = await fetch(`https://api.openai.com/v1/engines/davinci/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        prompt: `Crie um trocadilho infame sobre ${topic} e que faça sentido como uma história, porém cômica.`,
        max_tokens: 600
      })
    });
    // Convertendo a resposta para JSON
    const data = await response.json();
    // Recuperando o trocadilho gerado
    const joke = data.choices[0].text;
    // Atualizando o texto dentro do modal com o trocadilho gerado
    document.getElementById("trocadilho").innerHTML = joke;
  } catch (err) {
    console.error(err);
  }
}

// Função para abrir o modal
function showModal() {
  // Recuperando o valor do campo de texto com o tópico
  const topic = document.getElementById("topic").value;
  // Validando se o campo de texto foi preenchido
  if (topic) {
    // Abrindo o modal
    document.getElementById("modal").style.display = "block";
    // Gerando o trocadilho
    generateJoke(topic);
  }
}

// Função para fechar o modal
function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// Adicionando eventos de clique aos botões "Gerar trotrocadilho" e "Fechar"
document.getElementById("gerar-trocadilho").addEventListener("click", showModal);
document.getElementById("close-modal").addEventListener("click", closeModal);

// Adicionando evento de tecla "Enter" para o campo de texto com o tópico
document.getElementById("topic").addEventListener("keyup", function(event) {
event.preventDefault();
if (event.keyCode === 13) {
document.getElementById("gerar-trocadilho").click();
}
});
