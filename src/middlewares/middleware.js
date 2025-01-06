// todas as requisições da página passam por aqui
// pode ser exportado assim :  module.exports
exports.middlewareGlobal = (req, res, next) => {
    console.log('middleware global');
    next()
}
exports.outroMiddleware = (req, res, next) => {
    console.log('Posso ter mais de um middleware sou o 2º');
    next()
}