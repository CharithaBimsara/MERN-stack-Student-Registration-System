import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import StudentForm from "./StudentForm";

const EditStudent = () => {
    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        rollno: "",
    });

    const { id } = useParams();       // ✅ Get ID from URL
    const navigate = useNavigate();   // ✅ For navigation

    // Handle submit
    const onSubmit = (studentObject) => {
        axios
            .put(`http://localhost:4000/students/${id}`, studentObject)
            .then((res) => {
                if (res.status === 200) {
                    alert("Student successfully updated");
                    navigate("/student-list");
                } else Promise.reject();
            })
            .catch(() => alert("Something went wrong"));
    };

    // Load data on mount
    useEffect(() => {
        axios
            .get(`http://localhost:4000/students/${id}`)  // ✅ corrected endpoint
            .then((res) => {
                const { name, email, rollno } = res.data;
                setFormValues({ name, email, rollno });
            })
            .catch((err) => console.log(err));
    }, [id]);

    return (
        <StudentForm
            initialValues={formValues}
            onSubmit={onSubmit}
            enableReinitialize>
            Update Student
        </StudentForm>
    );
};

export default EditStudent;
