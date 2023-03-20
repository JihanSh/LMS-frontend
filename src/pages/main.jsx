import "./navbar.css";
import "./sidebar.css";
import student from "../assets/student.png";
import teacher from "../assets/teacher.png";
import attendance from "../assets/attendance.png";
import grade from "../assets/grade.jpeg";
import { Link } from "react-router-dom";
export default function Main() {
  return (
    <div className="main-container">

        <Link to="/students">
          <img className="student" src={student} />
        </Link>
        <img className="teacher" src={teacher} />
        <img className="attendance" src={attendance}/>
        <img className="grade" src={grade} />
     
    </div>
  );
}
