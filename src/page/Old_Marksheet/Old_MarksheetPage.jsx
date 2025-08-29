import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Old_Marksheetpage.scss";

const Old_MarksheetPage = () => {
  const [selectedType, setSelectedType] = useState("old-faqunia-certificate");
  const navigate = useNavigate();

  // 🧑 Student Info
  const [studentInfo, setStudentInfo] = useState({
    name: "Arman Ali",
    fatherName: "Ashfaq Ali",
    dob: "2004-05-15",
    code: "MOT",
    rollNo: "2125",
    madrasa: "Madrsa Islamia Hanfia Washidganj ara Bhojpur",
    year: "2024",
  });

  // 📊 Result Info
  const [resultInfo, setResultInfo] = useState({
    status: "1st",
    optional: "English",
    publicationDate: "2024-07-01",
  });

  const handleInfoChange = (e) => {
    const { name, value } = e.target;
    setStudentInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleResultChange = (e) => {
    const { name, value } = e.target;
    setResultInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handlePreview = () => {
    navigate("/old-certificate-preview", {
      state: {
        examType: selectedType, // 🎯 exam type bhi bhejenge
        ...studentInfo,
        ...resultInfo,
      },
    });
  };

  return (
    <div className="page">
      {/* Tabs */}
      <div className="tabs">
        {[
          "old-faqunia-certificate",
          "old-molvi-certificate",
          "old-islamic-certificate",
        ].map((type) => (
          <button
            key={type}
            className={`tab ${selectedType === type ? "active" : ""}`}
            onClick={() => setSelectedType(type)}
          >
            {type
              .replace("old-", "Old-")
              .replace("-certificate", "")
              .replace("-", " ")}{" "}
            Certificate
          </button>
        ))}
      </div>

      <div className="container-old">
        {/* 🧑 Student Information */}
        <div className="section">
          <h3>🧑 Student Information</h3>
          {Object.entries(studentInfo).map(([key, value]) => (
            <div key={key} className="input-group">
              <label htmlFor={key}>
                {key
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (str) => str.toUpperCase())} :-
              </label>
              <input
                id={key}
                name={key}
                value={value}
                type={key === "dob" ? "date" : "text"}
                onChange={handleInfoChange}
              />
            </div>
          ))}
        </div>

        {/* 📊 Result Summary */}
        <div className="section">
          <h3>📊 Result Summary</h3>

          {/* Exam Type - readonly */}
          <div className="input-group">
            <label>Exam Type :-</label>
            <input type="text" value={selectedType} readOnly />
          </div>

          {/* Status Dropdown */}
          <div className="input-group">
            <label htmlFor="status">Status :-</label>
            <select
              id="status"
              name="status"
              value={resultInfo.status}
              onChange={handleResultChange}
            >
              <option value="1st">1st</option>
              <option value="2nd">2nd</option>
              <option value="3rd">3rd</option>
              <option value="fail">Fail</option>
            </select>
          </div>

          {/* Optional Subject + Publication Date */}
          {["optional", "publicationDate"].map((key) => (
            <div key={key} className="input-group">
              <label htmlFor={key}>
                {key
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (str) => str.toUpperCase())} :-
              </label>
              <input
                id={key}
                name={key}
                value={resultInfo[key]}
                type={key === "publicationDate" ? "date" : "text"}
                onChange={handleResultChange}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Preview Button */}
      <div className="button-wrapper">
        <button className="preview-btn" onClick={handlePreview}>
          👁️ Preview
        </button>
      </div>
    </div>
  );
};

export default Old_MarksheetPage;
