function append(a) { 
  document.querySelector('input').value += a;
}

function update(b) {
  document.querySelector('input').value = b;
}

function calc() {
  var c = document.querySelector('input').value;
  var f = new Function( 'return ' + c );
  console.log(f);
  update( f().toString() )
}

function opera(c) {
  var input_box = document.getElementById("input_id").value;
  if (input_box === "") {
    input_box.disabled = true;
  } else {
    document.querySelector('input').value += c;
  }
  console.log(input_box);
}