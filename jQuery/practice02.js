$(function() {
  $('#submitId').click(function() {
    $('#modal-container').fadeIn();
    let name = $('#formName').val();
    $('#modal-name').html(name);
    let kana = $('#formKana').val();
    $('#modal-kana').html(kana);
    let postCode = $('#formPostCode').val();
    $('#modal-addressCode').html(postCode);
    let address = $('#formAddress').val();
    let address2 = $('#formAddress2').val();
    $('#modal-address').html(address + address2);
    let sex = $('[name = "sex"]:checked').val();
    $('#modal-sex').html(sex);
  })
  $('.modal-close').click(function() {
    $('#modal-container').fadeOut();
  })

  $('.modal-wrapper').click(function(e) {
    if(!$(e.target).closest('.modal').length) {
      $('#modal-container').fadeOut();
    }
	});
})