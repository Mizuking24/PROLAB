function name_vali() {
  var formName = document.getElementById("nameId").value;
  var err = document.getElementById("name_error");
  err.innerHTML = "";
  if (formName.match(/^[^\x01-\x7E]{1,20}$/)) {
  } else {
    err.style.color = "red";
    err.innerHTML = "全角1〜20文字で入力してください";
  }
}

function email_vali() {
  var formEmail = document.getElementById("emailId").value;
  var err = document.getElementById("email_error");
  err.innerHTML = "";
  if (formEmail.match(/^[a-zA-Z0-9_+-]+(.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/)) {
  } else {
    err.style.color = "red";
    err.innerHTML = "メールアドレスが不正です";
  }
}

function conf_vali() {
  var formEmail = document.getElementById("emailId").value;
  var formConfEmail = document.getElementById("emailConfId").value;
  var err = document.getElementById("emailConf_error");
  err.innerHTML = "";
  if (formEmail === formConfEmail) {
  } else {
    err.style.color = "red";
    err.innerHTML = "入力したメールアドレスと異なっています";
  }
}

function sub() {
  var formName = document.getElementById("nameId").value;
  var formEmail = document.getElementById("emailId").value;
  var formConfEmail = document.getElementById("emailConfId").value;
  var nameErr = document.getElementById("name_error");
  var emailErr = document.getElementById("email_error");
  var confErr = document.getElementById("emailConf_error");
  var radioErr = document.getElementById("radio_error");
  if (formName == "") {
    nameErr.style.color = "red";
    nameErr.innerHTML = "値を入力してください";
  }
  if (formEmail == "") {
    emailErr.style.color = "red";
    emailErr.innerHTML = "値を入力してください";
  }
  if (formConfEmail == "") {
    confErr.style.color = "red";
    confErr.innerHTML = "値を入力してください";
  }

  var flag = false;
  radioErr.innerHTML = "";
  for (var i = 0; i < 2; i++) {
    if (document.form.sex[i].checked) {
      flag = true;
    }
  }
  if (!flag) {
    radioErr.style.color = "red";
    radioErr.innerHTML = "選択して下さい";
  }
}