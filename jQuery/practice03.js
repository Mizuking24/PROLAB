const result_dates = ["あいこ", "勝利", "敗北"];
const janken = ['../images/janken_gu.png', '../images/janken_choki.png', '../images/janken_pa.png'];
let result_date = "";

$('#gu_id').click(function() {
  $('#enemy_id').text("");
  const e_jankenNo = Math.floor(Math.random() * janken.length);
  const e_janken = janken[e_jankenNo];

  $('<img>').attr({
    src: janken[e_jankenNo]
  }).appendTo('#enemy_id');

  if (janken[0] === e_janken) {
    result_date = result_dates[0];
  } else if(janken[0] &&  e_janken === '../images/janken_choki.png') {
    result_date = result_dates[1];
  } else {
    result_date = result_dates[2];
  }

  $('#result_id').text("");
  $('#result_id').text(result_date);
});

$('#choki_id').click(function() {
  $('#enemy_id').text("");
  const e_jankenNo = Math.floor(Math.random() * janken.length);
  const e_janken = janken[e_jankenNo];

  $('<img>').attr({
    src: janken[e_jankenNo]
  }).appendTo('#enemy_id');

  if (janken[1] === e_janken) {
    result_date = result_dates[0];
  } else if(janken[1] &&  e_janken === '../images/janken_pa.png') {
    result_date = result_dates[1];
  } else {
    result_date = result_dates[2];
  }

  $('#result_id').text("");
  $('#result_id').text(result_date);
});

$('#pa_id').click(function() {
  $('#enemy_id').text("");
  const e_jankenNo = Math.floor(Math.random() * janken.length);
  const e_janken = janken[e_jankenNo];

  $('<img>').attr({
    src: janken[e_jankenNo]
  }).appendTo('#enemy_id');

  if (janken[2] === e_janken) {
    result_date = result_dates[0];
  } else if(janken[2] &&  e_janken === '../images/janken_gu.png') {
    result_date = result_dates[1];
  } else {
    result_date = result_dates[2];
  }

  $('#result_id').text("");
  $('#result_id').text(result_date);
});