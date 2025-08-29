import { useLocation, useNavigate } from 'react-router-dom';
import './Old_Faq_MarksheetPrint.scss';
import { formatDate } from '../../utils/helper';
import { Document, Page, pdfjs } from "react-pdf/dist/esm/entry.vite";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const onLoadSuccess = ({ numPages }) =>
  console.log(`Loaded document with ${numPages} pages`);

const Old_Faq_MarksheetPrint = () => {
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

  // 🔐 Safe text formatter
  const safeText = (val) => (val ? val.toUpperCase() : "");

  return (
    <div className="Old_Faq_MarksheetPrint-wrapper">
      {/* PDF background */}
      <div className="pdf-bg">
        <Document
          file="/Old_faquniq_marksheet.pdf"
          onLoadSuccess={onLoadSuccess}
        >
          <Page
            pageNumber={1}
            width={720}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </Document>
      </div>

      {/* 🎓 Certificate Overlay */}
      <div className="Old_Faq_MarksheetPrint">
        {/* 🧾 Student Information */}
        <div className="year">{safeText(data.year)}</div>
        <div className="name tex-dec">{safeText(data.name)}</div>
        <div className="father-name tex-dec">{safeText(data.fatherName)}</div>
        <div className="roll-code tex-dec">{safeText(data.code)}</div>
        <div className="roll-no tex-dec">{safeText(data.rollNo)}</div>
        <div className="madrasa tex-dec">{safeText(data.madrasa)}</div>
        <div className="dob tex-dec">{formatDate(data.dob)}</div>

        {/* 📊 Result Summary */}
        <div className="status tex-dec">{safeText(data.status)}</div>
        <div className="optional ">{safeText(data.optional)}</div>
        <div className="date_of_publication">
          {formatDate(data.publicationDate)}
        </div>
      </div>
    </div>
  );
};

export default Old_Faq_MarksheetPrint;
