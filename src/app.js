const express = require('express'); 
const nunjucks = require('nunjucks'); 
const db = require('./database/db'); //database

const app = express(); 


//arquivos css, img, etc. 
app.use(express.static("public"));

//habilitação do req.body
app.use(express.urlencoded({extended: true}))

//config nunjucks
nunjucks.configure("src/views", {
    express: app,
    noCache: true
}); 

/*  Rotas  */

//home
app.get('/', (req, res) => {
    res.render('index.html')
})

//pagina de cadastro
app.get('/create-point', (req, res) => {
    res.render('create-point.html')
})

//cadastro de ponto de coleta
app.post('/savepoint', (req, res) => {
    const query = ` INSERT INTO places (image, name, address, address2, state, city, items) VALUES (?,?,?,?,?,?,?); `
    const values = [
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items,
    ]

    function insert(err) {
        if (err) {
            return console.log(err)
        }

        console.log("Cadastrado com sucesso");
        console.log(this)

        res.render("create-point.html", { saved: true })
    }

    db.run(query, values, insert);
})

app.get('/search', (req, res) => {

    const search = req.query.search; 

    if(search == "") {
        return res.render('search-results.html', {total: 0})

    }

    //pegando os dados
    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err, rows) 
    {
        if(err) {
            return console.log(err)
        }

        const total = rows.length;
        
        res.render('search-results.html', {places: rows, total: total})
    })
})

const PORT = process.env.PORT || 3000; 
app.listen(PORT);