// Import the Examinee and Examination classes from their respective files
import { Examinee } from './examinee.js';
import { Examination } from './examination.js';

// Function to start the exam and generate examinee data input fields dynamically
function startExam() {
  // Get the number of examinees from the input field
  const numExaminees = parseInt(document.getElementById('numExaminees').value);
  const examineeDataContainer = document.getElementById('examineeData');
  examineeDataContainer.innerHTML = ''; // Clear previous content
  let examineeDataHTML = '';

  // Loop through the number of examinees and create input fields for each examinee
  for (let i = 0; i < numExaminees; i++) {
    examineeDataHTML += `
      <div>
        <label for="division-${i}">Division (s/l):</label>
        <input type="text" id="division-${i}" maxlength="1" required>

        <label for="english-${i}">English:</label>
        <input type="number" id="english-${i}" required>

        <label for="math-${i}">Math:</label>
        <input type="number" id="math-${i}" required>

        <label for="science-${i}">Science:</label>
        <input type="number" id="science-${i}" required>

        <label for="japanese-${i}">Japanese:</label>
        <input type="number" id="japanese-${i}" required>

        <label for="geography-${i}">Geography/History:</label>
        <input type="number" id="geography-${i}" required>
      </div>
    `;
  }

  // Populate the examinee data container with the generated input fields
  examineeDataContainer.innerHTML = examineeDataHTML;
}

// Add event listener to the "Start Examination" button
const startButton = document.getElementById('startButton');
startButton.addEventListener('click', startExam);

