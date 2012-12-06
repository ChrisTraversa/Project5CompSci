//Chris Traversa Final Project Version 1.0 December 4th

 var score  = 0;

//items
 var hasKey1        = false;
 var hasKey2        = false;
 var hasHammer      = false;
 var hasPaper       = false;

 var NORTH = 0;
 var SOUTH = 1;
 var EAST  = 2;
 var WEST  = 3;

 var currentLocation = 0;

 var locationArray  = new Array();

 
 var inventoryArray = new Array();

 var nav =[   //        N0 S1 E2 W3
            /*0 */     [ 1,-1, 9, 8],
            /*1 */     [ 2, 0,-1,-1],
            /*2 */     [ 3, 1,-1, 6],
            /*3 */     [-1, 2, 4,-1],
            /*4 */     [-1,-1, 5, 3],
            /*5 */     [-1,-1,-1, 4],
            /*6 */     [-1,-1, 2,-1],
            /*7 */     [11,-1, 8,-1],
            /*8 */     [-1,-1, 0, 7],
            /*9 */     [-1,-1,10, 0],
            /*10*/     [-1,-1,-1,-1],
            /*11*/     [-1, 7,12,-1],
            /*12*/     [14,-1,13,11],
            /*13*/     [-1,-1,-1,12],
            /*14*/     [-1,12,15,-1],
            /*15*/     [-1,-1,-1,-1]
              ] ;            



function Locations (_id, _name, _description, _item) {
   this.id = _id;
   this.name = _name;
   this.description = _description;
   this.item = _item;
   
   this.toString = function() {
      var retVal = "";
     
          retVal = "[Location]" + "\n" +
                   "Id:" + this.id + "\n" +
                   "Name:" + this.name + "\n" +
                   "Description:" + this.description + "\n" +
                   "Item:" + this.item + "\n";
      return retVal;
   }
}

function Item (_id, _name, _description) {
   this.id = _id;
   this.name = _name;
   this.description = _description;
   
   this.toString = function() {
      var retVal = "";
     
          retVal = "[Item]" + "\n" +
                   "id:" + this.id + "\n" +
                   "name:" + this.name + "\n" +
                   "description:" + this.description + "\n";
      return retVal;
   }
}
//Responds from matrix to move 
function createLocations () {
  locationArray[0]  = new Locations("0", "init", "You are in front of sheahan with paths up north"+
                                    " and to your east and west.", "No item here.");
 
  locationArray[1]  = new Locations("1", "Path to Champ", "If you keep going north you can get to"+
                                    " Champ.", "No item here.");

  locationArray[2]  = new Locations("2", "Champ Entrance", "Go west to enter your friend's dorm or"+
                                    " go north toward the library.", "No item here.");
  locationArray[3]  = new Locations("3", "Library Entrance", "To enter the library, keep going"+
                                    " east.", "No item here.");

  locationArray[4]  = new Locations("4", "Library", "You are inside the library so shush! Looks"+
                                    " like there is a back exit east.", "No item here.");

  locationArray[5]  = new Locations("5", "Donnelly", "Nothing really here but security guards,"+
				    " there is a pair of keys on the ground however.", "Key1");

  locationArray[6]  = new Locations("6", "Dorm", "Your friends just want you to play video games"+
 				    " but you are too hungry to stay. There is a paper on the"+
                                    " floor.", "Paper with numbers");

  locationArray[7]  = new Locations("7", "Hudson River", "You are at the Hudson river. There is a"+
			            " speedboat that can head up north but there are no"+
                                    " keys.","No item here.");

  locationArray[8]  = new Locations("8", "Leo Lot", "You are in Leo's lot, further west is the "+
                                    "river. There is a hammer on the ground.", "Hammer");

  locationArray[9]  = new Locations("9", "Hill", "If you keep going east, you will hurt yourself"+
                                    " , it is really dark.", "No item here.");

  locationArray[10] = new Locations("10", "Dark Hill", "You could not resist! Well you fell down"+
                                    " the hill and broke both legs, now you are at St. Francis."+
                                    " Refresh the game.", "No item here.");

  locationArray[11] = new Locations("11", "Facility", "You are at the Water Facility,you need some"+
                                    " sort of code to go east.", "No item here.");

  locationArray[12] = new Locations("12", "Intersection", "You're at an intersection. Up north is"+
                                    " Gartland and to the east are upperclassmen who seem to be"+
                                    " having a catch with keys. Find something to scare them"+
                                    " with.","No item here.");

  locationArray[13] = new Locations("13", "UpperClass", "That hammer really scared them off! I like"+
                                    " your style...those look like car keys on the ground.", "Key2");

  locationArray[14] = new Locations("14", "Gartland", "You are at gartland, the kid offered you a "+
                                    "ride for helping him!.", "No item here.");

  locationArray[15] = "You did it! Congratulations and Enjoy your meal boss. Highscore is 125,"+
                      " remember lower the better!"
 
}

