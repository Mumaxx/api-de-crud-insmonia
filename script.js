// Função para exibir/ocultar as telas dependendo da situação
function loginUser(event) {
    event.preventDefault();
    // Simulação de login com dados armazenados
    window.location.href = "estoque.html";
}

function logout() {
    window.location.href = "login.html";
}

function recuperarSenha(event) {
    event.preventDefault();
    alert("Link de recuperação enviado para seu email!");
    window.location.href = "login.html";
}

document.getElementById('loginForm')?.addEventListener('submit', loginUser);
document.getElementById('forgotPasswordForm')?.addEventListener('submit', recuperarSenha);

// Simulação de Adição/Alteração de Carro
let carros = JSON.parse(localStorage.getItem('carros')) || [];

function adicionarCarro() {
    const nome = document.getElementById('car-name').value;
    const modelo = document.getElementById('car-model').value;
    const preco = document.getElementById('car-price').value;
    const ano = document.getElementById('car-year').value;

    const novoCarro = { nome, modelo, preco, ano };
    carros.push(novoCarro);
    localStorage.setItem('carros', JSON.stringify(carros));
    alert("Carro adicionado com sucesso!");
    window.location.href = "estoque.html";
}

// Preenchendo a lista de carros na tela de Estoque
window.onload = function() {
    const carrosList = document.getElementById('carros-list');
    if (carrosList) {
        carros.forEach(carro => {
            const div = document.createElement('div');
            div.classList.add('carro-item');
            div.innerHTML = `
                <h3>${carro.nome}</h3>
                <p>Modelo: ${carro.modelo}</p>
                <p>Preço: R$ ${carro.preco}</p>
                <p>Ano: ${carro.ano}</p>
            `;
            carrosList.appendChild(div);
        });
    }
};
