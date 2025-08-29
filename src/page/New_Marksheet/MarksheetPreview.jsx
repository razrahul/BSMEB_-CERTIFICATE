import { useLocation, useNavigate } from "react-router-dom";
import "./MarksheetPreview.scss";

const CertificatePreview = () => {
  const { state: data } = useLocation();
  const navigate = useNavigate();

  if (!data) {
    return <div className="no-data-found">No data found</div>;
  }

  // console.log(data);
  

  const { subjects = {} } = data;
  const { examType, compulsory = [], optional = [] } = subjects; 

  const handlePrint = () => {
    // window.print();0
    if (examType === "molvi_art") {
      console.log("exam here art", examType);
      navigate("/molvi-art-print", { state: { data }});
      // window.open(`https://www.bsmeb.org/molvi-certificate-preview?type=art&marks=${data.totalInWords}&division=${data.division}&status=${data.status}&publicationDate=${data.publicationDate}`, "_blank");
    }
    if (examType === "molvi_science") {
      console.log("exam here science", examType);
      navigate("/molvi-sci-print", { state: { data }});
    }
    if (examType === "molvi_islamic") {
      console.log("exam here islamic", examType);
      navigate("/molvi-islamic-print", { state: { data }});
    }
  };


  const safeText = (val) => (val ? val.toUpperCase() : '');
  const safeMark = (val) => (typeof val === 'number' || val ? val : '');

  return (
    <div className="molvi-certificate-preview">
      <h2>📄 Certificate Preview:  {safeText(examType)}</h2>

      <div className="main-section">
        {/* 🧑 Student Info Section */}
        <div className="section">
          <h3>🧑 Student Information</h3>
          <p><strong>Marksheet No:</strong> {data.msNo}</p>
          <p><strong>Year:</strong> {data.year}</p>
          <p><strong>Name:</strong> {data.name}</p>
          <p><strong>Father's Name:</strong> {data.fatherName}</p>
          <p><strong>Mother's Name:</strong> {data.motherName}</p>
          <p><strong>Registration No:</strong> {data.registrationNo}</p>
          <p><strong>Roll No:</strong> {data.rollNo}</p>
          <p><strong>Madrasa:</strong> {data.madrasa}</p>
          <p><strong>Date of Birth:</strong> {data.dob}</p>
        </div>

        {/* 📊 Result Summary Section */}
        <div className="section">
          <h3>📊 Result Summary</h3>
          <p><strong>Status:</strong> {data.status}</p>
          <p><strong>Division:</strong> {data.division}</p>
          <p><strong>Total Marks:</strong> {data.total}</p>
          <p><strong>Total Marks in Words:</strong> {data.totalInWords}</p>
          <p><strong>Date of Publication:</strong> {data.publicationDate}</p>
        </div>

        {/* 📚 Subjects Section */}
        {compulsory.length > 0 || optional.length > 0 ? (
          <div className="section">
            <h3>📚 Subjects & Marks</h3>

            {compulsory.length > 0 && (
              <>
                <h4>🟢 Compulsory Subjects</h4>
                <ul>
                  {compulsory.map((subj, idx) => (
                    <li key={`c-${idx}`}>
                      <strong>{subj.name}:</strong> {subj.marks}
                    </li>
                  ))}
                </ul>
              </>
            )}

            {optional.length > 0 && (
              <>
                <h4>🔵 Optional Subjects</h4>
                <ul>
                  {optional.map((subj, idx) => (
                    <li key={`o-${idx}`}>
                      <strong>{subj.name}:</strong> {subj.marks}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        ) : null}
      </div>

      {/* 🔘 Buttons */}
      <div className="actions">
        <button onClick={() => navigate(-1)}>🔙 Go Back</button>
        <button onClick={handlePrint}>🖨️ Print</button>
      </div>
    </div>
  );
};

export default CertificatePreview;
