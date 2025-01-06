require('dotenv').config()
const express = require('express');
const app = express();


const mongoose = require('mongoose');
// conexão com mongoDB
mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        console.log('Conectado a base');
        app.emit('ready')
    })
    .catch(e => console.log(e, 'Erro de conexão'))


const routes = require('./routes')
const { middlewareGlobal, outroMiddleware } = require('./src/middlewares/middleware')
// caminho absoluto
const path = require('path');
app.use(express.urlencoded({ extended: true }))

//conteúdo estático
app.use(express.static(path.resolve(__dirname, 'public')))
// caminho absoluto(pode ser o caminho relativo EX: ./src/views)
app.set('views', path.resolve(__dirname, 'src', 'views'))

// engine que vai renderizar a view
app.set('view engine', 'ejs')
// arquivo para controle de requisições(podemos pegar dados e criar sessions)
app.use(middlewareGlobal)
app.use(outroMiddleware)
app.use(routes)

app.on('ready', () => {
    app.listen(3000, () => {
        console.log('Servidor rodando em http://localhost:3000');
    });
})
