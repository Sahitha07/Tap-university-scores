class Examinee {
  constructor(division, english, math, science, japanese, geography) {
    this.division = division;
    this.english = english;
    this.math = math;
    this.science = science;
    this.japanese = japanese;
    this.geography = geography;
  }

  totalScore() {
    return this.english + this.math + this.science + this.japanese + this.geography;
  }

  isPassed() {
    const totalScore = this.totalScore();

    const scienceSubjects = [this.math, this.science];
    const humanitiesSubjects = [this.japanese, this.geography];

    const passedTotalScore = totalScore >= 350;
    const passedScienceSubjects = this.division === 's' && scienceSubjects.filter(s => s >= 80).length >= 2;
    const passedHumanitiesSubjects = this.division === 'l' && humanitiesSubjects.filter(h => h >= 80).length >= 2;

    return passedTotalScore && (passedScienceSubjects || passedHumanitiesSubjects);
  }
}


