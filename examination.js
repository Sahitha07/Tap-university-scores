// Import the Examinee class from './examinee.js'
import { Examinee } from './examinee.js';

// Examination class representing the collection of examinees
export class Examination {
  constructor() {
    // Initialize an empty array to store examinee objects
    this.examinees = [];
  }

  // Method to add an examinee to the examination
  addExaminee(examinee) {
    // Add the examinee object to the array of examinees
    this.examinees.push(examinee);
  }

  // Method to count the number of examinees who have passed the exam
  countPassers() {
    // Initialize a variable to keep track of the number of passers
    let passers = 0;
    
    // Loop through each examinee in the array of examinees
    for (const examinee of this.examinees) {
      // Check if the examinee has passed the exam using the isPassed() method of the Examinee class
      if (examinee.isPassed()) {
        // If the examinee has passed, increment the passers count
        passers++;
      }
    }

    // Return the total number of passers
    return passers;
  }
}
