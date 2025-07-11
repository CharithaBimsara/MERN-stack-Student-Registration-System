// src/Components/create-student.component.js

// CreateStudent Component for add new student
// Import Modules
import React,
{
    useState,
    useEffect
} from "react";
import axios from 'axios';
import StudentForm
    from "./StudentForm";

// CreateStudent Component
const CreateStudent = () => {
    const [formValues, setFormValues] =
        useState(
            {
                name: '',
                email: '',
                rollno: ''
            })
    // onSubmit handler
    const onSubmit =
        studentObject => {
            axios.post('http://localhost:4000/students', studentObject)
                .then(res => {
                    if (res.status === 201)
                        alert('Student successfully created')
                    else
                        Promise.reject()
                })
                .catch(err => {
                    console.error('POST error:', err);
                    alert('Something went wrong. Check console for details.');
                });
        }

    // Return student form
    return (
        <StudentForm initialValues={formValues}
            onSubmit={onSubmit}
            enableReinitialize>
            Create Student
        </StudentForm>
    )
}

// Export CreateStudent Component
export default CreateStudent
