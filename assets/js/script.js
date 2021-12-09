// Pexels API authorization
var apiKey= "563492ad6f9170000100000164255fc255754e7795509040e702d9aa";
var apiURL="https://api.pexels.com/v1/";

var inputEl= $("submit");
var searchButtonEl = $("button");

var searchText ="";
// var input = ""

// create a function that when the user inputs text and hits Enter, it will perform the same function as when clicking the search button
var submitSearch = function() {
    $("input").on("input", function(event){
        event.preventDefault();
        search_text=event.target.value;
        console.log(search_text);
    });
}



// event listener for button clicks
$("button").on("click", function(){
    console.log("This is a button");
    console.log(inputEl)
});



// When user submits input in the search bar, dynamically generate images based on the search query
// Reference Pexels for image search queries
// SwiperJS code to create Swiper rows for images
// Use slides per view to limit the amount of images displayed at once, maybe?
// How many images can the page load at once?
// utilize localStorage for persistence - previously searched list by that user, or previously viewed images?
