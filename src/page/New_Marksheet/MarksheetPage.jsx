import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MarksheetPage.scss";
import {total_Number_Words, getDivisionFromMarks, getStatusFromMarks} from "../../utils/helper";

const MarksheetPage = () => {
  const [selectedType, setSelectedType] = useState("art");
  const navigate = useNavigate();

  // 🎯 Student Info State (Only personal info)
  const [studentInfo, setStudentInfo] = useState({
    msNo: "MS123456",
    year: "2024",
    name: "Arman Ali",
    fatherName: "Ashfaq Ali",
    motherName: "Saira Bano",
    registrationNo: "REG-2024-0123",
    rollNo: "Bt-2125",
    madrasa: "Madrsa Islamia Hanfia Washidganj ara Bhojpur",
    dob: "2004-05-15",
  });

  // 🎯 Result Info State (moved separately)
  const [resultInfo, setResultInfo] = useState({
    status: "PASS",
    division: "FIRST",
    total: 500,
    totalInWords: "Four Hundred Fifty",
    publicationDate: "2024-07-01",
  });

  // 🎯 Subject State
  const [subjectData, setSubjectData] = useState({
    examType: "",
    compulsory: [],
    optional: [],
  });

  const getSubjectPlaceholders = (type) => {
    if (type === "art") {
      return {
        examType: "molvi_art",
        compulsory: [
          "Diniyat_Paper-I", "Diniyat_Paper-II", "Sociology", "History",
          "Urdu", "Tarikh-E-Islam", "Political Science"
        ],
        optional: ["English", "Hindi", "Persian"],
      };
    }
    if (type === "science") {
      return {
        examType: "molvi_science",
        compulsory: ["Diniyat_Paper-I", "Diniyat_Paper-II", "Arabic", "Urdu", "Physics_Theory", "Physics_Pract", "Chemistry_Theory", "Chemistry_Pract"],
        optional: ["Biology_Theory", "Biology_Pract", "English/Hindi/Persian"],
      };
    }
    return {
      examType: "molvi_islamic",
      compulsory: [
        "Diniyat_Paper-I", "Diniyat_Paper-II", "Diniyat_Paper-III","Total_Diniyat",
        "Arabic", "Urdu", "Tarikh-E-Islam", "IsLamicPol.&ECO"
      ],
      optional: ["English/Hindi/Persian"],
    };
  };

  useEffect(() => {
    const { examType, compulsory, optional } = getSubjectPlaceholders(selectedType);
    setSubjectData({
      examType,
      compulsory: compulsory.map((name) => ({ name, marks: "" })),
      optional: optional.map((name) => ({ name, marks: "" })),
    });
  }, [selectedType]);

  const handleInfoChange = (e) => {
    const { name, value } = e.target;
    setStudentInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleResultChange = (e) => {
    const { name, value } = e.target;
    setResultInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleMarksChange = (type, index, value) => {
    setSubjectData((prev) => {
      const updated = [...prev[type]];
      updated[index].marks = value;
      return { ...prev, [type]: updated };
    });
  };

  const handlePreview = () => {
    navigate("/molvi-certificate-preview", {
      state: {
        ...studentInfo,
        ...resultInfo,
        subjects: subjectData,
      },
    });
  };

 // ...imports and component setup remain same...

return (
  <div className="page">
    {/* Tabs */}
    <div className="tabs">
      {["art", "science", "islamic"].map((type) => (
        <button
          key={type}
          className={`tab ${selectedType === type ? "active" : ""}`}
          onClick={() => setSelectedType(type)}
        >
          Maulvi - {type.charAt(0).toUpperCase() + type.slice(1)}
        </button>
      ))}
    </div>

    <div className="container">
      {/* 🧑 Student Information */}
      <div className="section">
        <h3>🧑 Student Information</h3>
        {Object.entries(studentInfo).map(([key, value]) => (
          <div key={key} className="input-group">
            <label htmlFor={key}>
              {key.replace(/([A-Z])/g, " $1").replace(/^./, str => str.toUpperCase())} :-
            </label>
            <input
              id={key}
              name={key}
              value={value}
              type={key === "dob" ? "date" : "text"}
              onChange={handleInfoChange}
              placeholder="placeholder"
            />
          </div>
        ))}
      </div>

      {/* 📊 Result Summary */}
      <div className="section">
        <h3>📊 Result Summary</h3>
        <div className="input-group">
          <label htmlFor="status">Status :-</label>
          <select name="status" id="status" value={resultInfo.status} onChange={handleResultChange}>
            <option value="">Select Status</option>
            <option value="PASS">PASS</option>
            <option value="FAIL">FAIL</option>
          </select>
        </div>

        {["division","total", "totalInWords", "publicationDate"].map((key) => (
          <div key={key} className="input-group">
            <label htmlFor={key}>
              {key.replace(/([A-Z])/g, " $1").replace(/^./, str => str.toUpperCase())} :-
            </label>
            <input
              id={key}
              name={key}
              value={resultInfo[key]}
              type={key === "publicationDate" ? "date" : "text"}
              onChange={handleResultChange}
              placeholder="placeholder"
            />
          </div>
        ))}
      </div>

      {/* 📚 Subjects & Marks */}
      <div className="section subjects">
        <h3>📚 Subjects & Marks</h3>

        {subjectData.compulsory.map((subject, idx) => (
          <div key={`c-${idx}`} className="subject-row">
            <label>{subject.name}</label>
            <input
              type="text"
              placeholder="Marks"
              value={subject.marks}
              onChange={(e) => handleMarksChange("compulsory", idx, e.target.value)}
            />
          </div>
        ))}

        {subjectData.optional.length > 0 && (
          <>
            <h4>Optional Subjects</h4>
            {subjectData.optional.map((subject, idx) => (
              <div key={`o-${idx}`} className="subject-row">
                <label>{subject.name}</label>
                <input
                  type="text"
                  placeholder="Marks"
                  value={subject.marks}
                  onChange={(e) => handleMarksChange("optional", idx, e.target.value)}
                />
              </div>
            ))}
          </>
        )}
      </div>
    </div>

    {/* Preview Button */}
    <div className="button-wrapper">
      <button className="preview-btn" onClick={handlePreview}>👁️ Preview</button>
    </div>
  </div>
 );

};

export default MarksheetPage;
