import { useState, useEffect } from 'react';
import Certificate from '../../components/certificate/Certificate';
import './CertificatePrint.scss';
import { useNavigate } from "react-router-dom";

const CertificatePrint = () => {
    const [formData, setFormData] = useState({
    ms_no: '23121465',
    year: '2023',
    name: 'Rakiba Khatoon',
    fatherName: 'Md Afsar Ali',
    motherName: 'Salma Nisha',
    registrationNo: '1014959/23',
    rollNo: 'Bhj-00186',
    madrasa: 'Madrasa islamia hanfia washidganj ara bhojpur',
    dob: '1995-09-14',
    diniyat1: '69',
    diniyat2: '58',
    total_diniyat: '',
    urdu: '65',
    persian: '58',
    arabic: '70',
    hindi: '60',
    english: '58',
    socialstudy: '71',
    mathematics: '54',
    science: '25+8',
    total: '627',
    status: 'PASS',
    devision: 'FIRST',
    total_in_words: 'Six Hundred Twenty Seven',
    date_of_publication: '2025-09-14',
    });


  const [step, setStep] = useState('form'); // 'form' | 'preview'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep('preview');
  };

  useEffect(() => {
  const diniyat1 = parseInt(formData.diniyat1) || 0;
  const diniyat2 = parseInt(formData.diniyat2) || 0;

  setFormData(prev => ({
    ...prev,
    total_diniyat: diniyat1 + diniyat2,
  }));
  }, [formData.diniyat1, formData.diniyat2]);

  const navigate = useNavigate();

  const handlePreview = () => {
    navigate('/certificate-preview', { state: formData });
  };


  return (
    <div className="certificate-print-page">
      {step === 'form' && (
        <form className="input-form" onSubmit={handleSubmit}>
          <h2>📝 Enter Certificate Data</h2>

          <fieldset>
            <legend>📌 Student Information</legend>
            <div className="form-row">
              <div className="form-group">
                <label>Ms.No</label>
                <input name="ms_no" value={formData.ms_no} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Year</label>
                <input
                  type="number"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  min="1990"
                  max="2030"
                  placeholder="Enter Year"
                />
              </div>

            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Name</label>
                <input name="name" value={formData.name} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Father's Name</label>
                <input name="fatherName" value={formData.fatherName} onChange={handleChange} />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Mother's Name</label>
                <input name="motherName" value={formData.motherName} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Registration No</label>
                <input name="registrationNo" value={formData.registrationNo} onChange={handleChange} />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Roll No With Code</label>
                <input name="rollNo" value={formData.rollNo} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Date of Birth</label>
                <input name="dob" value={formData.dob} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Madrasa</label>
                <input name="madrasa" value={formData.madrasa} onChange={handleChange} />
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend>📚 Subject Marks</legend>
            <div className="form-row">
              <div className="form-group">
                <label>Diniyat Paper-I</label>
                <input name="diniyat1" value={formData.diniyat1} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Diniyat Paper-II</label>
                <input name="diniyat2" value={formData.diniyat2} onChange={handleChange} />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Total</label>
                <input name="total_diniyat" value={formData.total_diniyat || 0} disabled />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Urdu</label>
                <input name="urdu" value={formData.urdu} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Persian</label>
                <input name="persian" value={formData.persian} onChange={handleChange} />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Arabic</label>
                <input name="arabic" value={formData.arabic} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Hindi</label>
                <input name="hindi" value={formData.hindi} onChange={handleChange} />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>English</label>
                <input name="english" value={formData.english} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Social Study</label>
                <input name="socialstudy" value={formData.socialstudy} onChange={handleChange} />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Mathematics</label>
                <input name="mathematics" value={formData.mathematics} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Science(Th+Pr)</label>
                <input name="science" value={formData.science} onChange={handleChange} />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group full-width">
                <label>Total Marks</label>
                <input name="total" value={formData.total} onChange={handleChange} />
              </div>
            </div>
          </fieldset>
          
          {/*3rd fieldsheet */}
          <fieldset>
            <legend>📄 Result Summary</legend>
            <div className="form-row">
              <div className="form-group">
                <label>Status (Pass/Fail)</label>
                <input name="status" value={formData.status} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Devision</label>
                <input name="devision" value={formData.devision} onChange={handleChange} />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Total Marks (In Words)</label>
                <input name="total_in_words" value={formData.total_in_words} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Date of Publication</label>
                <input type="date" name="date_of_publication" value={formData.date_of_publication} onChange={handleChange} />
              </div>
            </div>
          </fieldset>


          <button type="button" className="preview-btn" onClick={handlePreview}>
              👁️ Preview Certificate
          </button>

        </form>
      )}

       {/* {step === 'preview' && (
        <div className="preview-controls">
          <button onClick={handlePreview}>👁️ Preview & Print</button>
        </div>
        )} */}
    </div>
  );
};

export default CertificatePrint;
