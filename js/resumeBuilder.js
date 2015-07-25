/*
	Keith Thomson - Udacity Nanodegree in Front End Web Development
	Project #2 - Resume
*/

// JSON DATA FOR FILLING OUT THE RESUME
// Biographical info
var bio = {
	"name" : "J. Keith Thomson",
	"role" : "Interaction and User Experience Design",
	"contacts" : {
		"mobile" : "650-740-6206",
		"email" : "jkeiththomson@gmail.com",
		"github" : "jkt2407",
		"twitter" : "@keiththomson",
		"location" : "Belmont, CA"
	},
	"welcomeMessage" : "Welcome to my resume website",
	"skills" : [
	    "OS experience: Windows, OS X, Android, iOS, Flash. Adobe Air, Set-top boxes",
    	"Skills: User-centered design, ethnographic research, personas, usability testing",
    	"Tools: Photoshop, Illustrator, InDesign, Eclipse, Xcode, Balsamiq",
		"Languages: HTML, CSS, Javascript"
	],
	"bioPic" : "images/j-keith-thomson.jpg",
	"display" : "display"
}

// Education info
var education = {
	"schools" : [
		{
			"name" : "Cooper U",
			"location" : "San Francisco, CA",
			"degree" : "Certification programs",
			"majors" : [
				"Goal-directed Design",
				"Information Design",
				"Documentation Design"
			],
			"dates" : "2006",
			"url" : "http://cornell.edu"
		},
		{
			"name" : "Cornell University",
			"location" : "Ithaca, NY",
			"degree" : "Bachelor of Arts",
			"majors" : [
				"Mathematics"
			],
			"dates" : "1974",
			"url" : "http://cornell.edu"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Front-End Web Development",
			"school" : "Udacity",
			"dates" : "2015",
			"url" : "http://udacity.com"
		}
	],
	"display" : "display"
}

// Employment info
var work = {
	"jobs" : [
		{
			"employer" : "Qualcomm Connected Experiences",
			"title" : "User Experience, Principal",
			"location" : "San Francisco, CA",
			"dates" : "2013 - 2015",
			"description" : "Promoted Qualcomm’s infrastructure for the 'Internet of Things' by designing apps and documentation for Qualcomm’s AllPlay and AllJoyn initiatives, resulting in the adoption of both frameworks by dozens of audio content providers, wireless speaker manufacturers and connected light bulb manufacturers."
		},
		{
			"employer" : "Orb Networks",
			"title" : "Vice President of User Experience",
			"location" : "Oakland, CA",
			"dates" : "2010 - 2013",
			"description" : "Designed the user experience for all of this start-up’s consumer products, ultimately leading to Orb’s acquisition by Qualcomm in May 2013."
		},
		{
			"employer" : "Photo Bento",
			"title" : "Vice President of User Experience, Co-Founder",
			"location" : "Sunnyvale, CA",
			"dates" : "2008 - 2010",
			"description" : "Designed the user experience for this photo- and video-sharing service, which contributed to the company being acquired by Orb Networks in March 2010."
		},
		{
			"employer" : "Kaleidescape",
			"title" : "Vice President of User Experience",
			"location" : "Sunnyvale, CA",
			"dates" : "2007",
			"description" : "Oversaw the user experience of this high-end home media playback and storage system. The Kaleidescape System allows users to view and manage their libraries of music and movies from any room in the house, using a unique, intuitive user interface."
		},
		{
			"employer" : "White Sky",
			"title" : "Vice President of User Experience",
			"location" : "San Mateo, CA",
			"dates" : "2006 - 2007",
			"description" : "Designed the user experience for ID Vault, a Windows-compatible USB stick that protects consumers against online identity theft by securely storing their login credentials and maintaining a cloud-based 'white list' of verified financial institutions."
		},
		{
			"employer" : "Avid Technology",
			"title" : "Director, User Experience Group",
			"location" : "Mountain View, CA",
			"dates" : "1996 - 2006",
			"description" : "Defined the overall user experience strategy for this nearly $1B company, reported to the CTO. Managed the user experience of all of Pinnacle’s consumer video products. Led a team of two interaction designers, two visual designers and one intern."
		}
	]
}

