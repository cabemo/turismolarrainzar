const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('views engine', 'ejs');
app.set('views', 'views');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', (req, res) => {
    res.render('index.ejs');
});

const port = 3000 || process.env.PORT

console.log(`Connecting to port ${port}`)
app.listen(port);