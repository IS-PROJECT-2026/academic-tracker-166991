// Academic Tracker — main app logic
const courses = [];

const gradePoints = {
  "A": 4.0, "A-": 3.7,
  "B+": 3.3, "B": 3.0, "B-": 2.7,
  "C+": 2.3, "C": 2.0,
  "D": 1.0,
  "F": 0.0
};

function calculateGPA(courseList) {
  if (courseList.length === 0) return 0;

  let totalPoints = 0;
  let totalCredits = 0;

  courseList.forEach(course => {
    const points = gradePoints[course.grade] ?? 0;
    totalPoints += points * course.credits;
    totalCredits += course.credits;
  });

  return totalCredits === 0 ? 0 : (totalPoints / totalCredits).toFixed(2);
}

function calculateTotalCredits(courseList) {
  return courseList.reduce((sum, course) => sum + course.credits, 0);
}