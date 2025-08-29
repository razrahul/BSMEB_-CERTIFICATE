import { useLocation, useNavigate } from 'react-router-dom';
import './molvi_Islamic_Print.scss';
import { formatDate } from '../../utils/helper';
import { Document, Page, pdfjs } from "react-pdf/dist/esm/entry.vite";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


const onLoadSuccess = ({ numPages }) => console.log(`Loaded document with ${numPages} pages`);
const Movli_Islamic_Certificate = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const data = location.state?.data;
  if (!data) {
    return (
      <div>
        <p>No certificate data found.</p>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  const { subjects = {} } = data;
  const { examType, compulsory = [], optional = [] } = subjects;

  // console.log(compulsory);

  

  // 🔐 Safe text formatter
  const safeText = (val) => (val ? val.toUpperCase() : '');
  const safeMark = (val) => (typeof val === 'number' || val ? val : '');

  // 🔍 Get subject marks from subject name
   const getMarks = (subjectName) => {
    const allSubjects = [...compulsory, ...optional];
    const found = allSubjects.find((s) =>
      s.name?.toLowerCase().trim() === subjectName.toLowerCase().trim()
    );
    if (!found) {
      console.log(`Subject ${subjectName} not found`);
    };
    return  found?.marks ;
  };

  return (
    <div className="certificate-islamic-wrapper">
          {/* PDF background */}
        <div className="pdf-bg">
            <Document file="/Islamic_marksheet.pdf" onLoadSuccess={onLoadSuccess}>
              <Page pageNumber={1} width={790} renderTextLayer={false} renderAnnotationLayer={false} />
            </Document>
        </div>
        <div className="certificate-molvi-islamic">
          {/* 🧾 Student Information */}
          <div className="ms_no tex-dec">{safeText(data.msNo)}</div>
          <div className="year">{safeText(data.year)}</div>
          <div className="name tex-dec">{safeText(data.name)}</div>
          <div className="father-name tex-dec">{safeText(data.fatherName)}</div>
          <div className="mother-name tex-dec">{safeText(data.motherName)}</div>
          <div className="registration-no tex-dec">{safeText(data.registrationNo)}</div>
          <div className="roll-no tex-dec">{safeText(data.rollNo)}</div>
          <div className="madrasa tex-dec">{safeText(data.madrasa)}</div>
          <div className="dob tex-dec">{formatDate(data.dob)}</div>

          {/* 🧠 Subject Marks (mapped to CSS classes) */}
          <div className="diniyat1 tex-dec">{getMarks("Diniyat_Paper-I")}</div>
          <div className="diniyat2 tex-dec">{getMarks("Diniyat_Paper-II")}</div>
          <div className="diniyat3 tex-dec">{getMarks("Diniyat_Paper-III")}</div>
          <div className="total_diniyat tex-dec">{getMarks("Total_Diniyat")}</div>
          <div className="arabic tex-dec">{getMarks("Arabic")}</div>
          <div className="urdu tex-dec">{getMarks("Urdu")}</div>
          <div className="tarikh_e_islam tex-dec">{getMarks("Tarikh-E-Islam")}</div>
          <div className="islamic_pol_eco tex-dec">{getMarks("IsLamicPol.&ECO")}</div>
          <div className="english_hindi_persian tex-dec">{getMarks("English/Hindi/Persian")}</div>
          <div className="total tex-dec">{data.total}</div>

          {/* 🧮 Total Marks (if stored in data.total) */}
          <div className="total tex-dec">{safeMark(data.total)}</div>

          {/* 📊 Result Summary */}
          <div className="status tex-dec">{safeText(data.status)}</div>
          <div className="division tex-dec">{safeText(data.division)}</div>
          <div className="total_in_words tex-dec1">{safeText(data.totalInWords)}</div>
          <div className="date_of_publication">{formatDate(data.publicationDate)}</div>
        </div>
    </div>
  );
};

export default Movli_Islamic_Certificate;
