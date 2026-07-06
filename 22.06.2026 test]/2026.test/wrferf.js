let studentlar = [
  {ism: "Ali", ball: 85},
  {ism: "Vali", ball: 55},
  {ism: "Guli", ball: 70}
];

studentlar.forEach(student => {
  let baho = "";

  if (student.ball >= 80) {
    baho = "A'lo";
  } else if (student.ball >= 60 && student.ball < 80) {
    baho = "Yaxshi";
  } else {
    baho = "Qoniqarli";
  }

  console.log(student.ism + ": " + baho);
});