const API_URL = 'http://localhost:3000/clientes';

const form = document.getElementById('formCliente');
const lista = document.getElementById('listaClientes');

async function carregarClientes() {
  const response = await fetch(API_URL);
  const clientes = await response.json();

  lista.innerHTML = '';

  clientes.forEach(cliente => {
    const li = document.createElement('li');
    li.textContent = `${cliente.nome} - ${cliente.email}`;
    lista.appendChild(li);
  });
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;

  await fetch(API_URL, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ nome, email })
});

// 👇 ISSO FICA FORA DO FETCH
document.getElementById("formCliente").reset();

// 👇 ATUALIZA A LISTA
carregarClientes();

    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ nome, email })
  });

  form.reset();
  carregarClientes();
});

carregarClientes();
