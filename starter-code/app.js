const express = require('express');
const app = express();

app.use(express.static('public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

app.get('/', (req, res, next) => {
    res.render('home')
});

app.get('/about', (req, res, next) => {
    res.render('about')
});

app.get('/photos', (req, res, next) => {
    res.render('gallery')
});

app.listen(3000, () => {
    console.log('My first app listening on port 3000!')
  });