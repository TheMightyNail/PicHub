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

    

    var pictureClick;
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
                result.photos.forEach((photo, index)=>{
                    console.log(result.photos.length)
                    console.log(photo.src);
                    displayImages(result);
                    inputEl.value = "";
                    
                    // event listener to click on images
                    for (const property in pictureClick) {
                        console.log(pictureClick[property]);
                        pictureClick[property].onclick = function(){
                            console.log("clicked");
                            // need logic to display modal with image original size OR link to a different page that displays entire image
                        }
                      }
                })
                
            })
            .catch(err => console.log(err))
    });


    

    
        // event listener for button clicks
        //$("#submit").on("click", function(event){
           // event.preventDefault();
            // get value of input from searchBar
            //var subject = inputEl.val();
           // console.log(subject);
            // fetch data from pexels and return a JSON response
           // fetch(`https://api.pexels.com/videos/search?query=${subject}`, {
               // headers: {
                //Authorization: apiKey
               // }
           // })
    
                //.then(response => response.json())
                //.then(result => {
                   // console.log(result.video)
                   // result.videos.forEach(video=>{
                       // console.log(video.src);
                       // displayImages(result);
                        //inputEl.value = "";
                    //})
               // })
               // .catch(err => console.log(err))

    // function to display image results
    var displayImages = function(result) {
        var photohtml=""
        result.photos.forEach((image) => {
             photohtml+=` <div class="swiper-slide"> <img class="picButton" src=${image.src.portrait}></div>`
            pictureClick = document.getElementsByClassName("picButton")
        });
        document.querySelector(".swiper-wrapper").innerHTML=photohtml
    }
    
            

    // GET https://api.pexels.com/v1/search

  // GET https://api.pexels.com/videos/search
});
{
   // "name": "Christian", 
   // "height" : "20px",
   //"width" : 80
}
//var myarray=[1,2,3]
//console.log (myarray) 