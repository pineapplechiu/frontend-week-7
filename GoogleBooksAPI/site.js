$(function() {
  var i = 0;
  var searchTerm = '';
  function getBooks(subject, startIndex) {
    $.get('https://www.googleapis.com/books/v1/volumes', {
      q: subject,
      startIndex: startIndex,
      maxResults: 20
    }, 
    function(data) {
      console.log(data); // where in the array?
      i = data.items.length;
      $.each(data.items, function(index, value) {
        var div = $('<div>');
        div.appendTo('#results');
        // data is stored in volumnInfo
        var title = value.volumeInfo.title;
        var author = value.volumeInfo.authors;
        var pubDate = value.volumeInfo.publishedDate;
        div.html(title + '</br>' + 'by ' + author + '</br>' + pubDate + '</br>');
        var img = $('<img>');
        img.attr('src', value.volumeInfo.imageLinks.thumbnail);
        img.appendTo(div);
      });
    });
  }
  function search() {
    searchTerm = $('.searchBox').val();
    getBooks(searchTerm, i); 
  }
  
  $('.searchBtn').click(search);

  $('#my_button').click(
  function() {
    getBooks(searchTerm, i);
  })
})  