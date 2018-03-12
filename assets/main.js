
// Navigation Toggle
var navStatus = true;
function toggleNav() {

  if (navStatus === true) {
    document.getElementById('navigation-bar').style.right = "0px";
    navStatus = false;
  } else {
    document.getElementById('navigation-bar').style.right = "-300px";
    navStatus = true;
  };
};

// Auto Slider
var myImage = document.getElementById("slide-image");
	var ArrayImage = ["background-image: url(img/laptop.png);", "background-image: url(img/1.jpg);", "background-image: url(img/2.jpg);"];
	var imageIdex = 0;
	function changeImage(){
		myImage.setAttribute("style", ArrayImage[imageIdex]);
		imageIdex++;
		if (imageIdex >= ArrayImage.length){
			imageIdex = 0;
		}
	}
	setInterval(changeImage, 2000);


// Manual Slider
  var slideIndex = 1;
  showDivs(slideIndex);

  function plusDivs(n) {
    showDivs(slideIndex += n);
  }

  function currentDiv(n) {
    showDivs(slideIndex = n);
  }

  function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("slides");
    var dots = document.getElementsByClassName("demo");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }

    x[slideIndex-1].style.display = "block";
  }
