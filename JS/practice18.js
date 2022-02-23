function A(country) {
  switch (country) {
    case "日本":
      return "東京"
    
    case "アメリカ":
      return "ワシントンD.C."

    case "イギリス":
      return "ロンドン"

    default :
      return "該当なし";
  }
}

var country_id1 = document.getElementById("countryid1");
country_id1.innerHTML = A("日本");

var country_id2 = document.getElementById("countryid2");
country_id2.innerHTML = A("アメリカ");

var country_id3 = document.getElementById("countryid3");
country_id3.innerHTML = A("イギリス");
