var result_dates = ["あいこ", "勝利", "敗北"];
var result_date = "";

function click_func1() {
  var enemy_image = document.getElementById("enemy_id")
  enemy_image.innerHTML = "";

  var image_element = document.createElement("img");
  var janken = ['../images/janken_gu.png', '../images/janken_choki.png', '../images/janken_pa.png'];
  var e_jankenNo = Math.floor(Math.random() * janken.length);
  var e_janken = janken[e_jankenNo];
  image_element.src = janken[e_jankenNo];
  enemy_image.appendChild(image_element);

  if (janken[0] === e_janken) {
    result_date = result_dates[0];
  } else if(janken[0] &&  e_janken === '../images/janken_choki.png') {
    result_date = result_dates[1];
  } else {
    result_date = result_dates[2];
  }

  result_func();
}

function click_func2() {
  var enemy_image = document.getElementById("enemy_id")
  enemy_image.innerHTML = "";

  var image_element = document.createElement("img");
  var janken = ['../images/janken_gu.png', '../images/janken_choki.png', '../images/janken_pa.png'];
  var e_jankenNo = Math.floor(Math.random() * janken.length);
  var e_janken = janken[e_jankenNo];
  image_element.src = janken[e_jankenNo];
  enemy_image.appendChild(image_element);

  if (janken[1] === e_janken) {
    result_date = result_dates[0];
  } else if(janken[1] &&  e_janken === '../images/janken_pa.png') {
    result_date = result_dates[1];
  } else {
    result_date = result_dates[2];
  }

  result_func();
}

function click_func3() {
  var enemy_image = document.getElementById("enemy_id")
  enemy_image.innerHTML = "";

  var image_element = document.createElement("img");
  var janken = ['../images/janken_gu.png', '../images/janken_choki.png', '../images/janken_pa.png'];
  var e_jankenNo = Math.floor(Math.random() * janken.length);
  var e_janken = janken[e_jankenNo];
  image_element.src = janken[e_jankenNo];
  enemy_image.appendChild(image_element);

  if (janken[2] === e_janken) {
    result_date = result_dates[0];
  } else if(janken[2] &&  e_janken === '../images/janken_gu.png') {
    result_date = result_dates[1];
  } else {
    result_date = result_dates[2];
  }

  result_func();
}

function result_func() {
  var result = document.getElementById("result_id");
  result.innerHTML = "";
  result.innerHTML = result_date;
}