function tellFortune(numChildren, partnerName, geographicLocation, jobTitle)
{
    console.log("You will be a " + jobTitle + " in " + geographicLocation + " and married to " + partnerName + " with " + numChildren + " kids.");
}

tellFortune(30, "Justin", "Fiji", "scuba instructor");
tellFortune(2, "Justin", "Hawaii", "oceanographer");


function calculateAge(birthYear, currentYear)
{
    console.log("You are either " + (currentYear - birthYear) + " or " + (currentYear - birthYear - 1) );
    return currentYear - birthYear;
}

calculateAge(1989, 2015);
calculateAge(1989, 2020);

function calculateSupply(age, amtPerDay)
{
    var maxAge = 100;
    var total = (maxAge - age) * amtPerDay * 365;
    console.log("You will need " + total + " to last you until the ripe old age of " + maxAge);
    return total;
}

var numApples = calculateSupply(26, 3);

function calcCircumference(radius)
{
    var answer = 2 * radius * Math.PI;
    console.log("The circumference is " + answer);
    return answer;
}

calcCircumference(5);

function calcArea(radius)
{
    var answer = Math.PI * radius * radius;
    console.log("The area is " + answer);
    return answer;
}

calcArea(5);

function celsiusToFahrenheit(temp)
{
    return (temp * 9 / 5) + 32;
}

var tempf = celsiusToFahrenheit(32);
console.log(tempf);

function fahrenheitToCelsius(temp)
{
    return (temp - 32) * 5 / 9;
}

var tempc = fahrenheitToCelsius(100);
console.log(tempc);