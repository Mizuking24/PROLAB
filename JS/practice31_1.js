let  search = () => {
  let api = 'https://zipcloud.ibsnet.co.jp/api/search?zipcode=';
  let input = document.getElementById("formId");
  let address1 = document.getElementById("address1");
  let address2 = document.getElementById("address2");
  let address3 = document.getElementById("address3");
  let param = input.value.replace("-", "");
  let url = api + param;

  fetch(url)
  .then((a) => {
    return a.json();
  })
  .then((a) => {
      Example(a);
  })

  function Example(jsonObj){
    const data = jsonObj.results[0];
    address1.textContent = data.address1;
    address2.textContent = data.address2;
    address3.textContent = data.address3;
   }
}

