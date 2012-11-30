var score = 0;
var north = true;
var west = true;
var east = true;
var south = true;
var currentLocation = 0;

var glowstick = false;
var hammer = false;
var invitation = false;
var code = false;
//items 

function btn_North() {
	switch(currentLocation) {
		case 0 : 
			currentLocation = 1;
			updateDisplay( uMove[currentLocation].name + " " + uMove[currentLocation].description);	
			document.getElementById('ee').style.visibility ='hidden';
			document.getElementById('ww').style.visibility ='hidden';
			document.getElementById('nn').style.visibility ='visible';
			document.getElementById('ss').style.visibility ='visible';
			break;
		case 1 : 
			currentLocation = 2;
			updateDisplay( uMove[currentLocation].name + " " + uMove[currentLocation].description);
			document.getElementById('nn').style.visibility ='visible';
			document.getElementById('ss').style.visibility ='visible';
			document.getElementById('ee').style.visibility ='visible';
			document.getElementById('ww').style.visibility ='visible';	
			break;
		case 2 :
			currentLocation = 3;
			updateDisplay( uMove[currentLocation].name + " " + uMove[currentLocation].description);	
			document.getElementById('nn').style.visibility ='hidden';
			document.getElementById('ww').style.visibility ='hidden';
			document.getElementById('ss').style.visibility ='visible';
			document.getElementById('ee').style.visibility ='visible';
			break;
		case 11 : 
			currentLocation = 0;
			updateDisplay( uMove[currentLocation].name + " " + uMove[currentLocation].description);
			document.getElementById('nn').style.visibility ='visible';
			document.getElementById('ss').style.visibility ='visible';
			document.getElementById('ee').style.visibility ='visible';
			document.getElementById('ww').style.visibility ='visible';	
			break;
		case 3 :
			updateDisplay(uMove[-1]);
			break;
		case 4 :
			updateDisplay(uMove[-1]);
			break;
		case 5 :
			updateDisplay(uMove[-1]);
			break;
		case 6 :
			updateDisplay(uMove[-1]);
			break;
		case 7 :
			updateDisplay(uMove[-1]);
			break;
		case 8 :
			updateDisplay(uMove[-1]);	
			break;
		case 9 :
			updateDisplay(uMove[-1]);
			break;
		case 10:
		  updateDisplay(uMove[-1]);
		}    
		if (north === true) {
			score = score + 5; 
			north = false;
		}          
}
function btn_South() {
	switch(currentLocation) {
		case 0 : 
			currentLocation = 11;
			updateDisplay( uMove[currentLocation].name + " " + uMove[currentLocation].description);	
			document.getElementById('ee').style.visibility ='hidden';
			document.getElementById('ww').style.visibility ='hidden';
			document.getElementById('ss').style.visibility ='hidden';
			document.getElementById('nn').style.visibility ='visible';
			break;
		case 1 : 
			currentLocation = 0;
			updateDisplay( uMove[currentLocation].name + " " + uMove[currentLocation].description);
			document.getElementById('nn').style.visibility ='visible';
			document.getElementById('ss').style.visibility ='visible';
			document.getElementById('ee').style.visibility ='visible';
			document.getElementById('ww').style.visibility ='visible';	
			break;
		case 2 :
			currentLocation = 1;
			updateDisplay( uMove[currentLocation].name + " " + uMove[currentLocation].description);	
			document.getElementById('ee').style.visibility ='hidden';
			document.getElementById('ww').style.visibility ='hidden';
			document.getElementById('nn').style.visibility ='visible';
			document.getElementById('ss').style.visibility ='visible';
			break;
		case 3 : 
			currentLocation = 2;
			updateDisplay( uMove[currentLocation].name + " " + uMove[currentLocation].description);
			document.getElementById('nn').style.visibility ='visible';
			document.getElementById('ss').style.visibility ='visible';
			document.getElementById('ee').style.visibility ='visible';
			document.getElementById('ww').style.visibility ='visible';	
			break;
		case 4 :
			updateDisplay(uMove[-1]);
			break;
		case 5 :
			updateDisplay(uMove[-1]);
			break;
		case 6 :
			updateDisplay(uMove[-1]);
			break;
		case 7 :
			updateDisplay(uMove[-1]);
			break;
		case 8 :
			updateDisplay(uMove[-1]);
			break;
		case 9 :
			updateDisplay(uMove[-1]);	
			break;
		case 10 :
			updateDisplay(uMove[-1]);
			break;
		case 11:
		  updateDisplay(uMove[-1]);
		}    
		if (south === true) {
			score = score + 5; 
			south = false;
		}          
}

