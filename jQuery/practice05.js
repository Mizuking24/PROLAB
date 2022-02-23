$('#calc_id').click(function() {
  let y = $('#year_id').val();
  let m = $('#month_id').val();
  let d = $('#date_id').val();
  let after_date = $('#after_date_id').val();

  let day = new Date(Number(y), Number(m) - 1, Number(d));

  if(day.getDate() != d || day.getMonth() != m -1) {
    alert('無効な日付です。');
    $('#year_id').val("");
    $('#month_id').val("");
    $('#date_id').val("");
    $('#after_date_id').val("");
    // var result = document.getElementById("result_id");
  } else {
    let after_day = day.getDate() + Number(after_date);
    day.setDate(after_day);
    let get_month = day.getMonth() + 1;
    $('#result_id').text("西暦" + day.getFullYear() + "年" + get_month + "月" + day.getDate() + "日です。");
  }
})

