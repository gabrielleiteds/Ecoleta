//import 
const sqlite = require('sqlite3').verbose();

const db = new sqlite.Database("./src/database/database.db");

/*
db.serialize(() => {
    //criar tabela

    db.run(`
                CREATE TABLE IF NOT EXISTS places(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                image TEXT,
                name TEXT,
                address TEXT,
                address2 TEXT, 
                state TEXT,
                city TEXT,
                items TEXT
                );
            `)


    //inserir dados

    const query = ` INSERT INTO places (image, name, address, address2, state, city, items) VALUES (?,?,?,?,?,?,?); `
    const values = [
        "https://images.unsplash.com/photo-1542739674-b449a8938b59?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
        "Colectoria",
        "Guilherme Gemballa Jardim América",
        "nº 260",
        "Santa Catarina",
        "Rio do Sul",
        "Papeis e papelão"
    ]

    function insert(err) {
        if (err) {
            return console.log(err)
        }

        console.log("Cadastrado com sucesso");
        console.log(this)
    }

    //inserção de valor
    db.run(query, values, insert);


    //deletar usuario

    db.run(`DELETE FROM places WHERE id = ?`, [1], function (err) {
        if (err) {
            return console.log(err)
        }
        console.log('Registro deletado com sucesso!')
    });


    //selecionar tudo
    db.all(`select * from places`, function (err, rows) {
        if (err) {
            return console.log(err)
        }
        console.log("registros: ")
        console.log(rows);
    })
})
*/

module.exports = db; 