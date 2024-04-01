document.addEventListener('DOMContentLoaded', function() {
    // Função para lidar com o envio do formulário
    function handleSubmit(event) {
      event.preventDefault(); // Impede o envio padrão do formulário
  
      // Obter o valor do campo de entrada
      var answer = document.getElementById('question').value;
  
      // Verificar se a resposta está correta
      if (answer.toLowerCase() === 'brasília') {
        alert('Resposta correta!');
      } else {
        alert('Resposta incorreta. Tente novamente.');
      }
    }
  
    // Adicionar um ouvinte de evento para o envio do formulário
    document.getElementById('question-form').addEventListener('submit', handleSubmit);
  });
  