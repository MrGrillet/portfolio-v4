
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

// Slider
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
	setInterval(changeImage, 4000);
