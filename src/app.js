const express = require('express'); 
const nunjucks = require('nunjucks'); 
const db = require('./database/db'); //database

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

app.get('/search', (req, res) => {

    //pegando os dados
    db.all(`SELECT * FROM places`, function(err, rows) {
        if(err) {
            return console.log(err)
        }

        const total = rows.length;
        
        res.render('search-results.html', {places: rows, total: total})
    })
})

app.listen(3000);