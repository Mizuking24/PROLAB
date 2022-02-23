$(function() {
  $('#exampleModal').on('show.bs.modal', function () {
    var title = $('#formTitle').val()
    var body = $('#formBody').val()
    var modal = $(this)
    modal.find('#modalTitle').text(title)
    modal.find('#modalBody').text(body)
  })
})