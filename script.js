let courses = [];

function addCourse() {
    const title = document.getElementById('title').value;
    const credit = document.getElementById('credit').value;
    const grade = document.getElementById('grade').value;

    courses.push({ title, credit: parseFloat(credit), grade });

    displayCourses();
}

function displayCourses() {
    const coursesList = document.getElementById('courses-list');
    coursesList.innerHTML = '';

    courses.forEach((course, index) => {
        const courseItem = document.createElement('div');
        courseItem.innerHTML = `
            <span>Title: ${course.title}, Credit Hours: ${course.credit}, Grade: ${course.grade}</span>
            <button class="delete-button" onclick="deleteCourse(${index})">Delete</button>
        `;
        coursesList.appendChild(courseItem);
    });
}

function deleteCourse(index) {
    courses.splice(index, 1);
    displayCourses();
}

function calculateCGPA() {
    const totalCredits = courses.reduce((total, course) => total + course.credit, 0);
    let totalGradePoints = 0;

    courses.forEach(course => {
        const gradePoints = calculateGradePoints(course.grade);
        totalGradePoints += gradePoints * course.credit;
    });

    const cgpa = totalGradePoints / totalCredits;
    displayResult(cgpa.toFixed(2));
}

function calculateGradePoints(grade) {
    switch (grade.toUpperCase()) {
        case 'A':
            return 5.0;
        case 'B':
            return 4.0;
        case 'C':
            return 3.0;
        case 'D':
            return 2.0;
        case 'E':
            return 1.0;
        case 'F':
            return 0.0;
        default:
            return 0.0;
    }
}

function displayResult(cgpa) {
    const resultContainer = document.getElementById('result');
    resultContainer.textContent = `Your CGPA is: ${cgpa}`;
}
