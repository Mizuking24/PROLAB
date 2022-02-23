function clickfunc() {
  var A = 60;
  var B = 60;
  var C = 61;
  
  if (A >= 60 && B >= 60 && C >= 60) {
    if (A > B && B > C) {
      var ans = "１位：A君";
    } else if (A > C && C > B) {
      var ans = "１位：A君";
    } else if (B > A && A > C) {
      var ans = "１位：B君";
    } else if (B > C && C > A) {
      var ans = "１位：B君";
    } else if (C > A && A > B) {
      var ans = "１位：C君";
    } else if (C > B && B > A) {
      var ans = "１位：C君";
    } else if (A > B && B == C) {
      var ans = "１位：A君";
    } else if (B > A && A == C) {
      var ans = "１位：B君";
    } else if (C > A && A == B) {
      var ans = "１位：C君";
    } else if (A == B && B > C) {
      var ans = "１位：A君とB君";
    } else if (A == C && C > B) {
      var ans = "１位：A君とC君";
    } else if (B == C && C > A) {
      var ans = "１位：B君とC君";
    } else {
      var ans = "１位：全員";
    }
  } else if (A >= 60 && B >= 60 && C < 60) {
    var ans = "A君とB君が合格";
  } else if (A >= 60 && B < 60 && C < 60) {
    var ans = "A君が合格";
  } else if (A < 60 && B >= 60 && C >= 60) {
    var ans = "B君とC君が合格";
  } else if (A < 60 && B >= 60 && C < 60) {
    var ans = "B君が合格";
  } else if (A >= 60 && B < 60 && C >= 60) {
    var ans = "A君とC君が合格";
  } else if (A < 60 && B < 60 && C >= 60) {
    var ans = "C君が合格";
  } else {
    var ans = "全員不合格";
  }
  
  console.log(ans);

  var result_answer = document.getElementById("result-answer");
  result_answer.innerHTML = ans;
}  
