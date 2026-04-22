import mongoose from 'mongoose';
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true  
    },
    email: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],  
        required: true
    }



});
const studentModel = mongoose.model('Student', studentSchema);
export default studentModel;