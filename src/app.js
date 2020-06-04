const express = require('express'); 
const nunjucks = require('nunjucks'); 

const app = express(); 


//arquivos css, img, etc. 
app.use(express.static("public"));

//config nunjucks
nunjucks.configure("src/views", {
    express: app,
    noCache: true
}); 

//rotas
app.get('/', (req, res) => {
    res.render('index.html')
})

app.get('/create-point', (req, res) => {
    res.render('create-point.html')
})

app.listen(3000);