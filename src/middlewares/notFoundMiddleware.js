export const notFound = (req, res, next) => {
        res.status(404).json({
            erro: '[ERRO] Rota não encontrada!'
        })
}