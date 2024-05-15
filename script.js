const images = ["image1.jpg", "image2.jpg", "image3.jpg"];
const body = document.body;

let currentIndex = 0;
function changBackggound() {
  body.style.backgroundImage = `url('images/${images[currentIndex]}')`;

  currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changBackggound, 5000);

// function function1() {

// }

// //fadeToggle function is already defined in the jquery file

// function func2() {
//     //instead of = $(element name).action()
//     //document.getElementsByTagName(element name)

//     // to access a particular Id, use the hash before the particular element name
//     $("#div1").css('background-color', 'orange');
//     // to access all elements, remove the hash and use the generic css name
//     //$("div").css('background-color', 'orange');
// }

// function func4() {
//     document.getElementById("img1").style.width="1000px"
// }

$("document").ready(function () {
  $("#btn").click(function () {
    $("#display").slideToggle(3000);
    //slideUP, show, hide, fadeIn, fadeOut, slideDown, stop
  });
});