function btn_East() {
	switch(currentLocation) {
		case 0 : 
			currentLocation = 9;
			updateDisplay( uMove[currentLocation].name + " " + uMove[currentLocation].description);	
			document.getElementById('nn').style.visibility ='hidden';
			document.getElementById('ss').style.visibility ='hidden';
			document.getElementById('ee').style.visibility ='visible';
			document.getElementById('ww').style.visibility ='visible';
			break;
		case 2 : 
			currentLocation = 6;
			updateDisplay( uMove[currentLocation].name + " " + uMove[currentLocation].description);
			document.getElementById('nn').style.visibility ='hidden';
			document.getElementById('ss').style.visibility ='hidden';
			document.getElementById('ee').style.visibility ='hidden';	
			document.getElementById('ww').style.visibility ='visible';
			break;
		case 3 :
			currentLocation = 4;
			updateDisplay( uMove[currentLocation].name + " " + uMove[currentLocation].description);	
			document.getElementById('nn').style.visibility ='hidden';
			document.getElementById('ss').style.visibility ='hidden';
			document.getElementById('ee').style.visibility ='hidden';
			document.getElementById('ww').style.visibility ='visible';
			break;
		case 5 : 
			currentLocation = 2;
			updateDisplay( uMove[currentLocation].name + " " + uMove[currentLocation].description);
			document.getElementById('nn').style.visibility ='visible';
			document.getElementById('ss').style.visibility ='visible';
			document.getElementById('ee').style.visibility ='visible';
			document.getElementById('ww').style.visibility ='visible';	
			break;
		case 7 :
		  currentLocation = 8;
			updateDisplay( uMove[currentLocation].name + " " + uMove[currentLocation].description);	
			document.getElementById('nn').style.visibility ='hidden';
			document.getElementById('ss').style.visibility ='hidden';
			document.getElementById('ee').style.visibility ='visible';
			document.getElementById('ww').style.visibility ='visible';
			break;
		case 8 :
		  currentLocation = 0;
			updateDisplay( uMove[currentLocation].name + " " + uMove[currentLocation].description);
			document.getElementById('nn').style.visibility ='visible';
			document.getElementById('ss').style.visibility ='visible';
			document.getElementById('ee').style.visibility ='visible';
			document.getElementById('ww').style.visibility ='visible';	
			break;
		case 9 :
		  currentLocation = 10;
			updateDisplay( uMove[currentLocation].name + " " + uMove[currentLocation].description);	
			document.getElementById('nn').style.visibility ='hidden';
			document.getElementById('ss').style.visibility ='hidden';
			document.getElementById('ee').style.visibility ='visible';
			document.getElementById('ww').style.visibility ='visible';
			break;
		case 1 :
			updateDisplay(uMove[-1]);
			break;
		case 4 :
			updateDisplay(uMove[-1]);
			break;
		case 6 :
			updateDisplay(uMove[-1]);	
			break;
		case 10 :
			updateDisplay(uMove[-1]);
			break;
		case 11:
		  updateDisplay(uMove[-1]);
		}    
		if (east === true) {
			score = score + 5; 
			east = false;
		}          
} 

