function firstpoints (min, max) {
  var ptsone = $('.ptsone')
  var firstpts = Math.floor(Math.random() * (max - min + 1) ) + min;
  ptsone.text(`${firstpts}`);
}

(firstpoints(15000,20000));

function secondpoints (min, max) {
  var ptstwo = $('.ptstwo')
  var secpts = Math.floor(Math.random() * (max - min + 1) ) + min;
  ptstwo.text(`${secpts}`);
}

(secondpoints(12500,14999));

function thirdpoints (min, max) {
  var ptsthree = $('.ptsthree')
  var thirdpts = Math.floor(Math.random() * (max - min + 1) ) + min;
  ptsthree.text(`${thirdpts}`);
}

(thirdpoints(10000,12499));

var storedPoints= localStorage.getItem('userPoints')


function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
var usersubmit = $('.usersubmit');
usersubmit.on('click',username);
function username(){
  var welcome = $('.welcome');
  var user =$('.user').val();
  console.log(user);
  welcome.text(`Welcome to Stay Sharp sustainabilty calculator, ${user}!`)
}

var usernames = [
  "tennischamp8495", "rayray4339", "mom_mag2940", "ginger_spice8350", "tydye209", "fashioncece73", "djmadrid348795", "hello_itsadella", "sleepysid87",
  "mandymendes38", "broken_bottleb29", "detective_s10", "ttfizzle2903","killed_1st", "swankymik309", "mafiaezgus20", "chubs202845", "runollierepeat1",
  "clovr850"
]
function firstfunction (){
  var randomdec = Math.random();
  var randomnum = randomdec * usernames.length;
  var index = Math.floor(randomnum);
  var firstplace = usernames[index];
  var plOne= $('.plOne');
  plOne.text (`${firstplace}`);
  delete usernames[index];
}

firstfunction();

function secfunction (){
  var randomdec = Math.random();
  var randomnum = randomdec * usernames.length;
  var index = Math.floor(randomnum);
  var secplace = usernames[index];
  if (usernames[index] == undefined){
    var randomdec = Math.random();
    var randomnum = randomdec * usernames.length;
    var index = Math.floor(randomnum);
    var secplace = usernames[index];
    var pltwo= $('.plTwo');
    pltwo.text (`${secplace}`);
  }
  else {
    var pltwo= $('.plTwo');
    pltwo.text (`${secplace}`);
  }

  delete usernames[index];
}
secfunction();

function thirdfunction (){
  var randomdec = Math.random();
  var randomnum = randomdec * usernames.length;
  var index = Math.floor(randomnum);
  var thirdplace = usernames[index];

  if (usernames[index] == undefined){
    var randomdec = Math.random();
    var randomnum = randomdec * usernames.length;
    var index = Math.floor(randomnum);
    var plThree= $('.plThree');
      var thirdplace = usernames[index];
    plThree.text (`${thirdplace}`);}
    else {
      var thirdplace = usernames[index];
      var plThree= $('.plThree');
  plThree.text (`${thirdplace}`);}
  delete usernames[index];
}
thirdfunction();

//calculator
var userPoints;
function checkStorage (){

  var pointtotal = $('.pointtotal');
  userPoints= localStorage.getItem('points');
  if (userPoints>0) {
    pointtotal.text(`${userPoints}`);}
  else {
    pointtotal.text(0);}
  }

checkStorage();

var points = JSON.parse(localStorage.getItem('points')) || 0;
var threept = $('.threept');
threept.on("click", addpointsthree);

function addpointsthree (){
points = 3  + points;
  var pointtotal = $('.pointtotal');
  pointtotal.text(`${points}`)
  localStorage.setItem('points', points);
}


var onept = $('.onept');
onept.on("click", addpointsone);

function addpointsone (){
points = 1  + points;
  var pointtotal = $('.pointtotal');
  pointtotal.text(`${points}`)
  localStorage.setItem('points',points);
}

var fivept = $('.fivept');
fivept.on("click", addpointsfive);

function addpointsfive (){
points = 5  + points;
  var pointtotal = $('.pointtotal');
  pointtotal.text(`${points}`)
  localStorage.setItem('points',points);
}

var tenpt = $('.tenpt');
tenpt.on("click", addpointsten);

function addpointsten (){
points = 10  + points;
  var pointtotal = $('.pointtotal');
  pointtotal.text(`${points}`)
  localStorage.setItem('points',points);
}

var twelvept = $('.twelvept');
twelvept.on("click", addpointstwelve);

function addpointstwelve (){
points = 12  + points;
  var pointtotal = $('.pointtotal');
  pointtotal.text(`${points}`)
  localStorage.setItem('points',points);
}

var fiftnpt = $('.fiftnpt');
fiftnpt.on("click", addpointsfiftn);

function addpointsfiftn (){
points = 15  + points;
  var pointtotal = $('.pointtotal');
  pointtotal.text(`${points}`)
  localStorage.setItem('points',points);
}

