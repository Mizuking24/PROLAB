const textLists = [
  "赤パジャマ、青パジャマ、黄パジャマ",
  "隣の客はよく柿食う客だ",
  "東京特許許可局",
  "あぶりカルビ",
  "生麦、生米、生卵"
];
let formTexts = [];
let checkTexts = [];
let textLength = [];
let textLists2 = [];
let count = 0;
let miss = 0;
let setTime;

$('#ok_id').click(function() {
  count++;
  if ( count === 6) {
    $('#ok_id').prop("disabled", true);

    formTexts.push($('#input_id').val().split(''));
    $('#input_id').val("");

    for (let v = 0; v < textLists2.length; v++) {
      for (var i = 0; i < checkTexts[v].length; i++) {
        if (checkTexts[v][i] != formTexts[v + 1][i]) {
          miss++;
        }
      }
    }
    if (miss === 0) {
      $('#text_id').text("完璧");
    } else if (miss >= 1 && miss <= 3) {
      $('#text_id').text("おしい");
    } else if (miss >= 4 && miss <= 8) {
      $('#text_id').text("まだまだです");
    } else {
      $('#text_id').text("頑張りましょう");
    }

  } else if (count === 1) {
    // okボタンに変更
    $('#ok_id').text("ok");

    // text_idにお題配列の要素をを表示
    $('#text_id').text(textLists[0]);

    // clickStop();
    // timer_func();
    $(function() {
      clearTimeout(setTime);
      console.log("stop");
    });
    $(function() {
      let timeOver = () => miss += textLength[0].length;
        // miss += textLength[0].length;
        // console.log("10秒経過しました");
        // console.log(miss);
      // };
      let timerId = setTimeout(timeOver,10000);
      setTime = timerId;
    });

    checkTexts.push(textLists[0].split(''));
    textLength.push(textLists[0].split(''));
    textLists2.push(textLists[0]);

    // textLists[0]を削除してtextList[1]を[0]にする
    textLists.shift();

    // 入力した要素を分解して配列formTextに格納
    formTexts.push($('#input_id').val().split(''));
    // 初期化
    $('#input_id').val("");
  } else {
    // okボタンに変更
    $('#ok_id').text("ok");

    // text_idにお題配列の要素をを表示
    $('#text_id').text(textLists[0]);

    // clickStop();
    // timer_func();
    $(function() {
      clearTimeout(setTime);
      console.log("stop");
    });
    $(function() {
      let timeOver = () => miss += textLength[0].length;
        // console.log("10秒経過しました");
        // console.log(miss);
      let timerId = setTimeout(timeOver,10000);
      setTime = timerId;
    });

    textLength.shift();

    checkTexts.push(textLists[0].split(''));
    textLength.push(textLists[0].split(''));
    textLists2.push(textLists[0]);

    // textLists[0]を削除してtextList[1]を[0]にする
    textLists.shift();

    // 入力した要素を分解して配列formTextに格納
    formTexts.push($('#input_id').val().split(''));

    // 初期化
    $('#input_id').val("");
  }
})

// function timer_func() {
//   let timeOver = function() {
//     miss += textLength[0].length;
//     console.log("10秒経過しました");
//     console.log(miss);
//   };
//   let timerId = setTimeout(timeOver,10000);
//   setTime = timerId;
// }
// function clickStop() {
//   clearTimeout(setTime);
//   // console.log("stop");
// }