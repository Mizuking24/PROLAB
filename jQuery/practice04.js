$(function() {
  for (let i = 1; i <= 12; i++) {
    $('.append' + i).click(function() {
      let getDate = $('#input_id').val();
      $('#input_id').val(getDate += $('.append' + i).text());
    })
  }
  for (let i = 1; i <= 3; i++) {
    $('.opera' + i).click(function() {
      let getDate = $('#input_id').val();
      if (getDate === "") {
        getDate.disabled = true;
      } else {
        $('#input_id').val(getDate += $('.opera' + i).text());
      }
    })
  }
  $('.clear').click(function() {
    $('#input_id').val("");
  })
  $('.calc').click(function() {
    let getDate = $('#input_id').val();
    let f = new Function( 'return ' + getDate );
    $('#input_id').val(f().toString());
  })
})