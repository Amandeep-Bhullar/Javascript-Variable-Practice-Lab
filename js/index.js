//EXERCISE 1: The Fortune Teller
//Why pay a fortune teller when you can just program your fortune yourself? Store the following into variables: job title, geographic location, annual salary, company name. Output your fortune to the screen like so: "You will be a X in Y, making $N for Z."
console.log(`EXERCISE 1: The Fortune Teller`);
let jobTitle=`Front End Developer`;
let geographicLocation=`Toronto`;
let annualSalary=`$50,000`;
let companyName=`Microsoft`;
console.log(`You will be a `+jobTitle+` in `+geographicLocation+` making `+annualSalary+` for `+companyName);


//EXERCISE 2: The Age Calculator
//Forgot how old someone is? Calculate it! Store the current year in a variable. Store their birth year in a variable. Calculate their age based on the stored values. Output them to the screen like so: "They are NN years old.", substituting the values.
console.log(`EXERCISE 2: The Age Calculator`);
let currentYear=2019;
let birthYear=1984;
let age=currentYear-birthYear;
console.log(`They are `+age+` years old.`);
//EXERCISE 3: The Lifetime Supply Calculator
//Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more! Store your current age into a variable. Store a maximum age into a variable. Store an estimated amount per day (as a number). Calculate how many you would eat total for the rest of your life. Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".
console.log(`EXERCISE 3: The Lifetime Supply Calculator`);
let currentAge=35;
let maximumAge=100;
let estimatedAmountPerDay=2;
let eatTotal=(estimatedAmountPerDay*365)*(maximumAge-currentAge);
console.log(`You will need `+eatTotal+` to last you until the ripe old age of `+maximumAge);



//EXERCISE 4: The Geometrizer
//Calculate properties of a circle, using the definitions here. Store a radius into a variable. Calculate the circumference based on the radius, and output "The circumference is NN". Calculate the area based on the radius, and output "The area is NN".
console.log(`EXERCISE 4: The Geometrizer`);

//EXERCISE 5: The Temperature Converter
//It's hot out! Let's make a converter based on the steps here. Store a celsius temperature into a variable. Convert it to fahrenheit and output "NN°C is NN°F".  Now store a fahrenheit temperature into a variable. Convert it to celsius and output "NN°F is NN°C."