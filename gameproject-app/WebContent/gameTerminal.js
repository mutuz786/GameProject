var character;
function male() {
	alert("yess");
	fadeOut();
	character=GIF();
	character.load("guyRunning.gif");
	this.canvas.width = 1520;
	this.canvas.height = 270;
	this.context = this.canvas.getContext("2d");
	document.body.insertBefore(this.canvas, document.body.childNodes[0]);
	ctx = myGameArea.context;
	ctx.drawImage(myGif.image, 40, 40, 100, 100);

}
function fadeOut() {
	var fadeTarget = document.getElementById("start");
	var fadeEffect = setInterval(function() {
		if (!fadeTarget.style.opacity) {
			fadeTarget.style.opacity = 1;
		}
		if (fadeTarget.style.opacity > 0) {
			fadeTarget.style.opacity -= 0.1;
		} else {
			clearInterval(fadeEffect);
		}
	}, 40);
}