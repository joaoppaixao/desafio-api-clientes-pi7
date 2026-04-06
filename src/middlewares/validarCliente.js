export const validarCliente = (req, res, next) => {
    const { nome, telefone, email } = req.body;

    if (!nome) {
        return res.status(400).json({
            erro: '[ERRO] O nome do cliente é obrigatório!'
        });
    };

    if (!telefone) {
        return res.status(400).json({
            erro: '[ERRO] O telefone do cliente é obrigatório!'
        });
    };

    if (!email) {
        return res.status(400).json({
            erro: '[ERRO] O email do cliente é obrigatório!'
        })
    }

    next();
}