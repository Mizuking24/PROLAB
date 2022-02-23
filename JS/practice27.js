// カード画像配列
var cards = [];
// シャフルに使う配列
var beforeCards = [];
var afterCards = [];
// 裏面画像
var backCard = "../images/back.png";
// 一枚目かどうか判定するboolean
var firstCrick = true;
// 一枚目のカードを格納する変数
var firstCard;
// タイマー変数
var timer;

// 画像をcards配列に格納
for (var i = 1; i <= 13; i++) {
  cards.push("../images/club_" + i + ".png");
  cards.push("../images/diamond_" + i + ".png");
  cards.push("../images/heart_" + i + ".png");
  cards.push("../images/spade_" + i + ".png");
}
// console.log(cards);

// ロード時にfirstFuncを行う(シャッフル)
window.onload = firstFunc();
function firstFunc() {
  for (var i = 0; i < cards.length; i++) {
    beforeCards.push(cards[i]);
    // console.log(beforeCards.length);
  }
  for (var i = 0; i < 52; i++) {
    var rand = Math.floor(Math.random() * beforeCards.length);
    afterCards.push(beforeCards[rand]);
    beforeCards.splice(rand, 1);
    // console.log(afterCards);
  }
}

// カードの裏面を並べる
var cards_field = document.getElementById("cards_id");
for (var i = 0; i < cards.length; i++) {
  var back_image = document.createElement("img");
  back_image.src = backCard;
  back_image.style.width = '100px';
  back_image.style.height = '130px';
  back_image.id = "back";
  back_image.cardFace = afterCards[i];
  back_image.onclick = turn;
  cards_field.appendChild(back_image);
  // console.log(back_image.cardFace);
};

function turn(e) {
  if (timer) {
    return;
  }
  selectCard = e.target;
  console.log(selectCard);
  if (selectCard.id == "back") {
    selectCard.src = selectCard.cardFace;
    selectCard.id = "";
  } else {
    return;
  }
  if (firstCrick === true) {
    firstCard = selectCard;
    // console.log(firstCard);
    firstCrick = false;
    // console.log("一回目");
  } else {
    if (firstCard.cardFace.substr(-6, 2) === selectCard.cardFace.substr(-6, 2)) {
      timer = setTimeout(function() {
        firstCard.style.visibility = "hidden";
        selectCard.style.visibility = "hidden";
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
}



