function validation() {
  var formName = document.getElementById("formId").value;
  var err = document.getElementById("error");
  err.innerHTML = "";
  if (formName.match(/^[^\x01-\x7E]{1,20}$/)) {
  } else {
    err.style.color = "red";
    err.innerHTML = "全角1〜20文字で入力してください";
  }
}
function sub() {
  var formName = document.getElementById("formId").value;
  var err = document.getElementById("error");
  if (formName == "") {
    var err = document.getElementById("error");
    err.style.color = "red";
    err.innerHTML = "値を入力してください";
  } else {
  }
}