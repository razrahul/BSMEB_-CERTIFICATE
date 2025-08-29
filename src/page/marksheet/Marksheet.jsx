// src/pages/Marksheet.jsx
import MarksheetDesign from '../../components/marksheet/Marksheet';

const Marksheet = () => {
  const dummyData = {
    name: 'Raju Kumar',
    fatherName: 'Ashok Kumar',
    motherName: 'Sita Devi',
    registrationNo: 'REG123456',
    rollNo: 'R-001-A',
    madrasa: 'Madarsa Islamia Hanfia Washidganj ara Bhojpur',
    diniyat1: 85,
    diniyat2: 90,
    diniyat3: 88,
    total: 263,
    urdu: 95,
    persian: 92,
    hindi: 90,
    english: 89,
    socialstudy: 91,
    mathematics: 94,
    science: 93,
  };

  return (
    <>
      <div>
       {/* 👇 Print button that stays outside and won't get printed */}
      <div style={{ textAlign: 'center', margin: '20px' }}>
        <button onClick={() => window.print()}>🖨️ Print Marksheet</button>
      </div>
      <MarksheetDesign data={dummyData}  />
    </div>
    </>
  );
};

export default Marksheet;
