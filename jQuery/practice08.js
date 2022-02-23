let cards = [];
let beforeCards = [];
let afterCards = [];
let num = [];
const backCard = "../images/back.png";
let p_count = 0;
let d_count = 0;

for (var i = 1; i <= 13; i++) {
  cards.push("../images/club_" + i + ".png");
  cards.push("../images/diamond_" + i + ".png");
  cards.push("../images/heart_" + i + ".png");
  cards.push("../images/spade_" + i + ".png");
}

window.onload = firstFunc();
function firstFunc() {
  for (let i = 0; i < cards.length; i++) {
    beforeCards.push(cards[i]);
  }
  for (let i = 0; i < 52; i++) {
    let rand = Math.floor(Math.random() * beforeCards.length);
    afterCards.push(beforeCards[rand]);
    beforeCards.splice(rand, 1);
    num.push(Number(afterCards[i].replace(/[^0-9]/g, '')));
  }
}

$('#start').click(function() {
  // ディーラー手札作成
  // 表面カード
  d_appendCard();

  // 裏面カード
  $('<img>').attr({
    src: backCard,
    id: "back",
    class: "cards"
  }).appendTo('#d_cards');

  // プレーヤー手札作成
  // 一枚目と二枚目
  for(let i = 0; i < 2; i++) {
    p_appendCard();
  }

  // スタート後ボタン無効
  $('#start').prop("disabled", true);

  // 「カードを引く」と「勝負」ボタンを生成
  btn("draw");
  btn("vs");
  $('#draw').text("カードを引く");
  $('#vs').text("勝負");

  // draw関数
  $('#draw').click(function() {
    if(p_count <= 21) {
      // p_countが21以下の場合はカードを引く
      p_appendCard();
    } else {
      // p_countが21を越えた場合battle()を行う
      $('#draw').prop("disabled", true);
    }
    console.log(p_count);
  });

  // battle関数
  $('#vs').click(function() {
    // ディーラーの裏面のカードを表にする
    $('#back').attr('src', afterCards[0]);
    changeNum();
    d_count += num[0];
    afterCards.shift();
    num.shift();

    // ディーラーの手札の合計が17以上、21以下になる様にカードを出力する
    while (d_count < 17) {
      d_appendCard();
    }
    console.log(d_count);

    // 結果判定
    if (p_count > 21) {
      $('#result').text("バースト！あなたの負けです。");
    } else if (d_count > 21) {
      $('#result').text("バースト！あなたの勝ちです。");
    } else if (p_count === d_count) {
      $('#result').text("引き分け。");
    } else if (p_count > d_count) {
      $('#result').text("あなたの勝ちです。");
    } else {
      $('#result').text("あなたの負けです。");
    }

    // 判定後ボタンを無効化
    $('#draw').prop("disabled", true);
    $('#vs').prop("disabled", true);
  });
});

// 数字変換
function changeNum() {
  if (num[0] === 1 && p_count <= 10) {
    num[0] = 11;
  } else if (num[0] === 1 && p_count > 10) {
    num[0] = 1;
  } else if (num[0] >= 10) {
    num[0] = 10;
  }
}

// プレーヤーカード追加関数
function p_appendCard() {
  $('<img>').attr({
    src: afterCards[0],
    id: "back",
    class: "cards"
  }).appendTo('#p_cards');
  cardSize();
  changeNum();
  p_count += num[0];
  afterCards.shift();
  num.shift();
}

// ディーラーカード追加関数
function d_appendCard() {
  $('<img>').attr({
    src: afterCards[0],
    class: "cards"
  }).appendTo('#d_cards');
  cardSize();
  changeNum();
  d_count += num[0];
  afterCards.shift();
  num.shift();
}

// ボタン生成関数
function btn(a) {
  $('<button>').attr({
    id: a
  }).appendTo('#buttons');
}

// カードサイズ関数
function cardSize() {
  $('.cards').css('width', '100');
  $('.cards').css('height', '130');
}