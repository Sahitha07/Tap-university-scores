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

  isScienceApplicant() {
    return this.division === 's';
  }

  isHumanitiesApplicant() {
    return this.division === 'l';
  }

  scienceScore() {
    return this.math + this.science;
  }

  humanitiesScore() {
    return this.japanese + this.geographyHistory;
  }

  hasHighScienceScores() {
    return this.scienceScore() >= 160;
  }

  hasHighHumanitiesScores() {
    return this.humanitiesScore() >= 160;
  }

  isPassed() {
    const totalScore = this.totalScore();

    if (totalScore < 350) {
      return false;
    }

    if (this.isScienceApplicant()) {
      return this.hasHighScienceScores();
    }

    if (this.isHumanitiesApplicant()) {
      return this.hasHighHumanitiesScores();
    }

    return false;
  }
}


  

