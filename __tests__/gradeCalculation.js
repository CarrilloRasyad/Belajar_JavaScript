// untuk menghitung nilai rata2

// const averageExams = (valuesExam) => {
//     const numberValidation = valuesExam.every(exam => typeof exam === 'number');
//     if (!numberValidation) throw Error('please input number');
 
//     const sumValues = valuesExam.reduce((accumulator,currentValue) => accumulator + currentValue, 0);
//     return sumValues / valuesExam.length;
// };
 
// const isStudentPassExam = (valuesExam, name) => {
//     const minValues = 75;
//     const average = averageExams(valuesExam);
    
//     if (average > minValues) {
//         console.log(`${name} pass the exams`);
//         return true;
//     } else {
//         console.log(`${name} fail the exams`);
//         return false;
//     }
// };
 
// module.exports = { averageExams, isStudentPassExam };


// grouping menggunakan describe menggunakan library jest

// const { averageExams, isStudentPassExam } = require('../gradeCalculations');
 
// describe('grade calculations', () => {
//     test('it should return exact average', () => {
//         const listValueOfExams = [80, 100, 100, 80];
//         expect(averageExams(listValueOfExams)).toEqual(90);
//     });
 
//     /**
//      * Integration testing
//      */
//     test('it should return exam passed status', () => {
//         const listValueOfExams = [80, 100, 100, 80];
//         expect(isStudentPassExam(listValueOfExams, 'Budi')).toEqual(true);
//     })
 
 
//     test('it should return exam failed status', () => {
//         const listValueOfExams = [50, 40, 70, 80];
//         expect(isStudentPassExam(listValueOfExams, 'Budi')).toEqual(false);
//     })
// })