var numChildren = 30;
var partnerName = "Justin";
var geographicLocation = "Fiji";
var jobTitle = "scuba instructor";

console.log("You will be a " + jobTitle + " in " + geographicLocation + ", and married to " + partnerName + " with " + numChildren + " kids.");

var currentYear = 2015;
var birthYear = 1989;
var age = currentYear - birthYear;
console.log("They are either " + age + " or " + (age - 1));

var currentAge = 26;
var maxAge = 100;
var amtPerDay = 1;

var total = (maxAge - currentAge) * amtPerDay * 365;
console.log("You will need " + total + " to last you until the ripe old age of " + maxAge);

var radius = 5;
var circumference = 2 * Math.PI * radius;
var area = Math.PI * Math.pow(radius, 2);
console.log("The circumference is " + circumference);
console.log("The area is " + area);

var ctemp = 20;
var ftemp = (ctemp * 9)/5 + 32;
console.log(ctemp + "°C is " + ftemp + "°F");

var ftemp2 = 100;
var ctemp2 = (ftemp2 - 32) * 5 / 9;
console.log(ftemp2 + "°F is " + ctemp2 + "°C");