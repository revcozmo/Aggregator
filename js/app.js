//Initialize variables
var zipCodeToSearch;
var searchTermToSearch;


$('#upBox').on('click', function() {
  //Animate to the top section
  $('html, body').animate({
    scrollTop: $("#mainWindow").offset().top
  }, 1000);
})

$('#submit').on('click', function() {
  console.log("button clicked");

  //obtain zip code
  zipCodeToSearch = $('#zipCode').val().trim();
  //Verify the zip code is a 5 digit numeric value before proceeding
  if (isNaN(zipCodeToSearch) == false && zipCodeToSearch > 0) {
    
    //obtain search term
    searchTermToSearch = $('#searchTerm').val().trim();

    //call seatgeek API with necessary info
    displaySportInfo(searchTermToSearch,zipCodeToSearch);

    //call betting odds API with necessary info
    getSportsObject(searchTermToSearch);

    //update page with results from JSON odds API
    // $('#bettingOdds').html("Search JSONOdds for " + searchTermToSearch);

    $.get('api/jsonOdds.php?action=' + searchTermToSearch, function(data) {
      $('#bettingOdds').html(data);
    });
  }

  changeBackground(searchTermToSearch);

  //Animate to the data section
  $('html, body').animate({
    scrollTop: $("#APIData").offset().top
  }, 1000);

});

function checkZipCode(zipCodeToSearch){
  if (zipCodeToSearch.length == 5) {
    if (parseInt(zipCodeToSearch) != NaN) {
      console.log("is a 5 digit number");
      return false;
    }
  } else {
    console.log("enter a valid zip code");
  }

}

function changeBackground(sport) {
  // $('#mainWindow').css("background-image", "url(img/" + sport + ".jpg)");  
  $('#APIData').css("background-image", "url(img/" + sport + ".jpg)");  
}