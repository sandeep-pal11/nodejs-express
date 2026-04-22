import 'dotenv/config';
import express from 'express';
import connectDB from './config/db.js';
import indexRoutes from './routes/index.routes.js';
import studentRoutes from './routes/student.routes.js';

const app = express();

// Connect to Database
await connectDB();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));  
app.use(express.json());

// Routes
app.use('/', indexRoutes);
app.use('/api', studentRoutes); // Use the same routes for API endpoints

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 
