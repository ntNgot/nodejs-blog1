const path = require('path')
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');

const app = express();
const port = 300;

//HTTP Logger
app.use(morgan('combined'));

//Template engine
app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, 'resources/views'))

console.log("Path: " + path.join(__dirname, 'resources/views'));

app.get('/tin-tuc', (req, res) => {
    res.render('home');
})
app.listen(port, () => {
    console.log(`example app listening on port ${port}`);
})