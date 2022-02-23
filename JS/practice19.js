function A() {
  var land = Math.floor(Math.random() * 12) + 1
  return land
}

function B(zodiac) {
  switch (zodiac) {
    case 1:
      return "ネズミ"
    
    case 2:
      return "ウシ"

    case 3:
      return "トラ"

    case 4:
      return "ウサギ"

    case 5:
      return "タツ"

    case 6:
      return "ヘビ"

    case 7:
      return "ウマ"

    case 8:
      return "ヒツジ"

    case 9:
      return "サル"

    case 10:
      return "トリ"

    case 11:
      return "イヌ"

    case 12:
      return "イノシシ"
  }
}

var zodiac_id = document.getElementById("zodiacid");
zodiac_id.innerHTML = B(A());
