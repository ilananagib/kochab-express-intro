const express = require('express');

const app = express();
const PORT = 5000;

// req is request and res is response
//app.get('/', function (req, res) {
    //res.send('Hello World');
//})

app.use(express.static('server/public'));

app.get('/Hey', function (req, res) {
    res.send('Howdy');
})

app.listen(PORT, function () {
    console.log(`listening on port: ${PORT}`)
});

// to fix code: option + shift + f

