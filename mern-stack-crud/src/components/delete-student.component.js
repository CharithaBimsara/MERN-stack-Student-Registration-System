import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const DeleteStudent = () => {
    const { id } = useParams(); // Get student ID from URL
    const navigate = useNavigate(); // For navigation

    // Handle delete
    const handleDelete = () => {
        axios
            .delete(`http://localhost:4000/students/${id}`)
            .then((res) => {
                if (res.status === 200) {
                    alert("Student successfully deleted");
                    navigate("/student-list"); // Navigate to the student list after deletion
                } else {
                    alert("Something went wrong. Please try again.");
                }
            })
            .catch((err) => {
                console.error("Delete error:", err); // More specific logging
                alert("Something went wrong. Please check the console for errors.");
            });
    };

    return (
        <div>
            <h2>Are you sure you want to delete this student?</h2>
            <button onClick={handleDelete} className="btn btn-danger">
                Delete
            </button>
            <button
                onClick={() => navigate("/student-list")}
                className="btn btn-secondary"
            >
                Cancel
            </button>
        </div>
    );
};

export default DeleteStudent;
