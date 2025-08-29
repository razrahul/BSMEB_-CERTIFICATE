// src/pages/Student.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Student = () => {
  const [regNo, setRegNo] = useState('');
  const [studentData, setStudentData] = useState(null);
  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/result/${regNo}`);
      const data = await res.json();
      setStudentData(data);
    } catch (err) {
      console.error('Error fetching student:', err);
      setStudentData(null);
    }
  };

  const handlePrintMarksheet = () => {
    navigate('/marksheet', { state: { data: studentData } });
  };

  return (
    <div style={{textAlign: 'center'}}>
      <h2>Student Preview Page</h2>
      <input
        type="text"
        placeholder="Enter Registration No"
        value={regNo}
        onChange={(e) => setRegNo(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {studentData && (
        <div style={{ marginTop: '20px' }}>
          <h3>Student Preview:</h3>
          <p><strong>Roll NO:</strong> {studentData.RollNo}</p>
          <p><strong>Reg NO:</strong> {studentData.Rgn}</p>
          <p><strong>Name:</strong> {studentData.name}</p>
          <p><strong>Father's Name:</strong> {studentData.Father}</p>
          <p><strong>Mother's Name:</strong> {studentData.Mother}</p>
          <p><strong>Madarsa:</strong> {studentData.Madrasa}</p>
          <p><strong>Total Mark:</strong> {studentData.TotMs}</p>
          <p><strong>Grade:</strong> {studentData.Res}</p>

          <button onClick={handlePrintMarksheet}>Print Marksheet</button>
        </div>
      )}
    </div>
  );
};

export default Student;

