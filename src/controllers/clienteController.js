const clientes = [];

exports.listarClientes = (req, res) => {
  res.json(clientes);
};

exports.criarCliente = (req, res) => {
  const cliente = req.body;
  clientes.push(cliente);
  res.status(201).json(cliente);
};
const clientes = [];

exports.listarClientes = (req, res) => {
  res.json(clientes);
};

exports.criarCliente = (req, res) => {
  const { nome, email } = req.body;

  if (!nome || !email) {
    return res.status(400).json({ erro: "Nome e email são obrigatórios" });
  }

  const cliente = { nome, email };
  clientes.push(cliente);

  res.status(201).json(cliente);
};
