var formTexts = [];
var checkTexts = [];
var textLength = [];
var textLists = [
  "赤パジャマ、青パジャマ、黄パジャマ",
  "隣の客はよく柿食う客だ",
  "東京特許許可局",
  "あぶりカルビ",
  "生麦、生米、生卵"
];
var textLists2 = [];

var count = 0;
var miss = 0;

function judge_func() {
  count++;
  if ( count === 6) {
    var button = document.getElementById("ok_id");
    button.disabled = true;
    formTexts.push(document.getElementById("input_id").value.split(''));
    document.getElementById("input_id").value = '';

    for (var v = 0; v < textLists2.length; v++) {
      for (var i = 0; i < checkTexts[v].length; i++) {
        if (checkTexts[v][i] != formTexts[v + 1][i]) {
          miss++;
        }
      }
    }
    if (miss === 0) {
      document.getElementById("text_id").textContent = "完璧";
    } else if (miss >= 1 && miss <= 3) {
      document.getElementById("text_id").textContent = "おしい";
    } else if (miss >= 4 && miss <= 8) {
      document.getElementById("text_id").textContent = "まだまだです";
    } else {
      document.getElementById("text_id").textContent = "頑張りましょう";
    }

  } else if (count === 1) {
    // okボタンに変更
    document.getElementById("ok_id").textContent = "ok";

    // text_idにお題配列の要素をを表示
    var textBox = document.getElementById("text_id");
    textBox.textContent = textLists[0];

    clickStop();
    timer_func();

    checkTexts.push(textLists[0].split(''));
    textLength.push(textLists[0].split(''));
    textLists2.push(textLists[0]);

    // textLists[0]を削除してtextList[1]を[0]にする
    textLists.shift();

    // 入力した要素を分解して配列formTextに格納
    formTexts.push(document.getElementById("input_id").value.split(''));

    // 初期化
    document.getElementById("input_id").value = '';

  } else {
    // okボタンに変更
    document.getElementById("ok_id").textContent = "ok";

    // text_idにお題配列の要素をを表示
    var textBox = document.getElementById("text_id");
    textBox.textContent = textLists[0];

    clickStop();
    timer_func();

    textLength.shift();

    checkTexts.push(textLists[0].split(''));
    textLength.push(textLists[0].split(''));
    textLists2.push(textLists[0]);

    // textLists[0]を削除してtextList[1]を[0]にする
    textLists.shift();

    // 入力した要素を分解して配列formTextに格納
    formTexts.push(document.getElementById("input_id").value.split(''));

    // 初期化
    document.getElementById("input_id").value = '';
  }
}

var setTime;

function timer_func() {
  var timeOver = function() {
    miss += textLength[0].length;
    console.log("10秒経過しました");
    console.log(miss);
  }
  var timerId = setTimeout(timeOver,10000);
  setTime = timerId;
}
function clickStop() {
  clearTimeout(setTime);
  console.log("stop");
}
