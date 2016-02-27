/*
 This is empty on purpose! Your code to build the resume will go here.
 */


var formattedName = HTMLheaderName.replace("%data%", "Alwy Christyo");
var formattedRole = HTMLheaderRole.replace("%data%", "Machine Learning Engineer");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


var skills = ["leadership", "CSS", "Web Design", "Web Development"];


var bio = {
    "name" : "Alwy Christyo",
    "role" : "Machine Learning Engineer",
    "contactInfo" : "nothing",
    "pictureURL" : "images/fry.jpg",
    "welcome" : "Welcome to my portfolio!",
    "skills" : skills
};



$("#workExperience").append(bio);