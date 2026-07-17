import { useState, useEffect } from "react";
import { addStudent, updateStudent } from "../services/studentService";

function StudentForm({
    editingStudent,
    setEditingStudent,
    onStudentAdded
}) {

    const [student, setStudent] = useState({
        name: "",
        age: "",
        department: "",
        email: ""
    });

    useEffect(() => {

        if (editingStudent) {

            setStudent({
                name: editingStudent.name,
                age: editingStudent.age,
                department: editingStudent.department,
                email: editingStudent.email
            });

        }

    }, [editingStudent]);

    const handleChange = (e) => {

        setStudent({
            ...student,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            if (editingStudent) {

                await updateStudent(editingStudent.id, student);

                setEditingStudent(null);

            } else {

                await addStudent(student);

            }

            setStudent({
                name: "",
                age: "",
                department: "",
                email: ""
            });

            onStudentAdded();

        } catch (error) {

            console.error(error);

        }

    };

    return (

        <form onSubmit={handleSubmit}>

            <div className="row g-3">

                <div className="col-md-3">

                    <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        name="name"
                        value={student.name}
                        onChange={handleChange}
                        required
                    />

                </div>

                <div className="col-md-2">

                    <input
                        type="number"
                        className="form-control"
                        placeholder="Age"
                        name="age"
                        value={student.age}
                        onChange={handleChange}
                        required
                    />

                </div>

                <div className="col-md-3">

                    <input
                        type="text"
                        className="form-control"
                        placeholder="Department"
                        name="department"
                        value={student.department}
                        onChange={handleChange}
                        required
                    />

                </div>

                <div className="col-md-3">

                    <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        name="email"
                        value={student.email}
                        onChange={handleChange}
                        required
                    />

                </div>

                <div className="col-md-1 d-grid">

                    <button
                        type="submit"
                        className="btn btn-success"
                    >
                        {editingStudent ? "Update" : "Save"}
                    </button>

                </div>

            </div>

        </form>

    );

}

export default StudentForm;