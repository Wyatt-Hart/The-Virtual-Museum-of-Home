//Dependencies
const express = require('express');
const path = require('path');
const methodOverride = require('method-override');

//CONFIGURATION
require('dotenv').config();
const PORT = process.env.PORT || 5001;
const app = express();
const cors = require('cors');

app.use(cors());

//Middleware & Express Settings
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.engine('jsx', require('express-react-views').createEngine());

//Controllers & Routes
app.use('/exhibits', require('../controllers/exhibits'));
app.use('/users', require('../controllers/users'));

//GET /
app.get('/', (req, res) => {
    res.render('home')

});

app.get('*', (req, res) => {
    res.render('error404')
});

//Listen for Connections
app.listen(process.env.PORT, function (){
    console.log("I LIVE AGAIN!")
});