function btn_West() {
	switch(currentLocation) {
		case 0 : 
			currentLocation = 8;
			updateDisplay( uMove[currentLocation].name + " " + uMove[currentLocation].description);	
			document.getElementById('nn').style.visibility ='hidden';
			document.getElementById('ss').style.visibility ='hidden';
			document.getElementById('ee').style.visibility ='visible';
			document.getElementById('ww').style.visibility ='visible';
			break;
		case 2 : 
			currentLocation = 5;
			updateDisplay( uMove[currentLocation].name + " " + uMove[currentLocation].description);
			document.getElementById('nn').style.visibility ='hidden';
			document.getElementById('ss').style.visibility ='hidden';
			document.getElementById('ww').style.visibility ='hidden';	
			document.getElementById('ee').style.visibility ='visible';
			break;
		case 4 :
			currentLocation = 3;
			updateDisplay( uMove[currentLocation].name + " " + uMove[currentLocation].description);	
			document.getElementById('nn').style.visibility ='hidden';
			document.getElementById('ww').style.visibility ='hidden';
			document.getElementById('ss').style.visibility ='visible';
			document.getElementById('ee').style.visibility ='visible';
			break;
		case 6 : 
			currentLocation = 2;
			updateDisplay( uMove[currentLocation].name + " " + uMove[currentLocation].description);	
			document.getElementById('nn').style.visibility ='visible';
			document.getElementById('ss').style.visibility ='visible';
			document.getElementById('ee').style.visibility ='visible';
      document.getElementById('ww').style.visibility ='visible';
			break;
		case 8 :
		  currentLocation = 7;
			updateDisplay( uMove[currentLocation].name + " " + uMove[currentLocation].description);	
			document.getElementById('nn').style.visibility ='hidden';
			document.getElementById('ss').style.visibility ='hidden';
			document.getElementById('ww').style.visibility ='hidden';
			document.getElementById('ee').style.visibility ='visible';
			break;
		case 9 :
		  currentLocation = 0;
			updateDisplay( uMove[currentLocation].name + " " + uMove[currentLocation].description);	
			document.getElementById('nn').style.visibility ='visible';
			document.getElementById('ss').style.visibility ='visible';
			document.getElementById('ee').style.visibility ='visible';
			document.getElementById('ww').style.visibility ='visible';
			break;
		case 1 :
			updateDisplay(Move[-1]);
			break;
		case 3 :
			updateDisplay(uMove[-1]);
			break;
		case 5 :
			updateDisplay(uMove[-1]);
			break;
		case 7 :
			updateDisplay(uMove[-1]);	
			break;
		case 10 :
			updateDisplay(uMove[-1]);
			break;
		case 11:
		  updateDisplay(uMove[-1]);
		}    
		if (west === true) {
			score = score + 5; 
			west = false;
		}          
} 
    

function clickAway() {
    var ta = document.getElementById("txtCommand");
	switch (ta.value) {
		case "N" :
			btn_North();
			break;
		case "n" :
			btn_North();
			break;
		case "S" :
			btn_South();
			break;
		case "s" :
			btn_South();
			break;
		case "E" :
			btn_East();
			break;
		case "e" :
			btn_East();
			break;
		case "W" :
			btn_West();
			break;
		case "w" :
			btn_West();
			break;
			case "inventory" :
			displayItems();
			break;
			case "i" :
			displayItems();
			break;
		case "help" :
			var msg = "Looks like you are having trouble."+
			          " Type N S E W in upper or lower case for"+
			          " directions in north, south, east, and west"+
			          " respectivley. If there is an item you want to"+
			          " take, type in take [item name]. Make sure take and"+
			          " the items name are in lower case. Type inventory or i"+
			          " to check what you have."
			updateDisplay(msg);
			break;
		case "take glowstick" :
			if (currentLocation == 5) {
				tookItem();
			} else {
				var msg = "No glowstick here.";
				updateDisplay(msg);
			}
			break;
		case "take hammer" :
			if (currentLocation == 8) {
				tookItem();
			} else {
				var msg = "No hammer here.";
				updateDisplay(msg);
			}
			break;
		case "take code" :
			if (currentLocation === 6) {
				tookItem();
			} else {
				var msg = "no code here.";
				updateDisplay(msg);
			}
			break;
		case "take invitation" :
			if (currentLocation === 9) {
				tookItem();
			} else {
				var msg = "No invitation here.";
				updateDisplay(msg);
			}
			break;
		default :
			var msg = "I do not understand what you want. Type help if you need it, I know I do.";
			updateDisplay(msg);
			break;
    }		
}


var takeItem = new Array();
var uMove = new Array();
	
function currentLocate(id, name, description, item) {
	this.id = id;
	this.name = name;
	this.description = description;
	this.item = item;
	
	this.toString = function() {
		var retVal = description + "" + item;	
		return retVal;
	} 
	
}

function tookItem(id, name, description) {
	this.id = id;
	this.name = name;
	this.description = description;
	
	this.toString = function() {
		var retVal = name + ": " + description;
		return retVal;
	}
	
	if (currentLocation === 5 && glowstick === false) {
		updateDisplay( "You took the " + takeItem[0].name + ". " + takeItem[0].description);
		glowstick = true;	
	} else if (currentLocation === 5 && glowstick === true) {
		updateDisplay("You have it already");
	}	
	if (currentLocation === 8 && hammer === false) {
		updateDisplay( "You took the " + takeItem[1].name + ". " + takeItem[1].description);
		hammer = true;
	} else if (currentLocation === 8 && hammer === true) {
		updateDisplay("You have it already");
	}
	if (currentLocation === 6 && code === false) {
		updateDisplay( "You took the " + takeItem[2].name + ". " + takeItem[2].description);
		code = true;
	} else if (currentLocation === 6 && code === true) {
		updateDisplay("You have it already");
	}
	if (currentLocation === 9 && invitation === false) {
		updateDisplay( "You took the " + takeItem[3].name + ". " + takeItem[3].description);
		invitation = true;
	} else if (currentLocation === 9 && invitation === true) {
		updateDisplay("You have it already");
	}	
}

