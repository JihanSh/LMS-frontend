import React, { useState } from "react";
import "./student.css";
import studentp from "../assets/profile1.png";

const initialStudents = [
  { fname: "Ji", lname: "Shamas", image: studentp },
  { fname: "Layla", lname: "Hbb", image: studentp },
  { fname: "omar", lname: "banat", image: studentp },
  { fname: "Maya", lname: "attieh", image: studentp },
  { fname: "mgo", lname: "yeghiaian", image: studentp },
  { fname: "Maya", lname: "hbb", image: studentp },
];

const StudentList = () => {
  
  const [students, setStudents] = useState(initialStudents);
  const [newStudent, setNewStudent] = useState({
    fname: "",
    lname: "",
    image: "",
  });
  const handleAddStudent = () => {
    const newId = students.length + 1;
    const newStudentObj = { ...newStudent, id: newId };
    setStudents([...students, newStudentObj]);
    setNewStudent({ fname: "", lname: "", image: "" });
  };
  const handleDeleteStudent = (id) => {
    const updatedStudents = students.filter((student) => student.id !== id);
    setStudents(updatedStudents);
  };

  return (
    <div>
      <div>
        <h2>Add a new student:</h2>
        <div className="add-student">

          <label>
            First Name:
            <input
              type="text"
              value={newStudent.fname}
              onChange={(e) =>
                setNewStudent({ ...newStudent, fname: e.target.value })
              }
            />
          </label>
        </div>
        <div>
          <label>
            Last Name:
            <input
              type="text"
              value={newStudent.lname}
              onChange={(e) =>
                setNewStudent({ ...newStudent, lname: e.target.value })
              }
            />
          </label>
        </div>
        <div>
          <label>
            Image:
            <input
              type="text"
              value={newStudent.image}
              onChange={(e) =>
                setNewStudent({ ...newStudent, image: e.target.value })
              }
            />
          </label>
        </div>
        <button onClick={handleAddStudent}>Add Student</button>
      </div>
      <div className="student-list">
        {students.map((student) => (
          <div key={student.id}>
            <h2>
              {student.fname} {student.lname}
            </h2>
            <img
              src={student.image}
              alt={`${student.fname} ${student.lname}`}
            />
            <button onClick={() => handleDeleteStudent(student.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentList;
