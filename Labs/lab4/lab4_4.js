subject = ["CP111", "CP121", "EN101", "SW101"];
credit = [3, 3, 2, 1];
grade = [3.5, 3, 2.5, 4];

subjectsObject = [];
for (let i = 0; i < subject.length; ++i) {
  obj = {
    name: subject[i],
    credit: credit[i],
    grade: grade[i]
  };
  subjectsObject.push(obj);
}

//write(subjectsObject.length);

let cSum = 0;
let cGrade = 0;
for (let i = 0; i < subject.length; ++i) {
  write(
    subjectsObject[i].name +
      " has " +
      subjectsObject[i].credit +
      " credits. Grade " +
      subjectsObject[i].grade
  );
  cGrade += subjectsObject[i].credit * subjectsObject[i].grade;
  cSum += subjectsObject[i].credit;
}
write(cGrade / cSum);
