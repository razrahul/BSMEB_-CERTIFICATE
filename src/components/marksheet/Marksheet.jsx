// src/components/Marksheet.jsx
import './Marksheet.scss';

const Marksheet = ({ data }) => {
  return (
    <div className="marksheet">
      <div className="name common">{data.name}</div>
      <div className="father-name common">{data.fatherName}</div>
      <div className="mother-name common">{data.motherName}</div>
      <div className="reg-no common">{data.registrationNo}</div>
      <div className="roll-no common">{data.rollNo}</div>
      <div className="madrasa common">{data.madrasa.toUpperCase()}</div>

      {/* Example Marks */}
      <div className="diniyat1 common">{data.diniyat1}</div>
      <div className="diniyat2 common">{data.diniyat2}</div>
      <div className="diniyat3 common">{data.diniyat3}</div>
      <div className="total common">{data.total}</div>
      <div className="urdu common">{data.urdu}</div>
      <div className="persian common">{data.persian}</div>
      <div className="hindi common">{data.hindi}</div>
      <div className="english common">{data.english}</div>
      <div className="socialstudy common">{data.socialstudy}</div>
      <div className="mathematics common">{data.mathematics}</div>
      <div className="science common">{data.science}</div>
      <div className="aggregate common">{data.aggregate}</div>

      {/* Add more subjects as needed */}
    </div>
  );
};

export default Marksheet;
