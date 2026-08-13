// Academic Tracker — main app logic
const STORAGE_KEY = "academic-tracker-courses";

function saveCourses() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(courses));
}

function loadCourses() {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
}

let courses = loadCourses();


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

function renderTable() {
  const tbody = document.getElementById("course-table-body");
  tbody.innerHTML = "";

  courses.forEach(course => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${course.code}</td>
      <td>${course.credits}</td>
      <td>${course.grade}</td>
    `;
    tbody.appendChild(row);
  });
}

function renderSummary() {
  document.getElementById("gpa-value").textContent = calculateGPA(courses);
  document.getElementById("credits-value").textContent = calculateTotalCredits(courses);
}

document.getElementById("course-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const code = document.getElementById("course-code").value;
  const credits = parseInt(document.getElementById("credit-hours").value);
  const grade = document.getElementById("letter-grade").value;

  courses.push({ code, credits, grade });
    saveCourses();

  renderTable();
  renderSummary();

  e.target.reset();
  });

  document.getElementById("clear-courses").addEventListener("click", function () {
  courses = [];
  saveCourses();
  renderTable();
  renderSummary();
});


