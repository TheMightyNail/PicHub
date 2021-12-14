// Pexels API authorization
var apiKey= "563492ad6f9170000100000164255fc255754e7795509040e702d9aa";
var apiURL="https://api.pexels.com/v1/";

$(document).ready(function() {



    var inputEl= $("#searchBar");
    // var imageResultsEl = document.querySelector("#results");
    // var searchButtonEl = $("button");
    // var searchText = inputEl[0];
    // console.log(inputEl[0]);
    // var input = ""

    // create a function that when the user inputs text and hits Enter, it will perform the same function as when clicking the search button

    


    // event listener for button clicks
    $("#submit").on("click", function(event){
        event.preventDefault();
        // get value of input from searchBar
        var subject = inputEl.val();
        console.log(subject);
        // fetch data from pexels and return a JSON response
        fetch(`https://api.pexels.com/v1/search?query=${subject}`, {
            headers: {
            Authorization: apiKey
            }
        })
            .then(response => response.json())
            .then(result => {
                console.log(result.photos)
                result.photos.forEach(photo=>{
                    console.log(photo.src);
                    displayImages(result);
                    inputEl.value = "";
                })
            })
            .catch(err => console.log(err))
    });

    // function to display image results
    var displayImages = function(result) {
        var photohtml=""
        result.photos.forEach((image) => {
             photohtml+=` <div class="swiper-slide"> <img src=${image.src.portrait}></div>`
            //var photo=document.createElement("div");
           // photo.innerHTML=`<img src=${image.src.medium}>`;
            // document.querySelector(".swiper-wrapper").appendChild(photohtml);
            
        });
        document.querySelector(".swiper-wrapper").innerHTML=photohtml
    }
    
            

    // GET https://api.pexels.com/v1/search

  // GET https://api.pexels.com/v1/search

  // GET https://api.pexels.com/videos/search
});



// When user submits input in the search bar, dynamically generate images based on the search query
// Reference Pexels for image search queries
// SwiperJS code to create Swiper rows for images
// Use slides per view to limit the amount of images displayed at once, maybe?
// How many images can the page load at once?
// utilize localStorage for persistence - previously searched list by that user, or previously viewed images?
