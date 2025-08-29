import converter from 'number-to-words';

  function total_Number_Words(obtained) {
    const num = Number(obtained);
    if (isNaN(num)) return "Invalid";
    return converter.toWords(num);
  }

  function getDivisionFromMarks(obtained, total) {
    const num = Number(obtained);
    const den = Number(total);

    if (isNaN(num) || isNaN(den) || den === 0) return "Invalid";

    const percentage = (num / den) * 100;

    if (percentage >= 60) return "FIRST";
    if (percentage >= 45) return "SECOND";
    if (percentage >= 30) return "THIRD";

    return "FAIL";
  }

  function getStatusFromMarks(obtained, total) {
    const num = Number(obtained);
    const den = Number(total);

    if (isNaN(num) || isNaN(den) || den === 0) return "Invalid";

    const percentage = (num / den) * 100;

    return percentage >= 30 ? "PASS" : "FAIL";
  }

  // console.log(total_Number_Words("10025"));
  // console.log(getDivisionFromMarks("299", "500"));
  // console.log(getStatusFromMarks("95", "500"));
 const formatDate = (dateString) => {
    if (!dateString) return '';
    const [year, month, day] = dateString.split("-");
    return `${day}-${month}-${year}`;
  };

// ✅ Correct export
export {
  total_Number_Words,
  getDivisionFromMarks,
  getStatusFromMarks,
  formatDate,
};
