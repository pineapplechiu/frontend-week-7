

var maxResults = 20;
var startIndex = 0;

$(document).ready(function(){
    var searchterm; 

    $("#button").click(function(){
        searchterm = $("#term").val();
        find();
    });

    function find(){
    $.get("https://www.googleapis.com/books/v1/volumes?q=" + searchterm)
       .done(function(data){
       $("#results").text(data.items[0].volumeInfo.authors[0]);
       });

      //   console.log(find.text);
      // });
   }

   //  $.get("https://www.googleapis.com/books/v1/volumes", {q: searchterm, startIndex: start, maxResults: num-of-results}, function(data){ do something here });

    
});