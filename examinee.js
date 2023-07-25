class Examinee {
  constructor(division, english, math, science, japanese, geographyHistory) {
    this.division = division;
    this.english = english;
    this.math = math;
    this.science = science;
    this.japanese = japanese;
    this.geographyHistory = geographyHistory;
  }

  totalScore() {
    return this.english + this.math + this.science + this.japanese + this.geographyHistory;
  }

  scienceScore() {
    return this.math + this.science;
  }

  humanitiesScore() {
    return this.japanese + this.geographyHistory;
  }

  isPassed() {
    const totalScore = this.totalScore();
    const scienceScore = this.scienceScore();
    const humanitiesScore = this.japanese + this.geographyHistory;


    return (
      totalScore >= 350 &&
      ((this.division === 'l' && humanitiesScore >= 160) || (this.division === 's' && scienceScore >= 160))
    );
  }
}


  

