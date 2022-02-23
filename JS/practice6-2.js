var elem1 = document.getElementById("clickid");
elem1.addEventListener("click", function(){
  console.log('クリックされた！（イベントリスナー）');
});

var elem2 = document.getElementById("blurid");
elem2.addEventListener("blur", function(){
  console.log('フォーカスが外れた！（イベントリスナー）');
});

var elem3 = document.getElementById("focusid");
elem3.addEventListener("focus", function(){
  console.log('フォーカスが当たった！（イベントリスナー）');
});

var elem4 = document.getElementById("changeid");
elem4.addEventListener("change", function(){
  console.log('内容が変更された！（イベントリスナー）');
});

var elem5 = document.getElementById("selectid");
elem5.addEventListener("select", function(){
  console.log('選択された！（イベントリスナー）');
});

var elem6 = document.getElementById("submitid");
elem6.addEventListener("submit", function(){
  console.log('送信した！（イベントリスナー）');
});

var elem7 = document.getElementById("resetid");
elem7.addEventListener("reset", function(){
  console.log('リセットした！（イベントリスナー）');
});

window.onload = function(){
  console.log('読み込みました！');
}

var elem8 = document.getElementById("dblclickid");
elem8.addEventListener("dblclick", function(){
  console.log('ダブルクリックしました！（イベントリスナー）');
});

var elem9 = document.getElementById("keyupid");
elem9.addEventListener("keyup", function(){
  console.log('キーを上げました！（イベントリスナー）');
});

var elem10 = document.getElementById("keydownid");
elem10.addEventListener("keydown", function(){
  console.log('キーを押しました！（イベントリスナー）');
});

var elem11 = document.getElementById("mouseoutid");
elem11.addEventListener("mouseout", function(){
  console.log('マウスが離れました！（イベントリスナー）');
});

var elem12 = document.getElementById("mouseoverid");
elem12.addEventListener("mouseover", function(){
  console.log('マウスが乗りました！（イベントリスナー）');
});

var elem13 = document.getElementById("mouseupid");
elem13.addEventListener("mouseup", function(){
  console.log('マウスを上げました！（イベントリスナー）');
});

var elem14 = document.getElementById("mousedownid");
elem14.addEventListener("mousedown", function(){
  console.log('マウスでクリックしました！（イベントリスナー）');
});

var elem15 = document.getElementById("mousemoveid");
elem15.addEventListener("mousemove", function(){
  console.log('マウスが動いています！（イベントリスナー）');
});