import express from 'express';
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));  


app.get('/', (req, res) => {
    res.send('Hello, World!');  
});

app.get('/about', (req, res) => {
    res.render('about',{title: 'About Page', description: 'This is the about page.'});  
});

app.get('/form', (req, res) => {
    res.render('form');  
}); 









app.listen(3000, () => {
    console.log('Server is running on port 3000');
}); 

