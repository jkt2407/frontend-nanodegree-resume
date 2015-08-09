/*
	Slideshow feature
	Written by J. Keith Thomson, August 2015
	Based on a JQuery llibrary by John Cobb
	See js/bjqs-1.3.js


/* enable/disable the slideshow */
var slideshowEnabled = false;

function enableSlideshow(enable) {
	if (enable === slideshowEnabled) {
		return;
	}
	// shows or hides the mask and clears the DOM
	if (enable) {
		$("#slideshow-container").css("display", "block");
	} else {
		$("#slideshow-bjqs").empty();
		$("#slideshow-container").css("display", "none");
	}
	slideshowEnabled = enable;
}

function startSlideshow(thumb) {

	// FIGURE OUT WHICH PROJECT THAT THE THHUMBNAIL CAME FROM
	// get url of thumbnail
	var thumbBgd = $(thumb).css('background-image');
	console.log("thumbBgd = " + thumbBgd);

	// run through our array of projects
	for (var proj in projects.projects) {

		// if this project's first thumbnail matches our thumbnail...
		var filename = projects.projects[proj].images[0];
		if (thumbBgd.search(filename) >= 0) {	// TODO: this could be more robust

			// INITIALIZE SLIDESHOW
			// append slideshow node to container
			$("#slideshow-bjqs").append('<ul class="bjqs"></ul>');

			// append array of slides to that node
			for (var image in projects.projects[proj].images) {
				filename = projects.projects[proj].images[image];
				$(".bjqs").append('<li><img src="' + filename + '"></li>');
			}

			// compute slideshow window size
			// we'll use aspect ratio of first slide in show
			// and assume the others match
			// TODO: make this work for mixed aspect ratios

			// get aspect ratio of first slide (it's the thumbnail!)
			var img = new Image;
			img.src = $(thumb).css('background-image').replace(/url\(|\)$/ig, "");
			var bgWidth = img.width;
			var bgHeight = img.height;
	        var bgAspect = bgWidth / bgHeight;

	        // get size of our parent container window
	        var vwWidth = parseInt( $("#slideshow-container").css("width") );
	        var vwHeight = parseInt( $("#slideshow-container").css("height") );
        	var ssHeight = 480;
        	var ssWidth = 640;
	        if (bgAspect < 1) {
	        	// potrait - maximize height
	        	ssHeight = 0.75 * vwHeight;
	        	ssWidth = ssHeight * bgAspect;
			} else {
				// landscape, maximize width
				ssWidth = 0.75 * vwWidth;
				ssHeight = ssWidth / bgAspect;
			}

			// center the slideshow window horizontally
			var xOffset = (vwWidth - ssWidth) / 2;
			if (xOffset < 0) {
				xOffset = 0;
			}
			$("#slideshow-bjqs").css('left', xOffset);

			// center the slideshow window slightly above center vertically
			var yOffset = (vwHeight - ssHeight) / 2 - (ssHeight / 8);
			if (yOffset < 0) {
				yOffset = 0;
			}
			$("#slideshow-bjqs").css('top', yOffset);

			// show the parent element and mask off the background
			enableSlideshow(true);

			// attach the plug-in to the slideshow parent element, set params and go
			jQuery(document).ready(function($) {

				$('#slideshow-bjqs').bjqs({
					// set slideshow parameters
					width : ssWidth,
					height : ssHeight,

					// animation values
					animtype : 'slide', // accepts 'fade' or 'slide'
					animduration : 450, // how fast the animation are
					animspeed : 4000, // the delay between each slide
					automatic : true, // automatic

					// control and marker configuration
					showcontrols : true, // show next and prev controls
					centercontrols : false, // center controls verically
					nexttext : ' > ', // Text for 'next' button (can use HTML)
					prevtext : ' < ', // Text for 'previous' button (can use HTML)
					showmarkers : true, // Show individual slide markers
					centermarkers : true, // Center markers horizontally

					// interaction values
					keyboardnav : true, // enable keyboard navigation
					hoverpause : true, // pause the slider on hover

					// presentational options
					usecaptions : false, // show captions for images using the image title tag
					randomstart : false, // start slider at random slide
					responsive : true // enable responsive capabilities (beta)

				});
			});

			break;
		}
	}
}

// start a slideeshow if a thumbnai is clicked
$(".thumbnail").click(function() {
	startSlideshow(this);
});

// stop slideshow if container div is clicked
$("#slideshow-container").click(function(e) {
	// make sure the event didn't bubble up from a button
	var senderID = e.target.id;
	if (senderID === 'slideshow-container') {
		enableSlideshow(false);
	}
});
