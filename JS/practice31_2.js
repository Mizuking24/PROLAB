let jobDate = {
  "jobs": [
    {"jobId" : 1, "jobName" : "Police", "grpId" : 1},
    {"jobId" : 2, "jobName" : "Firefighter", "grpId" : 1},
    {"jobId" : 3, "jobName" : "Doctor", "grpId" : 2},
    {"jobId" : 4, "jobName" : "Nurse", "grpId" : 2},
    {"jobId" : 5, "jobName" : "Dentist", "grpId" : 2}
  ]
};
let jobDateJSON = JSON.stringify(jobDate);
// console.log(jobDateJSON);

let jobDateParsed = JSON.parse(jobDateJSON);
let array1 = [];
let array2 = [];
// console.log(jobDateParsed.jobs[3].jobName);

let groupId2 = jobDateParsed.jobs.filter(num => {
  return num.grpId === 2;
});
let groupId1 = jobDateParsed.jobs.filter(num => {
  return num.grpId === 1;
});

for (let i = 0; i < groupId2.length; i++) {
  array1.push(groupId2[i].jobName);
}
for (let i = 0; i < groupId1.length; i++) {
  array2.push(groupId1[i].jobName);
}

let sort1 = array1.concat(array2);
console.log(sort1);

// console.log(array1.sort());
// console.log(array2.sort());
let array3 = array1.sort();
let array4 = array2.sort();
let sort2 = array3.concat(array4);
console.log(sort2);