function init() {
   createLocations();
   updateDisplay(locationArray[currentLocation]);
}
// Moving with and without items
function move(direction) {
   var newLocation = nav[currentLocation][direction];
     if (newLocation !== -1) {
           currentLocation = newLocation;
           score = score + 5;
           updateNavButtons()
           updateDisplay(locationArray[currentLocation]);
     }else {
         updateDisplay("You cannot go that way.")
     }
     if (newLocation === 14) {
         if (hasKey2 === true){
           currentLocation = newLocation;
           score = score + 5;
           updateNavButtons()
           updateDisplay(locationArray[currentLocation]);
          }else{
           waitAsec();
         }
     }
     if (newLocation === 12) {
         if (hasHammer === true){
           currentLocation = newLocation;
           score = score + 5;
           updateNavButtons()
           updateDisplay(locationArray[currentLocation]);
          }else{
           waitAsec();
           }
     }
     if (newLocation === 7) {
         if (hasKey1 === true){
           currentLocation = newLocation;
           score = score + 5;
           updateNavButtons()
           updateDisplay(locationArray[currentLocation]);
          }else{
           waitAsec();
          }
     }
     if (newLocation === 11) {
         if (hasPaper === true){
           currentLocation = newLocation;
           score = score + 5;
           updateNavButtons()
           updateDisplay(locationArray[currentLocation]);
          }else{
           waitAsec();
          }
     }
   
}

function waitAsec(){
  switch (currentLocation) {
       
       case 11 :
            currentLocation = 11;
            document.getElementById("ee").style.visibility="hidden";
            break;
       
       case 7 :
            currentLocation = 7;
            document.getElementById("nn").style.visibility="hidden";
            break;
       
       case 12 :
            currentLocation = 12;
            document.getElementById("ee").style.visibility="hidden";
            break;
       
       case 14 :
            currentLocation = 14;
            document.getElementById("ee").style.visibility="hidden";
            break;       
  }
}      

function updateNavButtons() {

   if (nav[currentLocation][NORTH] >= 0) {
       document.getElementById("nn").style.visibility="visible";
   } else {
       document.getElementById("nn").style.visibility="hidden";
   }
   
   if (nav[currentLocation][SOUTH] >= 0) {
       document.getElementById("ss").style.visibility="visible";
   } else {
       document.getElementById("ss").style.visibility="hidden";
   }
   
   if (nav[currentLocation][EAST] >= 0) {
       document.getElementById("ee").style.visibility="visible";
   } else {
       document.getElementById("ee").style.visibility="hidden";
   }
   
   if (nav[currentLocation][WEST] >= 0) {
       document.getElementById("ww").style.visibility="visible";
   } else {
       document.getElementById("ww").style.visibility="hidden";
   }
}
         
function btn_Score(){
   updateDisplay(score);
}
        
function clickAway() {
  var userInput =document.getElementById("txtCommand").value;
  switch (userInput) {
              
      case "N":
        move(NORTH);
        break;

      case "n":
        move(NORTH);
        break;

      case "E":
        move(EAST);
        break;
  
      case "e":
        move(EAST);
        break;
         
      case "S":
        move(SOUTH);
        break;

      case "s":
        move(SOUTH);
        break;

      case "W":
        move(WEST);
        break;
     
      case "w":
        move(WEST);
        break;
        
      case "take":
        take();
        break;
        
      case "help":
        var msg = "Looks like you are having trouble."+
		              " Type N S E W in upper or lower case for"+
                  " directions in north, south, east, and west"+
                  " respectivley. If there is an item you want to"+
	                " take, type in take. Type inventory to check what you have."
	         updateDisplay(msg);
        break;
      
      case "inventory":
        checkInventory();
        break;
      
      case valid (userInput):
      break;
  }
}
// Taking Items      
function take() {
        Key1   = new Item(1, "Keys", "Keys to operate a vehicle.");
        Key2   = new Item(2, "Car Keys", "Keys to operate a car.");
        Hammer = new Item(3, "Hammer", "A item to defend yourself with.");
        Paper  = new Item(4, "Paper with numbers", "A sequence of numbers.");
        
    switch (currentLocation) {
       
       case 5 :
            inventoryArray[1] = Key1;
            updateDisplay("You now have keys in your inventory.");
            hasKey1 = true;
            break;
       
       case 13 :
            inventoryArray[2] = Key2;
            updateDisplay("You now have car keys in your inventory.");
            hasKey2 = true;
            break;


       case 6 :
            inventoryArray[3] = Paper;
            updateDisplay("You now have a paper sequence in your inventory.");
            hasPaper = true; 
            break;

       case 8 :
            inventoryArray[4] = Hammer;
            updateDisplay("You now have a hammer in your inventory.");
            hasHammer = true;
            break;
       
      default:
       updateDisplay("No item to take.")
      break;
    }
}
    
function checkInventory() {
    updateDisplay(inventoryArray);
}

         
function valid() {
  updateDisplay ("Invalid command. Type help if you need it, I know I do.");
}
  
 function updateDisplay(msg) {
   msg = msg + "[" + currentLocation + "]" + "\n" + "\n" + "\n";
   var ta = document.getElementById("taGame");
   ta.value = msg + "\n" + ta.value + "\n";
   ta.scrollBottom = ta.scrollHeight;
 } 
