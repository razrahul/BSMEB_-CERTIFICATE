import { useLocation, useNavigate } from 'react-router-dom';
import './molvi_Art_Print.scss';
import { formatDate } from '../../utils/helper';
const Movli_Art_Certificate = () => {
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
    return  found?.marks || 25  ;
  };

  return (
    <div className="certificate-molvi-art">
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
      <div className="urdu tex-dec">{getMarks("Urdu")}</div>
      <div className="persian tex-dec">{getMarks("Persian")}</div>
      {/* <div className="arabic tex-dec">{getMarks("Arabic")}</div> */}
      <div className="hindi tex-dec">{getMarks("Hindi")}</div>
      <div className="english tex-dec">{getMarks("English")}</div>
      <div className="socialstudy tex-dec">{getMarks("Sociology")}</div>
      <div className="mathematics tex-dec">{getMarks("Political Science")}</div>
      <div className="science tex-dec">{getMarks("History")}</div>

      {/* 🧮 Total Marks (if stored in data.total) */}
      <div className="total tex-dec">{safeMark(data.total)}</div>

      {/* 📊 Result Summary */}
      <div className="status tex-dec">{safeText(data.status)}</div>
      <div className="division tex-dec">{safeText(data.division)}</div>
      <div className="total_in_words tex-dec1">{safeText(data.totalInWords)}</div>
      <div className="date_of_publication">{formatDate(data.publicationDate)}</div>
    </div>
  );
};

export default Movli_Art_Certificate;
