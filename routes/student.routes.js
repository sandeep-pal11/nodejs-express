import express from 'express';
import studentModel from '../models/student.model.js';

const router = express.Router();


// Get all students
router.get('/students', async (req, res) => {
    try {
        const students = await studentModel.find();
        res.json(students);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//update student by id
router.put('/students/:id', async (req, res) => {       
    try {
        const student = await studentModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.json(student);  } catch (error) {
        res.status(400).json({ message: error.message });
    } });

// Delete student by id
router.delete('/students/:id', async (req, res) => {
    try {
        const student = await studentModel.findByIdAndDelete(req.params.id);
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.json({ message: 'Student deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }});

// Create a new student
router.post('/students', async (req, res) => {
    const { name, email, age, gender } = req.body;
    const newStudent = new studentModel({ name, email, age, gender });
    try {
        const savedStudent = await newStudent.save();
        res.status(201).json(savedStudent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

export default router;
