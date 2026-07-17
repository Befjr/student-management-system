import { deleteStudent } from "../services/studentService";

function StudentTable({ students, onStudentDeleted, onEdit }) {

    const handleDelete = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this student?"
        );

        if (!confirmDelete) return;

        try {

            await deleteStudent(id);

            onStudentDeleted();

        } catch (error) {
            console.error(error);
        }

    };

    return (

        <table className="table table-striped table-hover align-middle">

            <thead className="table-dark">

                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Department</th>
                    <th>Email</th>
                    <th className="text-center">Actions</th>
                </tr>

            </thead>

            <tbody>

                {students.length === 0 ? (

                    <tr>

                        <td colSpan="6" className="text-center p-5">

                            <h5>No Students Available</h5>

                            <p className="text-muted">
                                Click "Add Student" to create your first student.
                            </p>

                        </td>

                    </tr>

                ) : (

                    students.map((student) => (

                        <tr key={student.id}>

                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.department}</td>
                            <td>{student.email}</td>

                            <td className="text-center">

                                <button
                                    className="btn btn-outline-warning btn-sm me-2"
                                    onClick={() => onEdit(student)}
                                >
                                    ✏ Edit
                                </button>

                                <button
                                    className="btn btn-outline-danger btn-sm"
                                    onClick={() => handleDelete(student.id)}
                                >
                                    🗑 Delete
                                </button>

                            </td>

                        </tr>

                    ))

                )}

            </tbody>

        </table>

    );

}

export default StudentTable;