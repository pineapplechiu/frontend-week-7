$(function() {
  
  var i = 0;
  var searchTerm = '';
  
  function getBooks(subject, startIndex){
    $.get('https://www.googleapis.com/books/v1/volumes', {
      q: subject,
      startIndex: startIndex,
      maxResults: 20
    }, 
  function(data) {
    //display all 20 results on page
    });   
  };

  function search(){
    searchTerm = $('.searchBox').val();
    getBooks(searchTerm, i); 
  }

  $('.searchBtn').click(search);
  
});