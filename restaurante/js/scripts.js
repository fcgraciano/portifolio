  // Validação de formulário
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    if (!name || !email || !message) {
        event.preventDefault();
        alert('Por favor, preencha todos os campos.');
    }
});

// Mostrar data e hora atual no cabeçalho
function updateDateTime() {
    const now = new Date();
    const formattedDate = now.toLocaleDateString('pt-BR');
    const formattedTime = now.toLocaleTimeString('pt-BR');
    document.getElementById('currentDateTime').innerText = `${formattedDate}, ${formattedTime}`;
}
updateDateTime();
setInterval(updateDateTime, 1000); // Atualiza a cada segundo