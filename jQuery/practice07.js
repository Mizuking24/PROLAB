// カード画像配列
let cards = [];
// シャフルに使う配列
let beforeCards = [];
let afterCards = [];
// 裏面画像
const backCard = "../images/back.png";
// 一枚目かどうか判定するboolean
let firstCrick = true;
// 一枚目のカードを格納する変数
let firstCard;
// タイマー変数
let timer;

// 画像をcards配列に格納
for (let i = 1; i <= 13; i++) {
  cards.push("../images/club_" + i + ".png");
  cards.push("../images/diamond_" + i + ".png");
  cards.push("../images/heart_" + i + ".png");
  cards.push("../images/spade_" + i + ".png");
}

// ロード時にfirstFuncを行う(シャッフル)
window.onload = firstFunc();
function firstFunc() {
  for (let i = 0; i < cards.length; i++) {
    beforeCards.push(cards[i]);
  }
  for (let i = 0; i < 52; i++) {
    let rand = Math.floor(Math.random() * beforeCards.length);
    afterCards.push(beforeCards[rand]);
    beforeCards.splice(rand, 1);
  }
};

// カードの裏面を並べる
for (let i = 0; i < cards.length; i++) {
  $('<img>').attr({
    src: backCard,
    id: "back",
    class: "cards",
    name: afterCards[i],
  }).appendTo('#cards_id');
};
$('.cards').css('width', '100');
$('.cards').css('height', '130');


$(document).on("click", function (e) {
  if (timer) {
    return;
  }
  selectCard = e.target;
  if (selectCard.id == "back") {
    selectCard.src = selectCard.name;
    selectCard.id = "";
  } else {
    return;
  }
  if (firstCrick === true) {
    firstCard = selectCard;
    firstCrick = false;
  } else {
    if (firstCard.name.substr(-6, 2) === selectCard.name.substr(-6, 2)) {
      timer = setTimeout(function() {
        $(firstCard).css('visibility', 'hidden');
        $(selectCard).css('visibility', 'hidden');
        timer = null;
      }, 500);
      firstCrick = true;
    } else {
      timer = setTimeout(function() {
        firstCard.src = backCard;
        firstCard.id = "back";
        selectCard.src = backCard;
        selectCard.id = "back";
        timer = null;
      }, 500);
      firstCrick = true;
    }
  }
});