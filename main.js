window.onload = function(){
var name = document.getElementById("name").value;
var surname = document.getElementById("surname").value;
var lastName = document.getElementById("last-name").value;
var department = document.getElementById("department").value;
var course = document.getElementById("course").value;
var description = document.getElementById("description").value;
var date = document.getElementById("date").value;
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
 function generateImage(){
ctx.font = "24px Arial";
ctx.fillText(name + " " + surname + " " + lastName, 10, 50);
ctx.fillText("Department: " + department, 10, 100);
ctx.fillText("Course: " + course, 10, 150);
ctx.fillText("Description: " + description, 10, 200);
ctx.fillText("Year of Graduation: " + date, 10, 250);
document.getElementById("button").addEventListener("click", generateImage);
 }
}
