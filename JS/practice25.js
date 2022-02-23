function calc() {
  var y = document.getElementById("year_id").value;
  var m = document.getElementById("month_id").value;
  var d = document.getElementById("date_id").value;
  var after_date = document.getElementById("after_date_id").value;

  var day = new Date(Number(y), Number(m) - 1, Number(d));

  if(day.getDate() != d){
    alert('無効な日付です。');
    document.getElementById("year_id").value = '';
    document.getElementById("month_id").value = '';
    document.getElementById("date_id").value = '';
    document.getElementById("after_date_id").value = '';
    var result = document.getElementById("result_id");
  } else {
    var after_day = day.getDate() + Number(after_date);
    day.setDate(after_day);
    var result = document.getElementById("result_id");
    var get_month = day.getMonth() + 1;
    result.innerHTML = "西暦" + day.getFullYear() + "年" + get_month + "月" + day.getDate() + "日です。";
  }

}