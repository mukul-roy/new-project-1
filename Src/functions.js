/*
 <script src="./Src/data.js"></script>
        <script src="./Src/models.js"></script>
        <script src="./Src/functions.js"></script>
        <script src="./Src/main.js"></script>  
        <script src="../mk.js"></script>
*/


/**
 * Mark to Grade
 * @param {*} mark
 */

const getGradeAndGpa = (mark) => {
    let grade;
    let gpa ;
  
    if (mark >= 0 && mark < 33) {
      grade = "F";
      gpa = 0;
    } else if (mark >= 33 && mark < 40) {
      grade = "D";
      gpa = 1;
    } else if (mark >= 40 && mark < 50) {
      grade = "C";
      gpa = 2;
    } else if (mark >= 50 && mark < 60) {
      grade = "B";
      gpa = 3 ;
    } else if (mark >= 60 && mark < 70) {
      grade = "A-";
      gpa = 4;
    } else if (mark >= 70 && mark < 80) {
      grade = "A";
      gpa = 5;
    } else if (mark >= 80 && mark <= 100) {
      grade = "A+";
      gpa = 6 ;
    } else {
      grade = "invalid";
      gpa ="invalid"
    }
  
    return {
      gpa : gpa,
      grade : grade,
    }
  }; 5196312   196312

  const resultSystemPro =(mark) =>{
const {bangla, engligh, math, sceince,social} = mark

const totalGpaAvr =
              ((getGradeAndGpa(bangla).gpa + getGradeAndGpa(engligh).gpa + getGradeAndGpa(math).gpa
 + getGradeAndGpa(sceince).gpa +  getGradeAndGpa(social).gpa )/5 ).toFixed(2);

 console.log (totalGpaAvr)


    if(bangla>=33 && engligh >=33 && math >=33
       && sceince >=33 && social >=33){

        if(totalGpaAvr >=0 && totalGpaAvr<1){
          return{
            gpa : totalGpaAvr,
            grade : "F",
          }
        }else if(totalGpaAvr >=1 && totalGpaAvr<2){
          return{
            gpa : totalGpaAvr,
            grade : "C",
          }
        }else if(totalGpaAvr >=2 && totalGpaAvr<3.5){
          return{
            gpa : totalGpaAvr,
            grade : "B",
          }
        }else if(totalGpaAvr >=3.5 && totalGpaAvr<4){
          return{
            gpa : totalGpaAvr,
            grade : "A-",
          }
        }else if(totalGpaAvr >=4 && totalGpaAvr<5){
          return{
            gpa : totalGpaAvr,
            grade : "A",
          }
        }
    }else{
      return{
        gpa : 0,
        grade : "F",
      }
    }
  };
 /*
  const getGpa = (mark) => {
    let gpa;
    if (mark >= 0 && mark < 33) {
      gpa = 0;
    } else if (mark >= 33 && mark < 40) {
      gpa = 1;
    } else if (mark >= 40 && mark < 50) {
      gpa = 2;
    } else if (mark >= 50 && mark < 60) {
      gpa = 3;
    } else if (mark >= 60 && mark < 70) {
      gpa = 3.5;
    } else if (mark >= 70 && mark < 80) {
      gpa = 4;
    } else if (mark >= 80 && mark <= 100) {
      gpa = 5;
    } else {
      gpa = "odvot jinish";
    }
  
    return gpa;
  };
  */
 /*
  const isPassed = (s1, s2, s3, s4, s5, s6) => {
    if (s1 >= 33 && s2 >= 33 && s3 >= 33 && s4 >= 33 && s5 >= 33 && s6 >= 33) {
      return true;
    } else {
      return false;
    }
  };
  
  
  let getFinalGPA = (s1, s2, s3, s4, s5, s6) => {
    if (s1 >= 33 && s2 >= 33 && s3 >= 33 && s4 >= 33 && s5 >= 33 && s6 >= 33) {
      let totalGpa =
        getGpa(s1) +
        getGpa(s2) +
        getGpa(s3) +
        getGpa(s4) +
        getGpa(s5) +
        getGpa(s6);
  
      return totalGpa / 6;
    } else {
      return 0;
      ``;
    }
  };
  
  let getFinalGrade = (s1, s2, s3, s4, s5, s6) => {
    let finalGpa = getFinalGPA(s1, s2, s3, s4, s5, s6);
  
    if (finalGpa >= 0 && finalGpa < 1) {
      return "F";
    } else if (finalGpa >= 1 && finalGpa < 2) {
      return "D";
    } else if (finalGpa >= 2 && finalGpa < 3) {
      return "C";
    } else if (finalGpa >= 3 && finalGpa < 3.5) {
      return "B";
    } else if (finalGpa >= 3.5 && finalGpa < 4) {
      return "A-";
    } else if (finalGpa >= 4 && finalGpa < 5) {
      return "A";
    } else if (finalGpa >= 5) {
      return "A+";
    }
  };
 */