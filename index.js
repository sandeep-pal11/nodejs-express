import express from 'express';
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('Hello, World!');  
});

app.get('/about', (req, res) => {
    res.render('about',{title: 'About Page', description: 'This is the about page.'});  
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
}); 

