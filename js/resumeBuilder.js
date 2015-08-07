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
	"welcomeMessage" : '<h3 id="welcome-h3">“It’s hard to make things easy!”</h3> \
						<p>Welcome, all! Speaking of making things easy, there isn’t \
						a UX designer on the planet who hasn’t had this thought at one \
						time or another. It can be a struggle sometimes.</p> \
						<p>But that’s what we live for, right? Designing apps and \
						hopefully making them tolerable enough — dare I say “fun”? — \
						that our users (and ourselves) want to spend time with them.</p> \
						<p>How do we do it? Well, it’s not quite an art and it’s \
						not quite a science, but it definitely draws from both disciplines. \
						And therein lies the attraction — we get to use both our left \
						brain <em>and</em> our right brain at the same time. Every day.</p> \
						<p>One thing’s for sure: I was born to do this. I have been \
						designing apps since long before anyone thought to annoint it \
						a professsion in its own right. And I will continue to practice \
						my craft as long as I can still push a pixel across a screen — or \
						whatever the natural-language-parsing, gesture-recognizing, \
						haptic-feedback-producing UX of the future might require.</p> \
						<p> Heck, I do this for fun on my own time!</p>',

	"skillsMessage" : "<p>I’ve been involved in the design and development of software \
						applications since the days of Windows 3.0, if not earlier.  \
						Along the way I’ve worked with most of the major operating \
						systems and software development platforms. I've also had \
						the chance to enhance my innate empathy for users and eye for \
						design with a rigorous goal-directed design methodology.</p>",

	"skills" : [
    	'<span class="skill-label">Skills</span><br /> \
    		User-centered design, ethnographic research, personas, usability testing',
    	'<span class="skill-label">Tools</span><br /> \
    		Photoshop, Illustrator, InDesign, Eclipse, Xcode, Balsamiq',
	    '<span class="skill-label">Operating systems</span><br /> \
	    	Windows, OS X, Android, iOS, Flash, Adobe Air, proprietary set-top boxes',
		'<span class="skill-label">Languages</span><br /> \
			HTML, CSS, Javascript, C++'
	],
	"bioPic" : "images/j-keith-thomson.jpg"
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
			"dates" : 2006,
			"url" : "http://cooper.com"
		},
		{
			"name" : "Cornell University",
			"location" : "Ithaca, NY",
			"degree" : "Bachelor of Arts",
			"majors" : [
				"Mathematics"
			],
			"dates" : 1974,
			"url" : "http://cornell.edu"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Front-End Web Development",
			"school" : "Udacity",
			"dates" : 2015,
			"url" : "http://udacity.com"
		}
	],
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
			"title" : "AllPlay Jukebox - Android",
			"dates" : "2013 - 2015",
			"description" : "Android app that allows multiple users to stream music to up to ten AllPlay-enabled speakers from a LAN or cloud-based streaming service.",
			"imagePercent" : "10%",
			"images" : [
				"images/01-01-allplay-jukebox-android.png",
				"images/01-02-allplay-jukebox-android.png",
				"images/01-03-allplay-jukebox-android.png",
				"images/01-04-allplay-jukebox-android.png",
				"images/01-05-allplay-jukebox-android.png",
				"images/01-06-allplay-jukebox-android.png",
				"images/01-07-allplay-jukebox-android.png",
				"images/01-08-allplay-jukebox-android.png",
			]
		},
		{
			"title" : "AllPlay Jukebox - iOS",
			"dates" : "2013 - 2015",
			"description" : "iOS version of AllPlay Jukebox.",
			"imagePercent" : "10%",
			"images" : [
				"images/02-01-allplay-jukebox-ios.png",
				"images/02-02-allplay-jukebox-ios.png",
				"images/02-03-allplay-jukebox-ios.png",
				"images/02-04-allplay-jukebox-ios.png",
				"images/02-05-allplay-jukebox-ios.png",
				"images/02-06-allplay-jukebox-ios.png",
				"images/02-07-allplay-jukebox-ios.png",
				"images/02-08-allplay-jukebox-ios.png",
			]
		},
		{
			"title" : "AllPlay Radio -- Android",
			"dates" : "2013 - 2015",
			"description" : "Android app that streams Internet radio to AllPlay speakers",
			"imagePercent" : "10%",
			"images" : [
				"images/03-01-allplay-radio-android.png",
				"images/03-02-allplay-radio-android.png",
				"images/03-03-allplay-radio-android.png",
				"images/03-04-allplay-radio-android.png",
				"images/03-05-allplay-radio-android.png",
				"images/03-06-allplay-radio-android.png",
				"images/03-07-allplay-radio-android.png",
				"images/03-08-allplay-radio-android.png"
			]
		},
		{
			"title" : "AllPlay Radio - iOS",
			"dates" : "2013 - 2015",
			"description" : "iOS versioan of Allplay Radio",
			"imagePercent" : "10%",
			"images" : [
				"images/04-01-allplay-radio-ios.png",
				"images/04-02-allplay-radio-ios.png",
				"images/04-04-allplay-radio-ios.png",
				"images/04-04-allplay-radio-ios.png",
				"images/04-05-allplay-radio-ios.png",
				"images/04-06-allplay-radio-ios.png",
				"images/04-07-allplay-radio-ios.png",
				"images/04-08-allplay-radio-ios.png"
			]
		},
		{
			"title" : "Orb BR",
			"dates" : "2012 - 2013",
			"description" : "A BD-Live app that runs on a Blu-ray player and lets you stream Internet audio and video to your TV.",
			"imagePercent" : "20%",
			"images" : [
				"images/05-01-orb-br.png",
				"images/05-02-orb-br.png",
				"images/05-02-orb-br.png",
				"images/05-02-orb-br.png"
			]
		},
		{
			"title" : "Home Automation Demo",
			"dates" : "2012",
			"description" : "Android prototype app for home automation, including control of HVAC, lights, door locks, etc.",
			"imagePercent" : "10%",
			"images" : [
				"images/06-01-home-automation.png",
				"images/06-02-home-automation.png",
				"images/06-03-home-automation.png",
				"images/06-04-home-automation.png",
				"images/06-05-home-automation.png",
				"images/06-06-home-automation.png",
				"images/06-07-home-automation.png"
			]
		},
		{

			"title" : "Pinnacle Studio",
			"dates" : "1997 - 2007",
			"description" : "Home video editing app",
			"imagePercent" : "20%",
			"images" : [
				"images/07-01-pinnacle-studio.png",
				"images/07-02-pinnacle-studio.png",
				"images/07-03-pinnacle-studio.png",
				"images/07-04-pinnacle-studio.png"
			]
		},
		{

			"title" : "Lego Studios",
			"dates" : "2000 - 2004",
			"description" : "Lego version of Pinnacle Studio, endorsed by Steven Spielberg",
			"imagePercent" : "20%",
			"images" : [
				"images/08-01-lego-studios.jpg",
				"images/08-02-lego-studios.png",
				"images/08-03-lego-studios.png",
				"images/08-04-lego-studios.png"
			]
		}
	]
}

