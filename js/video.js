var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	console.log(video.currentTime)
	document.querySelector("#volume").innerHTML=video.volume*100 +"%"
});

// progressively slower make it work later
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Old speed is" + video.playbackRate);
	video.playbackRate *= .95;
	console.log("New speed is" + video.playbackRate);

});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up Video");
	video.playbackRate /= .95;
	console.log("New speed is" + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Current location is " + video.currentTime)

	if (video.currentTime < video.duration - 15){
		video.currentTime += 15
	}

	else {
		video.currentTime = 0
		console.log("Starting at beginning")
	}
});

document.querySelector("#mute").addEventListener("click", function() {
	if(video.muted){
		this.innerHTML = "Mute"
		video.muted = false
		console.log("Muted")
	}

	else{
		this.innerHTML = "Unmute"
		video.muted = true
		console.log("Unmuted")
	}
});







