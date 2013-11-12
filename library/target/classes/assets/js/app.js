$(":button").click(function() {
	var isbn = this.id;
	var puturl = 'http://localhost:8001/library/v1/books/'+isbn+'?status=lost';
	var btnisbn = ':button#'+isbn;
	$.ajax({
		  url: puturl,
		  type: 'PUT',
		  success: function(data) {
			  alert('About to report lost on ISBN ' + isbn);
			  location.reload();
		  }
		});
	$(btnisbn).attr("disabled",true);
});