// CREATE THE DISPLAY FUNCTIONS FOR EACH JSON OBJECT
// function to display biographical info
bio.display = function() {
	// we put our own div around name and role so we can float both left
	$("#header").prepend('<div id="nameWrapper"> </div>');

	// append name and role to wrapper div
	// name
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#nameWrapper").append(formattedName);

	// role -- note that we removed the horizontal rule from under the subtitle
	// (we will add it back in below)
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	formattedRole = formattedRole.replace("<hr/>", "");
	console.log(formattedRole);
	$("#nameWrapper").append(formattedRole);

	// prepend bio photo so it appears at top left
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").prepend(formattedBioPic);

	// append bullet items to #topContacts
	// mobile phone number
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);

	// email address
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);

	// github id
	var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGitHub);

	// twitter handle
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#topContacts").append(formattedTwitter);

	// location
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);

	// add a blank div to clear up all that floating, followed by an h-rule
	$("#header").append('<div style="clear: both;"></div><hr/>');

 	// append a wrapper div for welcome message
	$("#header").append('<div id="welcome-wrapper"> </div>');
	var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#welcome-wrapper").append(formattedWelcomeMessage);

	// skills -- only display if the list of skills is not empty
	if (bio.skills.length > 0) {

		// add skill header to DOM - we use a wrapper div for responsiveness' sake
		$("#header").append('<div id="skills-wrapper"> </div>');

		// sneak a little extra text in between the title and content of skills section
		var str = HTMLskillsStart;
		str = str.replace(":", "");	/* lose the colon */
		str = str.replace("<ul ", bio.skillsMessage + "<ul ");

		$("#skills-wrapper").append(str);

		// display skills one at a time
		for (var skill in bio.skills) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			/* remove the white-text class from the string, we don't want it */
			formattedSkill = formattedSkill.replace('class="white-text"', "");
			$("#skills").append(formattedSkill);
		}
	}
	// if the list of skills is empty, jst show the welcome message full width
	else {
		$("welcome-wrapper").css('width', '100%');
	}
	// add a horizontal rule beneath the welcome and skills sectiosn
	$("#header").append('<div class="clear-float"></div><hr/>');
}

