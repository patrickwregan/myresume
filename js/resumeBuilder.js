

var bio = {"bio" :{
    "name": "Patrick Regan",
    "role": "student",
    "contacts": {
      "mobile": "413-923-8051",
      "email": "pwr888@gmail.com",
      "github": "github.com/patrickwregan",
      "twitter": "twitter.com/pwregan",
      "blog": "www.patrickreganartist.com/blog",
      "location": "Northampton, MA"
    },
    "welcomeMessage": "Welcome to my resume page!",
    "skills": [
      "javascript", "html5", "calculus", "python"
],
"biopic": "images/resumePhoto.jpg",
"display": function()
{

  var formattedHeaderRole = HTMLheaderRole.replace('%data%', bio.bio.role);
  var formattedHeaderName = HTMLheaderName.replace('%data%', bio.bio.name);
  var formattedMobile = HTMLmobile.replace('%data%', bio.bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace('%data%', bio.bio.contacts.email);
  var formattedTwitter = HTMLtwitter.replace('%data%', bio.bio.contacts.twitter);
  var formattedGithub = HTMLgithub.replace('%data%', bio.bio.contacts.github);
  var formattedBlog = HTMLblog.replace('%data%', bio.bio.contacts.blog);
  var formattedLocation = HTMLlocation.replace('%data%', bio.bio.contacts.location);
  var formattedBioPic = HTMLbioPic.replace('%data%', bio.bio.biopic);
  var formattedWelcome = HTMLWelcomeMsg.replace('%data%', bio.bio.welcomeMessage);

  var skillsArray = bio.bio.skills;

  $('#header').prepend(formattedHeaderRole);
  $('#header').prepend(formattedHeaderName);
  $('#topContacts').append(formattedMobile);
  $('#topContacts').append(formattedEmail);
  $('#topContacts').append(formattedTwitter);
  $('#topContacts').append(formattedBlog);
  $('#topContacts').append(formattedGithub);
  $('#topContacts').append(formattedLocation);
  $('#header').append(formattedBioPic);
  $('#header').append(formattedWelcome);
  $("#header").append(HTMLskillsStart);
  for (i = 0; i < skillsArray.length;i++) {
    var temp = HTMLskills.replace('%data%', skillsArray[i]);
    $('#header').append(temp);
  }
}
}
}



var education = {
  "education": {
    "schools": [

    {"name": "University of Illinois at Springfield",


  "location": "Springfield, Illinois",


  "degree": "current student",

  "majors": [{
  "major": "mathematics"},
  {"major": "computer science"}
],


  "dates": "2014-2016",

  "url": "www.uis.edu"
}

],
"onlineCourses": [
{
  "title": "Introduction to Systematic Program Design - Part 1",
  "school": "Coursera.org",
  "date": "July 28, 2013",
  "url": "https://www.coursera.org/account/accomplishments/records/f2KUKad5na53Eeky"
},
{
  "title": "Developing Your Musicianship",
  "school": "Coursera.org",
  "date": "May 27, 2014",
  "url": "https://www.coursera.org/account/accomplishments/records/9dzv2RGtDjVz9cvg"
},
{
  "title": "Introduction to Music Production",
  "school": "Coursera.org",
  "date": "September 4, 2014",
  "url": "https://www.coursera.org/account/accomplishments/records/a2S66pCvB67WAAQ7"
}
],
"display": function()
{
  $('#education').append(HTMLschoolStart);
  var schoolObjectArray = education.education.schools;
  for (var i = 0;i < schoolObjectArray.length;i++)
  {
    var schoolName = HTMLschoolName.replace('%data%', schoolObjectArray[i].name);
    var schoolDegree = HTMLschoolDegree.replace('%data%', schoolObjectArray[i].degree);
    var schoolLocation = HTMLschoolLocation.replace('%data%', schoolObjectArray[i].location)
    var schoolDates = HTMLschoolDates.replace('%data%', schoolObjectArray[i].dates);
    $('.education-entry:last').append(schoolName);
    $('.education-entry:last').append(schoolDegree);
    $('.education-entry:last').append(schoolDates);
    $('.education-entry:last').append(schoolLocation);

    var schoolObjectArray = schoolObjectArray[i].majors;
    for (var i = 0;i < schoolObjectArray.length;i++)
    {
      var major = HTMLschoolMajor.replace('%data%', schoolObjectArray[i].major);
      $('.education-entry:last').append(major);
    }
  }
  $('.education-entry:last').append(HTMLonlineClasses);
  var onlineCoursesObjectArray = education.education.onlineCourses;
  for (var i = 0; i < onlineCoursesObjectArray.length;i++)
  {
    var title = HTMLonlineTitle.replace('%data%', onlineCoursesObjectArray[i].title);
    var school = HTMLonlineSchool.replace('%data%', onlineCoursesObjectArray[i].school);
    var date = HTMLonlineDates.replace('%data%', onlineCoursesObjectArray[i].date);
    var url = HTMLonlineURL.replace('%data%', onlineCoursesObjectArray[i].url);

    $('.education-entry:last').append(title);
    $('.education-entry:last').append(school);
    $('.education-entry:last').append(date);
    $('.education-entry:last').append(url);
  }
}
}
}

var work = {
  "work": {
    "jobs": [
  {
    "employer": "Nasa",
    "title": "intern",
    "location": "Moffet Field, CA",
    "dates": "January, 2000 - December, 2001",
    "description": "programmer"
  },
{
  "employer": "BigLots",
  "title": "shelf stocker",
  "location": "Northampton, MA",
  "dates": "2005 - 2007",
  "description": "unloaded trucks and stocked shelves"
},
{
  "employer": "Securitas",
  "title": "security guard",
  "location":"Cummington, MA",
  "dates": "2014 - 2015",
  "description": "security guard"
}

  ],
  "display": function()
  {

    $("#workExperience").append(HTMLworkStart);
    var workObjectArray= work.work.jobs;
    for (i = 0; i < workObjectArray.length;i++) {
      var employer = HTMLworkEmployer.replace('%data%', workObjectArray[i].employer);
      var title = HTMLworkTitle.replace('%data%', workObjectArray[i].title);
      var dates = HTMLworkDates.replace('%data%', workObjectArray[i].dates);
      var location = HTMLworkLocation.replace('%data%', workObjectArray[i].location);
      var description = HTMLworkDescription.replace('%data%', workObjectArray[i].description);
      $('.work-entry:last').append(employer);
      $('.work-entry:last').append(title);
      $('.work-entry:last').append(dates);
      $('.work-entry:last').append(location);
      $('.work-entry:last').append(description);
    }
}
}
}

var projects = {
  "projects": {
    "projects": [
  {
    "title": "Food Intake Tracker",
    "dates": "2011",
    "description": "project for UI design class",
    "images": "images/foodtrackerimg.png"
  }
  ]
},
"display": function()
{
  $('#projects').append(HTMLprojectStart);
  var projectObjectArray = projects.projects.projects;
  for (i = 0; i < projectObjectArray.length; i++)
  {
    var title = HTMLprojectTitle.replace('%data%', projectObjectArray[i].title);
    var dates = HTMLprojectDates.replace('%data%', projectObjectArray[i].dates);
    var description = HTMLprojectDescription.replace('%data%', projectObjectArray[i].description);
    var images = HTMLprojectImage.replace('%data%', projectObjectArray[i].images);
    $(".project-entry:last").append(title);
    $(".project-entry:last").append(dates);
    $(".project-entry:last").append(description);
    $(".project-entry:last").append(images);
  }
}
}

bio.bio.display();
work.work.display();
projects.display();
education.education.display();

$('#mapDiv').append(googleMap);
