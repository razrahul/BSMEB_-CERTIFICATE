import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Marksheet from './page/marksheet/Marksheet';
import Navbar from './container/Navbar';
import Dashboard from './page/dashboard/Dashboard';
import Student from './page/student/Student';
import CertificatePrint from './page/Certificate/CertificatePrint';
import Certificate from './page/Certificate-print/Certificate';
import New_Marksheet from './page/New_Marksheet/MarksheetPage';
import Molvi_CertificatePreview from './page/New_Marksheet/MarksheetPreview';
import Molvi_Art_Print from './page/New_Marksheet_Print/molvi_Art_Print';
import Molvi_Sci_Print from './page/New_Marksheet_Print/molvi_Sci_print';
import Movli_Islamic_Certificate from './page/New_Marksheet_Print/molvi_Islamic_Print';

import Old_MarksheetPage from './page/Old_Marksheet/Old_MarksheetPage';
import Old_MarksheetPreview from './page/Old_Marksheet/Old_MarksheetPreview';
import Old_Faq_MarksheetPrint from './page/Old_MarksheetPrint/Old_Faq_MarksheetPrint';
import Old_Molvi_MarksheetPrint from './page/Old_MarksheetPrint/Old_Molvi_MarksheetPrint';

import './App.css';

function App() {
  const location = useLocation();

  // Check if we are on the certificate preview page
  const isPreviewPage = ['/certificate-preview', '/molvi-art-print','/molvi-sci-print','/molvi-islamic-print','/old-faq-certificate-print','/old-molvi-certificate-print'].includes(location.pathname);


  return (
    <>
      {!isPreviewPage && <Navbar />}
      <div className={isPreviewPage ? '' : 'app-layout'}>
        <div className={isPreviewPage ? '' : 'main-content'}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/marksheet" element={<Marksheet />} />
            <Route path="/student" element={<Student />} />
            <Route path="/certificate" element={<CertificatePrint />} />
            <Route path="/certificate-preview" element={<Certificate />} />
            <Route path="/new-marksheet" element={<New_Marksheet />} />
            <Route path="/molvi-certificate-preview" element={<Molvi_CertificatePreview />} />
            <Route path="/molvi-art-print" element={<Molvi_Art_Print />} />
            <Route path="/molvi-sci-print" element={<Molvi_Sci_Print />} />
            <Route path="/molvi-islamic-print" element={<Movli_Islamic_Certificate />} />
            <Route path="/old-certificate" element={<Old_MarksheetPage />} />
            <Route path="/old-certificate-preview" element={<Old_MarksheetPreview />} />
            <Route path="/old-faq-certificate-print" element={<Old_Faq_MarksheetPrint />} />
            <Route path="/old-molvi-certificate-print" element={<Old_Molvi_MarksheetPrint />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
