// ************ Require's ************
const express = require ('express');
const { get } = require('http');
const path = require('path');
const productsRouter= require('./routes/products');

// ************ express() - (don't touch) ************
const app = express();

// ************ Middlewares - (don't touch) ************
app.use(express.static(publicPath))


// ************ Template Engine - (don't touch) ************
app.set("view engine", "ejs");
const publicPath= path.resolve(__dirname, "./public");

// ************ Sistema de Rutas ************
//const main = require('./routes/main');
//const products = require('./routes/products');

//app.use('/', main);
//app.use('/products', products)

app.get ('/', (req, res) => {
    let htmlPath = path.resolve(__dirname, './views/home.ejs');
    res.render (htmlPath)
})

app.get ('/register', (req, res) => {
    let htmlPath = path.resolve(__dirname, './views/users/register.ejs');
    res.render (htmlPath)
})

app.get('/carrito',(req, res) => {
    let htmlPath = path.resolve(__dirname, './views/carrito.ejs')
    res.render(htmlPath) })

app.get ('/product', productsRouter)

app.get ('/contact', (req, res) => {
    let htmlPath = path.resolve(__dirname, './views/contact.ejs');
     res.render (htmlPath)
})

app.get ('/login', (req, res) => {
    let htmlPath = path.resolve(__dirname, './views/users/login.ejs');
     res.render (htmlPath)
})
app.get ('/portafolio', (req, res) => {
    let htmlPath = path.resolve(__dirname, './views/portafolio.ejs');
     res.render (htmlPath)
})
app.get ('/diseno-web', (req, res) => {
    let htmlPath = path.resolve(__dirname, './views/products/diseno-web/diseno-web.ejs');
     res.render (htmlPath)
})

// ************ Creando servidor ************
app.listen (3500, () => console.log('Alta de servidor: http://localhost:3500'));