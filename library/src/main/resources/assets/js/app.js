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

/*adding a fix to page reload issue*/
$(document).ready(function() {
        var books = document.getElementById("books");
        for (var i = 0, row; row = books.rows[i]; i++) {
                var bookStatus=books.rows[i].cells[4].innerHTML;
                if (bookStatus=="lost")
                {
                        var newIsbn=books.rows[i].cells[0].innerHTML;
                        document.getElementById(newIsbn).disabled = true;
                }
        }
}); 
