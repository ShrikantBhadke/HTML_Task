alert("Hallo World")
// “Less than 15% of employees are coming to offices in most companies…there is a huge challenge despite a lot of growth in terms of connectedness culture and getting people to have a sense of belonging to the 
// organization,” Premji said.

// He was speaking at an event of the Bangalore Chamber of Industry and Commerce.

// “People living in Bengaluru, Hyderabad, Mumbai or Pune have gone back to their hometowns (to tier II and III cities) with no active interest in necessarily coming back to big cities,” he added.

var percent = 15;
var indus = "employees";
var name = "companies";
var name1 = "growth";
var name3 = "organization";
var lang = "speaking";
var city = "bangalore";
var city1 = " Hyderabad";
var city2 =" pune";
var act =" necessarily"

console.log(percent, typeof percent);
console.log(indus, typeof indus);
console.log(name, typeof name);
console.log(city, typeof city);

var result = '"Less then ' + percent + ' of ' + indus + ' are coming to offices in most ' + name + '...there is a huge challenge despite a lot of '+ name1 + ' in terms of connectedness culure and gettig people to have a sense of belonging to the ' + name3 +'," Premji said.';

var result1 = "He was "+ lang + " at an event of the "+ city + " Chamber of Industey and Commerce.";
var result2 = '"People living in ' + city + ',' + city1 + ', Mumbai or'+ city2 + ' have gone back to their hometowns (to tier II and III cities) with no active interest in'+ act + ' coming back to big cities,” he added.';
console.log(result,result1, result2)
document.write(result,result1, result2);
