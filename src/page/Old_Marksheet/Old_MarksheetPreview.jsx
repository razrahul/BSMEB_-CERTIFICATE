import { useLocation, useNavigate } from "react-router-dom";
import "./Old_MarksheetPriview.scss";

const Old_MarksheetPreview = () => {
  const { state: data } = useLocation();
  const navigate = useNavigate();

  if (!data) {
    return <div className="no-data-found">No data found</div>;
  }

  const handlePrint = () => {
    // Exam type ke hisaab se alag route
    if (data.examType === "old-faqunia-certificate") {
      navigate("/old-faq-certificate-print", { state: { data } });
    }
    if (data.examType === "old-molvi-certificate") {
      navigate("/old-molvi-certificate-print", { state: { data } });
    }
    if (data.examType === "old-islamic-certificate") {
      navigate("/old-islamic-print", { state: { data } });
    }
  };

  const safeText = (val) => (val ? val.toUpperCase() : "");

  return (
    <div className="Old_MarksheetPreview-preview">
      <h2>📄 Certificate Preview: {safeText(data.examType)}</h2>

      <div className="main-section">
        {/* 🧑 Student Info Section */}
        <div className="section">
          <h3>🧑 Student Information</h3>
          <p><strong>Year:</strong> {data.year}</p>
          <p><strong>Name:</strong> {data.name}</p>
          <p><strong>Father's Name:</strong> {data.fatherName}</p>
          <p><strong>Roll Code:</strong> {data.code}</p>
          <p><strong>Roll No:</strong> {data.rollNo}</p>
          <p><strong>Madrasa:</strong> {data.madrasa}</p>
          <p><strong>Date of Birth:</strong> {data.dob}</p>
        </div>

        {/* 📊 Result Summary Section */}
        <div className="section">
          <h3>📊 Result Summary</h3>
          <p><strong>Exam Type:</strong> {data.examType}</p>
          <p><strong>Status:</strong> {data.status}</p>
          <p><strong>Optional Subject:</strong> {data.optional}</p>
          <p><strong>Date of Publication:</strong> {data.publicationDate}</p>
        </div>
      </div>

      {/* 🔘 Buttons */}
      <div className="actions">
        <button onClick={() => navigate(-1)}>🔙 Go Back</button>
        <button onClick={handlePrint}>🖨️ Print</button>
      </div>
    </div>
  );
};

export default Old_MarksheetPreview;
