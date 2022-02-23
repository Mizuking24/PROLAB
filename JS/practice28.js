var cards = [];
var beforeCards = [];
var afterCards = [];
var num = [];
var backCard = "../images/back.png";
var d_card = document.getElementById("d_cards");
var p_card = document.getElementById("p_cards");
var p_count = 0;
var d_count = 0;

for (var i = 1; i <= 13; i++) {
  cards.push("../images/club_" + i + ".png");
  cards.push("../images/diamond_" + i + ".png");
  cards.push("../images/heart_" + i + ".png");
  cards.push("../images/spade_" + i + ".png");
}

window.onload = firstFunc();
function firstFunc() {
  for (var i = 0; i < cards.length; i++) {
    beforeCards.push(cards[i]);
  }
  for (var i = 0; i < 52; i++) {
    var rand = Math.floor(Math.random() * beforeCards.length);
    afterCards.push(beforeCards[rand]);
    beforeCards.splice(rand, 1);
    num.push(Number(afterCards[i].replace(/[^0-9]/g, '')));
  }
}

function start() {
  // ディーラー手札作成
  // 一枚目
  d_appendCard();

  // 裏面カード
  var d_backCard = document.createElement("img");
  d_backCard.src = backCard;
  cardSize(d_backCard);
  d_backCard.id = "back";
  d_card.appendChild(d_backCard);

  // プレーヤー手札作成
  // 一枚目と二枚目
  for(var i = 0; i < 2; i++) {
    p_appendCard();
  }

  // スタート後ボタン無効
  var button = document.getElementById("start");
  button.disabled = true;

  // 「カードを引く」と「勝負」ボタンを生成
  but(draw, "カードを引く", "draw");
  but(battle, "勝負", "vs");

}

function draw() {
  if(p_count <= 21) {
    // p_countが21以下の場合はカードを引く
    p_appendCard();
  } else {
    // p_countが21を越えた場合battle()を行う
    battle();
  }
  console.log(p_count);
}

function battle() {
  // ディーラーの裏面のカードを表にする
  var back_image = document.getElementById("back");
  back_image.src = afterCards[0];
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
  var result = document.getElementById("result");
  if (p_count > 21) {
    result.textContent = "バースト！あなたの負けです。";
  } else if (d_count > 21) {
    result.textContent = "バースト！あなたの勝ちです。";
  } else if (p_count === d_count) {
    result.textContent = "引き分け。";
  } else if (p_count > d_count) {
    result.textContent = "あなたの勝ちです。";
  } else {
    result.textContent = "あなたの負けです。";
  }

  // 判定後ボタンを無効化
  var draw_button = document.getElementById("draw");
  var vs_button = document.getElementById("vs");
  draw_button.disabled = true;
  vs_button.disabled = true;
}

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
  var Card = document.createElement("img");
  Card.src = afterCards[0];
  changeNum();
  p_count += num[0];
  afterCards.shift();
  num.shift();
  cardSize(Card);
  p_card.appendChild(Card);
}

// ディーラーカード追加関数
function d_appendCard() {
  var Card = document.createElement("img");
  Card.src = afterCards[0];
  changeNum();
  d_count += num[0];
  afterCards.shift();
  num.shift();
  cardSize(Card);
  d_card.appendChild(Card);
}

// カードサイズ
function cardSize(a) {
  a.style.width = '100px';
  a.style.height = '130px';
}

function but(a, b, c) {
  var buttons = document.getElementById("buttons")
  var button = document.createElement("button")
  button.onclick = a;
  button.textContent = b;
  button.id = c;
  buttons.appendChild(button);
}