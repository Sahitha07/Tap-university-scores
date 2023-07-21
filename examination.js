import { Examinee } from './examinee.js';

export class Examination {
  constructor() {
    this.examinees = [];
  }

  addExaminee(examinee) {
    this.examinees.push(examinee);
  }

  countPassers() {
    let passers = 0;
    for (const examinee of this.examinees) {
      if (examinee.isPassed()) {
        passers++;
      }
    }
    return passers;
  }
}