// function to display work experience
work.display = function display() {
   // iterate through the jobs array, append each new job to work experience node
   for (var job in work.jobs) {

       // create the div wrapper for this job -- its class is "work-entry"
       $("#workExperience").append(HTMLworkStart);

       // add job info to the last "work-entry" node

       // employer and job title - we wrap with a div and spans to give us more control
       var formattedWorkEmployer = '<div class="employer-wrapper"><span class="employer-text">';
       formattedWorkEmployer += HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
       formattedWorkEmployer += '</span><span class="position-text">';
       formattedWorkEmployer += HTMLworkTitle.replace("%data%", work.jobs[job].title);
       formattedWorkEmployer += '</span></div>';
       $(".work-entry:last").append(formattedWorkEmployer);

       // dates
       var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
       $(".work-entry:last").append(formattedWorkDates);

       // clear the floats from above
	   $(".work-entry:last").append('<div class="clear-float"></div>');

       // location
       var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
       $(".work-entry:last").append(formattedWorkLocation);

       // description
       var formattedWorkDescription = HTMLworkDescription.replace("<br>%data%", work.jobs[job].description);
       $(".work-entry:last").append(formattedWorkDescription);
   }

	// add a horizontal rule beneath the Work sectiosn
	$("#workExperience").append('<div class="clear-float"></div><hr/>');
}

// function to display projects
projects.display = function() {
	// iterate through the projects array, append each project
	for (var project in projects.projects) {

		// create the div wrapper for this project -- its class is "project-entry"
		$("#projects").append(HTMLprojectStart);

		// project title
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedProjectTitle);

		// project dates
		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedProjectDates);

		// project description
		var formattedProjectDescription = HTMLworkDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedProjectDescription);

		// create div wrapper for images
		$(".project-entry:last").append(HTMLprojectImagesWrapper);

		// add the images for this project
		for (var image in projects.projects[project].images) {
			var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
			$(".images-wrapper:last").append(formattedProjectImage);
			$(".images-wrapper:last img").width(projects.projects[project].imagePercent);
		}
	}

	// add a horizontal rule beneath the Projects sectiosn
	$("#projects").append('<div class="clear-float"></div><hr/>');
}

// function to display education
education.display = function() {

	// if there are any school or online courses...
	if (education.schools.length > 0 || education.onlineCourses.length > 0) {

		// create the div wrapper for the education section -- its class is "education-entry"
		$("#education").append(HTMLschoolStart);

		// iterate through the schools array, append each school
		for (var school in education.schools) {

			// add school info to the last "education-entry" node

			// school and degree - we wrap with a div and spans to give us more control
			var formattedSchoolName = '<div class="school-wrapper"><span class="school-text">';
			formattedSchoolName += HTMLschoolName.replace("%data%", education.schools[school].name);
			formattedSchoolName += '</span><span class="degree-text">';
			formattedSchoolName += HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			formattedSchoolName += '</span></div>';
			$(".education-entry:last").append(formattedSchoolName);

			// graduation date
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			$(".education-entry:last").append(formattedSchoolDates);

			// clear the floats from above
			$(".education-entry:last").append('<div class="clear-float"></div>');

			// location
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			$(".education-entry:last").append(formattedSchoolLocation);

			// majors
			var num_majors = education.schools[school].majors.length;
			var major_names = "";
			var formattedMajorsString = "";

			if (num_majors >= 1) {
				// if more than one major, use plural string
				formattedMajorsString = (num_majors == 1) ? HTMLschoolMajor : HTMLschoolMajors;

				// iterate through all majors
				for (var major in education.schools[school].majors) {
					major_names += education.schools[school].majors[major];

					// add a comma after all but the last major
					if (major < num_majors - 1) {
						major_names += ", ";
					}
				}
				/* lose the <br> and <em> tags while we're at it */
				formattedMajorsString = formattedMajorsString.replace("%data%", major_names);
				formattedMajorsString = formattedMajorsString.replace("<br>", "");
				formattedMajorsString = formattedMajorsString.replace("<em>", "");
				formattedMajorsString = formattedMajorsString.replace("</em>", "");
				$(".education-entry:last").append("<p>" + formattedMajorsString) + "</p>";
			}
		}

		// iterate through the onlineCourses array, append each course
		for (var course in education.onlineCourses) {

			// put header on the first one
			if (course == 0) {
				$(".education-entry:last").append(HTMLonlineClasses);
			}

			// school and degree - we wrap with a div and spans to give us more control
			var formattedOnlineSchool = '<div class="school-wrapper"><span class="school-text">';
			formattedOnlineSchool += HTMLonlineSchool.replace(" - %data%", education.onlineCourses[course].school);
			formattedOnlineSchool += " - ";
			formattedOnlineSchool += '</span><span class="course-text">';
			formattedOnlineSchool += HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
			formattedOnlineSchool += '</span></div>';
			$(".education-entry:last").append(formattedOnlineSchool);

			// online date
			var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
			$(".education-entry:last").append(formattedOnlineDates);

			// online url
			var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
			$(".education-entry:last").append("<p>" + formattedOnlineURL + "</p>");
		}

		// add a horizontal rule beneath the education section
		$("#education").append('<div class="clear-float"></div><hr/>');
	}
}

// DISPLAY THE RESUME BY CALLING THE DISPLAY FUNCTIONS
bio.display();			// biographical data
work.display();			// employment history
projects.display();		// projects
education.display();	// schools and online courses

// DISPLAY THE MAP
$("#mapDiv").append(googleMap);
