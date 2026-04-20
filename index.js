import express from 'express';
const app = express();

import mongoose from 'mongoose';   
import contactModel from './models/contacts.models.js';

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));  

//database connection

mongoose.connect('mongodb://127.0.0.1:27017/myapp').then(() => 
    console.log('Connected to MongoDB'));
  


app.get('/', (req, res) => {
    res.send('Hello, World!');  
});

app.get('/about', (req, res) => {
    res.render('about',{title: 'About Page', description: 'This is the about page.'});  
});

app.get('/form', (req, res) => {
    res.render('form');  
}); 


app.post('/form', async (req, res) => {
    try {
        const { name, email, phone } = req.body;
        const newContact = new contactModel({ name, email, phone });
        await newContact.save();
        res.redirect('/form'); // Redirect back to form or to a success page
    } catch (error) {
        console.error("Error saving contact:", error);
        res.status(500).send("Error saving data");
    }
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
}); 

