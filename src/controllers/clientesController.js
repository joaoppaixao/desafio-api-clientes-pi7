let usuarios = []
let id = 1


export const getCliente = (req, res) => {
    return res.json(usuarios);
}


export const getClientePorId = (req, res) => {
    const { id } = req.params;

    const usuario = usuarios.findLast(u => u.id == id);

    if (!usuario) {
        return res.status(404).json({
            erro: "[ERRO] Cliente não encontrado!"
        })
    }

    return res.json(usuario);
}


export const postCliente = (req, res) => {
    const { nome, telefone, email } = req.body;

    const novoCliente = {
        id: id++,
        nome,
        telefone,
        email
    }

    usuarios.push(novoCliente);

    return res.status(201).json({
        mensagem: "Usuário criado com sucesso!", novoCliente
    })
}


export const putCliente = (req, res) => {
    const { id } = req.params;
    const { nome, telefone, email } = req.body;

    const index = usuarios.findIndex(u => u.id == id);

    if (index === -1) {
        return res.status(404).json({
            erro: "[ERRO] Cliente não encontrado!"
        })
    }

    usuarios[index] = {
        ...usuarios[index],
        nome,
        telefone,
        email
    };

    return res.status(200).json(usuarios[index]);
}


export const deleteCliente = (req, res) => {
    const { id } = req.params;

    const index = usuarios.findIndex(u => u.id == id);

    if (index === -1) {
        return res.status(404).json({
            erro: "[ERRO] Cliente não encontrado!"
        })
    }

    usuarios.splice(index, 1);

    return res.status(204).send();
}