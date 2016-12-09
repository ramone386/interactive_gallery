//Problem: user when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - LIghtBox

var $overlay = $('<div id="overlay"></div>'); // $overlay just delcaring that this is a jquery object
var $image = $("<img>");
var $caption = $("<p></p>");

//An image to overlay
$overlay.append($image);

//A Caption to overlay
$overlay.append($caption); // caption will appear after image

//Add overlay
$("body").append($overlay); // calling the variable overlay


//Capture the click event on a link to an image
$("#imageGallery a").click(function(event){
  event.preventDefault(); // Opens up the image as a lightbox not a link so use prevent default
  var imageLocation = $(this).attr("href");
  //Update overlay with the image linked in the link
  $image.attr("src", imageLocation);


  //Show the overlay.
  $overlay.show();
  
  //Get child's alt attribute and set caption
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);

}); // Selecting the ID'd images and anchor(a) elements

//When overlay is clicked
$overlay.click(function(){
  //Hide overlay
  $overlay.hide();
})
  