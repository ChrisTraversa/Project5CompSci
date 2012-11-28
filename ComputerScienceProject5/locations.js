/* Chris Traversa Project 5 November 27th

Had a really hard time with this project for some reason and could never get 
it to test. With the help of friends and even referencing other code to learn the 
concept, I could not seem to get locations_0 to be defined. I went through multiple
name changes to see if that was the case but I couldn't get it to work. Please write down
everything I need to change because I want to make my final project almost perfect.
*/

//location.js

 function Location(_id, _name, _description, _item) {
  this.id = _id;
  this.name = _name;
  this.description = _description;
  this.item = _item;
  
  this.toString = function() {
    return this.description;
 }  
  
  var locations_0 = new Location();
   locations_0.id = 0;
   locations_0.name = "sheahan";
   locations_0.description = "You have Sheehan behind you and your mind on"+
        " the prize. Up ahead is another building, to"+
        " your right is pitch black and to your left is a parking lot.";
   locations_0.item = false;  
 
 var locations_1 = new Location();
   locations_1.id = 1;
   locations_1.name = "champ1";
   locations_1.description = "You are outside of Champagnat, with a path up"+
        " ahead. There is a paper on the floor with numbers on it.";
   locations_1.item = true; 
 
 var locations_2 = new Location();
   locations_2.id = 2;
   locations_2.name = "champ2";
   locations_2.description = "You are at the entrance of Champagnat,"+
        " to your left there are a group of students"+
        " that are telling you to go inside. To your right"+
        " you see some taxis and up ahead is the library.";
   locations_2.item = false; 
 
 var locations_3 = new Location();
   locations_3.id = 3;
   locations_3.name = "library1";
   locations_3.description = "You are outside the library, go east"+
        " to enter or keep traveling ahead.";
   locations_3.item = false; 
 
 var locations_4 = new Location();
   locations_4.id = 4;
   locations_4.name = "library2";
   locations_4.description = "You have entered the library so be quiet."+
        " There is a back exit if you keep going east but it is"+
        " blocked by a bunch of nerds who just want to have fun.";
   locations_4.item = false; 
 
 var locations_5 = new Location();
   locations_5.id = 5;
   locations_5.name = "dorm";
   locations_5.description = "You are inside Champagnat with a group of"+
        " kids who wanted to show you how awesome their room was"+
        " with black lights and posters. You realize there is a"+
        " glowstick on the bed and that these kids are weirdos.";
   locations_5.item = true; 
 
 var locations_6 = new Location();
   locations_6.id = 6;
   locations_6.name = "taxi1";
   locations_6.description = "If you keep going east, you can get to the"+
        "taxis. There also is an invitation on the floor";
   locations_6.item = true; 
 
 var locations_7 = new Location();
   locations_7.id = 7;
   locations_7.name = "river";
   locations_7.description = "There is a speedboat on the river, but no keys.";
   locations_7.item = false; 
 
 var locations_8 = new Location();
   locations_8.id = 8;
   locations_8.name = "parkinglot";
   locations_8.description = "You are in the parking lot of Leo Hall."+
        " There is a hammer on the ground and if you keep going"+
        " west, you'll get to the Hudson River.";
   locations_8.item = true; 
 
 var locations_9 = new Location();
   locations_9.id = 9;
   locations_9.name = "darkhill1";
   locations_9.description = "If you keep going east without seeing anything,"+
        " things can get dangerous.";
   locations_9.item = false; 
 
 var locations_10 = new Location();
   locations_10.id = 10;
   locations_10.name = "darkhill2";
   locations_10.description = "You could not see, so you fell to your death,"+
         " nice job, refresh the page and start over.";
   locations_10.item = false; 
 
 var locations_11 = new Location();
   locations_11.id = 11;
   locations_11.name = "bedtime";
   locations_11.description = "What are you doing? You cannot sleep when you are hungry!";
   locations_11.item = false; 
 }