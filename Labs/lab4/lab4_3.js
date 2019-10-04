subject = ['CP111','CP121','EN101','SW101'];
credit = [3,3,2,1];
grade = [3.5,3,2.5,4];

let cSum = 0;
let cGrade = 0;
for (let i = 0; i < subject.length; ++i) {
  write(subject[i] + " has " + credit[i] + " credits. Grade " + grade[i]);
  cGrade += credit[i] * grade[i];
  cSum += credit[i];
}
write(cGrade/cSum);