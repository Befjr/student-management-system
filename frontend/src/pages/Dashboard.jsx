import { useEffect, useState } from "react";
import StudentForm from "../components/StudentForm";
import StudentTable from "../components/StudentTable";
import { getStudents } from "../services/studentService";

function Dashboard() {

    const [students, setStudents] = useState([]);
    const [editingStudent, setEditingStudent] = useState(null);

    const loadStudents = async () => {
        try {
            const response = await getStudents();
            setStudents(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        loadStudents();
    }, []);

    return (
        <div className="container mt-5">

            <div className="text-center mb-5">
                <h1 className="fw-bold text-primary">
                    🎓 Student Management System
                </h1>

                <p className="text-muted">
                    Spring Boot • React • MySQL
                </p>
            </div>

            <div className="card shadow mb-4">

                <div className="card-header bg-primary text-white">
                    <h4>
                        {editingStudent ? "Update Student" : "Add Student"}
                    </h4>
                </div>

                <div className="card-body">

                    <StudentForm
                        editingStudent={editingStudent}
                        setEditingStudent={setEditingStudent}
                        onStudentAdded={loadStudents}
                    />

                </div>

            </div>

            <div className="card shadow">

                <div className="card-header bg-dark text-white">

                    <h4>
                        Students ({students.length})
                    </h4>

                </div>

                <div className="card-body">

                    <StudentTable
                        students={students}
                        onStudentDeleted={loadStudents}
                        onEdit={setEditingStudent}
                    />

                </div>

            </div>

        </div>
    );
}

export default Dashboard;