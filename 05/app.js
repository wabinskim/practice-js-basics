function Student(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.grades = {};
}

Student.prototype.addGrade = function (subject, grade) {
  if (typeof this.grades[subject] === "undefined") {
    this.grades[subject] = [];
  }
  this.grades[subject].push(grade);
};

Student.prototype.getAvgFromArray = function (arr) {
  const sumOfGrades = arr.reduce(function (acc, num) {
    return acc + num;
  });
  return sumOfGrades / arr.length;
};

Student.prototype.getAverageGrade = function (subject) {
  if (typeof this.grades[subject] !== "undefined") {
    const grades = this.grades[subject];
    const result = this.getAvgFromArray(grades);
    return result;
  }
  const gradesTotal = [];
  for (const key in this.grades) {
    const grades = this.grades[key];
    grades.forEach(function (el) {
      gradesTotal.push(el);
    });
  }
  const result = this.getAvgFromArray(gradesTotal);
  return result;
};

const student = new Student("Jan", "Kowalski");
console.log(student);
student.addGrade("maths", 4);
student.addGrade("maths", 6);
student.addGrade("english", 3);
const avgMath = student.getAverageGrade("maths");
const avgEnglish = student.getAverageGrade("english");
const avg = student.getAverageGrade();

console.log(avgMath);
console.log(avgEnglish);
console.log(avg);
