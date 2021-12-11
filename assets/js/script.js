// Pexels API authorization
var apiKey= "563492ad6f9170000100000164255fc255754e7795509040e702d9aa";
var apiURL="https://api.pexels.com/v1/";

$(document).ready(function() {



var inputEl= $(".input");
// var searchButtonEl = $("button");
// var searchText = inputEl[0];
// console.log(inputEl[0]);
// var input = ""

// create a function that when the user inputs text and hits Enter, it will perform the same function as when clicking the search button

var subject = inputEl[0];


// event listener for button clicks
$("#submit").on("click", function(event){
    event.preventDefault();
    inputEl[0].value = "";
    console.log(subject);
    fetch(`https://api.pexels.com/v1/search?query=${subject}`, {
        headers: {
          Authorization: apiKey
        }
    })
        .then(response => response.json())
        .then(result => {
            console.log(result.photos)
            result.photos.forEach(photo=>{
                console.log(photo.src.large);
            })
        })
        .catch(err => console.log(err))
});

// GET https://api.pexels.com/v1/search

});

// When user submits input in the search bar, dynamically generate images based on the search query
// Reference Pexels for image search queries
// SwiperJS code to create Swiper rows for images
// Use slides per view to limit the amount of images displayed at once, maybe?
// How many images can the page load at once?
// utilize localStorage for persistence - previously searched list by that user, or previously viewed images?