function locale() {
	sheahan = new currentLocate			(0, "SHEAHAN..", "You are in front of sheahan with paths up north and to your east and west.", "");
	champ1 = new currentLocate			(1, "PATH TO CHAMP..", "If you keep going north you can get to Champ.", "");
	champ2 = new currentLocate			(2, "CHAMP ENTRANCE..", "You are outside of champagant with the library up ahead. To your east you see taxis and to the west are a group of kids telling you to go inside Champ.", "");
	library1 = new currentLocate			(3, "LIBRARY ENTRANCE..", "You are outside the library, keep going east to enter.", "");
	library2 = new currentLocate			(4, "LIBRARY..", "You are in the library so be quiet! There is an exit to the east but it is blocked by nerds who just want something to do.", "");
	dorm = new currentLocate			(5, "DORM..", "You are in those kids rooms and you realize they are really boring. There is a glowstick on a bed.", "glowstick");
	taxi1 = new currentLocate			(6, "PATH TO TAXIS..", "Keep going east to get to the taxis. There is a code on the floor that seems to be entered for security purposes.", "code");
	river = new currentLocate			(7, "HUDSON RIVER..", "You are at the Hudson River. There is a speedboat, but no keys", "");
	parkinglot = new currentLocate			(8, "LEO LOT..", "You are in the parking lot of Leo. The river is further west and there is a hammer on the ground.", "hammer");
	darkhill1 = new currentLocate			(9, "PATH TO DARKHILL..", "Its getting dark, keep going east and you'll regret it. There is an invitation on the floor.", "invitation");
	darkhill2 = new currentLocate			(10, "DARKHILL..", "You could not see so you fell to your death, nice job. refresh and restart.", "");
	bedtime = new currentLocate			(11, "IN ROOM..", "You cannot go to sleep now on an empty stomach! Keep trucking.", "");
	invalidMove = new currentLocate			(-1, "INVALID..", "You cannot go here buddy", "");

	
	takeGlowstick = new tookItem					(0, "GLOWSTICK..", "Used to light up dark areas.");
	takeHammer = new tookItem				(1, "HAMMER..", "Used to break things.");
	takeCode = new tookItem				(2, "CODE..", "A number sequence that seems important.");
	takeInvitation = new tookItem				(3, "INVITATION..", "A Dance Dance Revolution tournament invitation.");

	uMove[0] = sheahan;
	uMove[1] = champ1;
	uMove[2] = champ2;
	uMove[3] = library1;
	uMove[4] = library2;
	uMove[5] = dorm;
	uMove[6] = taxi1;
	uMove[7] = river;
	uMove[8] = parkinglot;
	uMove[9] = darkhill1;
	uMove[10] = darkhill2;
	uMove[11] = bedtime;
	uMove[-1] = invalidMove;

	takeItem[0] = takeGlowstick;
	takeItem[1] = takeHammer;
	takeItem[2] = takeCode;
	takeItem[3] = takeInvitation;
}
//You can take all the items and they all will display when you look at the inventory
//but the else statement always follows after. Not sure how to fix it.
function displayItems() { 
	if (glowstick === true) {
		updateDisplay("glowstick");
	}
	if (hammer === true) {
		updateDisplay("hammer");
	}
	if (code === true) {
		updateDisplay("code");
	}
	if (invitation === true) {
		updateDisplay("invitation");
	}else{
	  whatever();
	  //var msg = "----------";
	 // updateDisplay(msg);
	}
}
function whatever() {
var msg = "Nothing"
updateDisplay(msg);
}	
function init() {
	locale();
	var msg = "You are a young Marist freshman who craves McDonalds...and will do anything to have it. Good Luck.";
	updateDisplay(msg);
}

function updateDisplay(msg) {
	var ta = document.getElementById("taGame");
	ta.value = "\n" + msg + "\n" + ta.value;
}
//score is present but not accurate as of now will be fixed for final game.
function btn_Score() {
	updateDisplay("Your score is: " + score);
}