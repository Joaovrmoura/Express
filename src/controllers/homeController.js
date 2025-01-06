// renderizando meu index.ejs(index é o nome do script sem a extensão)
exports.paginaInicial = (req, res) => {
    res.render('index')
    return;
}
exports.trataPost = (req, res) =>{
    res.send(req.body)
}