var galleryIndex = 1;
showPics(galleryIndex);

function plusPic(n) {
	showPics(galleryIndex += n);
}

function currentPic(n) {
	showPics(galleryIndex = n);
}

function showPics(n) {
	var i;
	var pics = document.getElementsByClassName("mySlides");
	if(n > pics.length) {
		galleryIndex = 1
	}
	if(n < 1) {
		galleryIndex = pics.length
	}
	for(i = 0; i < pics.length; i++) {
		pics[i].style.display = "none";
	}
	pics[galleryIndex-1].style.display = "block";
}

function myFunction () {
	var x = document.getElementById("myTopNav");
	if (x.className === "navbar") {
		x.className += " responsive";
	} 	
	else {
		x.className = "navbar";
	}
}