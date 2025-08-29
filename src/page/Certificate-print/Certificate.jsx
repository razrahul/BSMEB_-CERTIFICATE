import "./Certificate.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { Document, Page, pdfjs } from "react-pdf/dist/esm/entry.vite";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


const onLoadSuccess = ({ numPages }) => console.log(`Loaded document with ${numPages} pages`);

const Certificate = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;

  if (!data) {
    return (
      <div>
        <p>No certificate data found.</p>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  function formatDate(dateString) {
    const [year, month, day] = dateString.split("-");
    return `${day}-${month}-${year}`;
  }

  const safeText = (val) => (val ? val.toUpperCase() : '');
  const getTotalFromExpression = (str) => {
    try {
      return Function(`"use strict"; return (${str})`)();
    } catch {
      return 0;
    }
  };

  return (
    <div className="certificate-wrapper">
      {/* PDF background */}
      <div className="pdf-bg">
        <Document file="/faqunia_marksheet.pdf" onLoadSuccess={onLoadSuccess}>
          <Page pageNumber={1} width={790} renderTextLayer={false} renderAnnotationLayer={false} />
        </Document>
      </div>

      {/* Overlay text */}
      <div className="certificate-print-area">
        <div className="ms_no tex-dec">{safeText(data.ms_no)}</div>
        <div className="year">{safeText(data.year)}</div>
        <div className="name tex-dec">{safeText(data.name)}</div>
        <div className="father-name tex-dec">{safeText(data.fatherName)}</div>
        <div className="mother-name tex-dec">{safeText(data.motherName)}</div>
        <div className="registration-no tex-dec">{data.registrationNo}</div>
        <div className="roll-no tex-dec">{safeText(data.rollNo)}</div>
        <div className="madrasa tex-dec">{safeText(data.madrasa)}</div>
        <div className="dob tex-dec">{formatDate(data.dob)}</div>

        <div className="diniyat1 tex-dec">{data.diniyat1}</div>
        <div className="diniyat2 tex-dec">{data.diniyat2}</div>
        <div className="total-diniyat tex-dec">{data.total_diniyat}</div>
        <div className="urdu tex-dec">{data.urdu}</div>
        <div className="persian tex-dec">{data.persian}</div>
        <div className="arabic tex-dec">{data.arabic}</div>
        <div className="hindi tex-dec">{data.hindi}</div>
        <div className="english tex-dec">{data.english}</div>
        <div className="socialstudy tex-dec">{data.socialstudy}</div>
        <div className="mathematics tex-dec">{data.mathematics}</div>
        <div className="science tex-dec">{data.science}</div>
        <div className="total_science tex-dec">{getTotalFromExpression(data.science)}</div>
        <div className="total tex-dec">{data.total}</div>

        <div className="status tex-dec">{safeText(data.status)}</div>
        <div className="devision tex-dec">{safeText(data.devision) || data.devision}</div>
        <div className="total_in_words tex-dec1">{safeText(data.total_in_words)}</div>
        <div className="date_of_publication">{formatDate(data.date_of_publication)}</div>
      </div>
    </div>
  );
};

export default Certificate;
