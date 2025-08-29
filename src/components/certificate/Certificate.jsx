import './Certificate.scss';

const Certificate = ({ data }) => {
  return (
    <div className="certificate-print-area">
      <div className="name">{data.name}</div>
      <div className="father-name">{data.fatherName}</div>
      <div className="mother-name">{data.motherName}</div>
      <div className="registration-no">{data.registrationNo}</div>
      <div className="roll-no">{data.rollNo}</div>
      <div className="madrasa">{data.madrasa?.toUpperCase()}</div>

      <div className="diniyat1">{data.diniyat1}</div>
      <div className="diniyat2">{data.diniyat2}</div>
      <div className="diniyat3">{data.total_diniyat}</div>
      <div className="total">{data.total}</div>

      <div className="urdu">{data.urdu}</div>
      <div className="persian">{data.persian}</div>
      <div className="hindi">{data.hindi}</div>
      <div className="english">{data.english}</div>
      <div className="socialstudy">{data.socialstudy}</div>
      <div className="mathematics">{data.mathematics}</div>
      <div className="science">{data.science}</div>
    </div>
  );
};

export default Certificate;
