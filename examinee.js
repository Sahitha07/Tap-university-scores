// Examinee class representing an individual examinee
export class Examinee {
  constructor(division, english, math, science, japanese, geographyHistory) {

    if (division !== 's' && division !== 'l') {
      alert('Please use "s" or "l" for the division. Example: s 70 78 82 57 74');
      return; // Exit the constructor if division is invalid
    }
      // Initialize properties for each subject score and division
      this.division = division;
      this.english = english;
      this.math = math;
      this.science = science;
      this.japanese = japanese;
      this.geographyHistory = geographyHistory;
  }

  // Method to calculate and return the total score of the examinee
  totalScore() {
      return this.english + this.math + this.science + this.japanese + this.geographyHistory;
  }

  // Method to calculate and return the science score of the examinee
  scienceScore() {
      return this.math + this.science;
  }

  // Method to calculate and return the humanities score of the examinee
  humanitiesScore() {
      return this.japanese + this.geographyHistory;
  }

  // Method to check if the examinee has passed the exam based on the total score and division
  isPassed() {
      // Calculate the total score, science score, and humanities score using class methods
      const totalScore = this.totalScore();
      const scienceScore = this.scienceScore();
      const humanitiesScore = this.humanitiesScore();

      // Determine if the examinee has passed based on the total score and division
      return totalScore >= 350 && ((this.division === 'l' && humanitiesScore >= 160) || (this.division === 's' && scienceScore >= 160));
  }
}

  