// Project info
var projects = {
	"projects" : [
		{
			"title" : "AllPlay Jukebox",
			"dates" : "2013 - 2015",
			"description" : "Android and iOS apps that allow multiple users to stream music to up to ten AllPlay-enabled speakers from a LAN or cloud-based streaming service.",
			"images" : [
				"image/allplay-jukebox-1.jpg",
				"image/allplay-jukebox-2.jpg",
				"image/allplay-jukebox-3.jpg",
				"image/allplay-jukebox-4.jpg"
			]
		},
		{
			"title" : "AllPlay Radio",
			"dates" : "2013 - 2015",
			"description" : "Android and iOS apps that stream Internet radio to AllPlay speakers.",
			"images" : [
				"image/allplay-radio-1.jpg",
				"image/allplay-radio-2.jpg",
				"image/allplay-radio-3.jpg",
				"image/allplay-radio-4.jpg"
			]
		},
		{
			"title" : "AllPlay Sample Apps",
			"dates" : "2013 - 2015",
			"description" : "Android and iOS sample apps and documentation for the AllPlay Click SDK (Software Development Kit) and AllPlay Controller SDK.",
			"images" : [
				"image/allplay-sample-app-1.jpg",
				"image/allplay-sample-app-2.jpg",
				"image/allplay-sample-app-3.jpg",
				"image/allplay-sample-app-4.jpg"
			]
		},
		{
			"title" : "Luminaire",
			"dates" : "2014",
			"description" : "Android app that emulates an AllJoyn-enabled LED light bulb.",
			"images" : [
				"image/allplay-luminaire-1.jpg",
				"image/allplay-luminaire-2.jpg",
				"image/allplay-luminaire-3.jpg",
				"image/allplay-luminaire-4.jpg"
			]
		},
		{
			"title" : "AllJoyn Lighting Services Sample App",
			"dates" : "2014",
			"description" : "Android and iOS sample apps that demonstrate use of the AllJoyn Lighting Services API.",
			"images" : [
				"image/allplay-alljoyn-1.jpg",
				"image/allplay-alljoyn-2.jpg",
				"image/allplay-alljoyn-3.jpg",
				"image/allplay-alljoyn-4.jpg"
			]
		},
		{
			"title" : "AlPlay Documentation",
			"dates" : "2014 - 2015",
			"description" : "As 'AllPlay Documentation Czar,'' managed all the documentation for the AllPlay software SDKs, hardware SDK and CDK (Customer Development Kit).",
			"images" : [
				"image/allplay-documentation-1.jpg",
				"image/allplay-documentation-2.jpg",
				"image/allplay-documentation-3.jpg",
				"image/allplay-documentation-4.jpg"
			]
		},
		{
			"title" : "Orb Music and Orb Video",
			"dates" : "2010 - 2013",
			"description" : "Android and iOS apps for remote control of Orb's Wi-Fi streaming devices.",
			"images" : [
				"image/orb-music-1.jpg",
				"image/orb-music-2.jpg",
				"image/orb-video-1.jpg",
				"image/orb-video-2.jpg"
			]
		},
		{
			"title" : "Orb BR",
			"dates" : "2012 - 2013",
			"description" : "A BD-Live app that runs on a Blu-ray player and lets you stream Internet audio and video to your TV.",
			"images" : [
				"image/orb-br-1.jpg",
				"image/orb-br-2.jpg"
			]
		},
		{
			"title" : "Home Automation Demo",
			"dates" : "2012",
			"description" : "Android prototype app for home automation, including control of HVAC, lights, door locks, etc.",
			"images" : [
				"image/orb-home-automation.jpg"
			]
		}
	]
}