if (points >= 15000) {
var certification = $('.certification');
  certification.text("Congratulations on being a great environmentalist! Your tree is a mature tree!");
  var tree = $('.tree')
  tree.append('<input type = "image" src = "tree-pics/mature-tree.png" class = "treepic"> ')
}
else if (points >= 1000) {
  var certification = $('.certification');
  certification.text("Congratulations on being a great environmentalist! Your tree is a juvenile tree!")
  var tree = $('.tree')
  tree.append('<input type = "image" src = "tree-pics/young-tree.jpeg" class = "treepic"> ');
}
else if (points >= 750) {
  var certification = $('.certification');
  certification.text("Congratulations on being a great environmentalist! Your tree is a sapling!")
  var tree = $('.tree')
  tree.append('<input type = "image" src = "tree-pics/tree-sapling.jpeg" class = "treepic"> ');
}
else if (points >= 500) {
  var certification = $('.certification');
  certification.text("Congratulations on being a great environmentalist! Your tree is a sprout!")
  var tree = $('.tree')
  tree.append('<input type = "image" src = "tree-pics/sprout.png" class = "treepic"> ');
}
else if (points >= 250) {
  var certification = $('.certification');
  certification.text("Congratulations on being a great environmentalist! Your tree is a seed!");
  var tree = $('.tree')
  tree.append('<input type = "image" src = "tree-pics/tree-seed.jpg" class = "treepic"> ')
}

else {
  var certification = $('.certification');
  certification.text("Keep on logging! Once you reach 250 points, your tree will start growing!");
  var tree = $('.tree')
  tree.append('<input type = "image" src = "tree-pics/growing-tree.gif" class = "treepic"> ')

}


var square1 = $('.square1');
square1.on("click", addTextsquare1);
function addTextsquare1 (){
  event.preventDefault();
  var square1 = $('.square1');
  var add = $('.add');
  add.text(`On the Go=

	1. Buy fuel efficient cars(electric and hybrid cars)

	2. walk/bike if possible rather than driving a car

  	2. carpool when possible

  	3. Take public transportation when possible

  	4. keep reusable bags and straws in your car for easy use

	5. Turn off your car when waiting to avoid idling`);
}

var square2 = $('.square2');
square2.on("click", addTextsquare2);
function addTextsquare2 (){
  event.preventDefault();
  var square2 = $('.square2');
  var add = $('.add');
  add.text(`Other=

	1. Make traveling more environmentally friendly, avoid short flights

	2. Stop unwanted mail, although small, the amount of paper thrown away can add up quickly `);
}


var square3 = $('.square3');
square3.on("click", addTextsquare3);
function addTextsquare3 (){
  event.preventDefault();
  var square3 = $('.square3');
  var add = $('.add');
  add.text(`Kitchen=
    1. Use reusable cotton napkins instead of single use napkins/papertowels
    2. Compost your food scraps
    3. Recycle plastic bottles and paper
    4. Buy local products(farm stands)
    5. Buy  items with less waste, when ordering multiple things online specify for packaging together and buy in bulk at stores
    6. Eat less meat, try to add vegetarian and vegan meals into your diet`);
}

var square4 = $('.square4');
square4.on("click", addTextsquare4)
function addTextsquare4 (){
  event.preventDefault();
  var square3 = $('.square4');
  var add = $('.add');
  add.text(`Electricity=

	1. Unplug unnecessary electronics

	2. Turnoff lights when leaving your house

	3. Adjust your thermostat to reduce CO2 emissions

	4. Opt to dry your clothes on a clothesline rather than using a dryer

	5. Care for your appliances(car, heating/cooling, refrigerator, etc.) keep good maintenance

	6. Use Compact Fluorescent Lightbulbs(CFLs) which help reduce electricity use

	7. Buy efficient appliances, you can look for ENERGY STAR qualified products

	8. Seal windows and doors to keep heat and AC inside the house

	9. Use reusable energy, for example solar panels

`);
}

var square5 = $('.square5');
square5.on("click", addTextsquare5)
function addTextsquare5 (){
  event.preventDefault();
  var square5 = $('.square5');
  var add = $('.add');
  add.text(`Bedroom=
    1. Buy second hand clothes and goods

	2. Purchase items that are good quality and last a long time`);
}

var square60 = $('.square60');
square60.on("click", addTextsquare60)
function addTextsquare60 (){
  event.preventDefault();
  var square60 = $('.square60');
  var add = $('.add');
  add.text(`Bathroom=
    1. Take shorter showers in order to conserve water

	2. Make sure your soap and makeup products don't have microbeads, these pieces of small plastic enter our oceans

	3. Look for makeup companies that use natural resources and eco-friendly products(Lush is a good example)`);
}


// var yard = $('.yard');
// yard.on("click", addText4)
// function addText4 (){
//   event.preventDefault();
//   var yard = $('.yard');
//   var add = $('.add');
//   add.text(`WAYS TO BE MORE SUSTAINABLE IN THE KITCHEN:
//     1. don't water your lawn
//     2. plant a garden to possibly produce your own food
//     3.  `);
// }
