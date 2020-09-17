//Importação do express e mysql
const express = require('express');
const mysql = require('mysql');


//Instanciamento do express
const app = express();

//Criação da conexão com o banco utilizando o método createConnection
const connection = mysql.createConnection({
    host:'mysql-container', //IP do container ou o apelido caso seja criado um link
    user: 'root', // Usuário do banco
    password: 'Info.123', //Senha do banco
    database: 'leoviana00' //Nome da database
});

connection.connect();

// Criação da rota no express para responder quando for digitado o endereço /products

app.get('/products', function (req, res){
    //Faço o select de todos os produtos
    connection.query('SELECT * FROM products', function (error, results) {
        // Se der algum erro eu aborto
        if (error) {
            throw error
        };
        // Se der tudo certo eu passo o resultado com res.send
        res.send(results.map(item => ({ name: item.name, price: item.price}
            )));
    });
});

//A portana qual a aplicação estará ouvindo e respondendo
app.listen(9001, '0.0.0.0', function() {
    console.log('Listening on port 9001');
})