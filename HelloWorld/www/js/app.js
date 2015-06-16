document.addEventListener("deviceready", init, false);
function init() {

	function onSuccess(imageData) {
		console.log('success');
		var image = document.getElementById('img');
		image.src = imageData;
		console.log(imageData);
	}

	function onFail(message) {
		alert("Vous n'avez pas sélectionné de photo.");
	}	

	//Use from Camera
	document.querySelector("#takePicture").addEventListener("touchend", function() {
		navigator.camera.getPicture(onSuccess, onFail, { 
			quality: 75,
			sourceType: Camera.PictureSourceType.CAMERA,
			encodingType: Camera.EncodingType.JPEG,
			destinationType: Camera.DestinationType.FILE_URI,
			saveToPhotoAlbum : true,
		});

	});

	//Use from Library
	document.querySelector("#usePicture").addEventListener("touchend", function() {
		navigator.camera.getPicture(onSuccess, onFail, { 
			quality: 50,
			sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
			destinationType: Camera.DestinationType.FILE_URI
		});

	});