import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route,Navigate} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import StudentList from './pages/students';
import Main from './pages/main';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LmsApp />
  </React.StrictMode>
);
export default function LmsApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Navigate to="main" />} />
          <Route path="main" element={<Main />} />
          <Route path="students" element={<StudentList />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
