import contactModel from '../models/contacts.models.js';

export const renderHome = (req, res) => {
    res.send('Hello, World!');  
};

export const renderAbout = (req, res) => {
    res.render('about', { title: 'About Page', description: 'This is the about page.' });  
};

export const renderForm = (req, res) => {
    res.render('form');  
}; 

export const submitForm = async (req, res) => {
    try {
        const { name, email, phone } = req.body;
        const newContact = new contactModel({ name, email, phone });
        await newContact.save();
        res.redirect('/form'); // Redirect back to form or to a success page
    } catch (error) {
        console.error("Error saving contact:", error);
        res.status(500).send("Error saving data");
    }
};
