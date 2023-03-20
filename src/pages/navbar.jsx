import "./navbar.css";
import "./sidebar.css";
import { useState } from "react";
import Calendar from "react-calendar";
import Cap from "../assets/download.png";
import calendar from "../assets/calender.png";


function Navbar() {
  const [popup, setPopup] = useState();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const toggleCalendar = () => setPopup(!popup);
  return (
    <div className="container">
        <aside className="sidebar">
          <img className="sidebar-img" src={Cap}></img>
        </aside>
        <div className="main-section">
          <nav className="navbar">
            <div className="title">
              <h1 className="dash">Dashboard</h1>
            </div>
            <div>
              <img
                className="calendar-img"
                src={calendar}
                onClick={toggleCalendar}
              />
              {popup && (
                <Calendar onChange={handleDateChange} value={selectedDate} />
              )}
            </div>
          </nav>
        </div>
    </div>
  );
}
export default Navbar;
