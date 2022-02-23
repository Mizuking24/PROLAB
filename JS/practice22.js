function judge_func() {
  var input_box = document.getElementById("input_id").value;
  var result_box = document.getElementById("result_id");
  result_box.innerHTML = "";
  if (isNaN(input_box)) {
    result_box.innerHTML = "数字を入力してください。";
    result_box.style.color = "red";
  }
}