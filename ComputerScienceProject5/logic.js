//logic.js
//has help and logic with the inventory

  var glowstick = false;
  var hammer = false; 
  var invitation = false;
  var code = false;
  var glowstick   = 0;
  var hammer      = 1;
  var invitation  = 2;
  var code        = 3;
  
  var score = 0;
  var moveCount = 0;

 function init() {
  updateDisplay("You Want McDonalds because you are hungry. Good Luck");
 }
 	
 function protocol_item(_id, _name, _description) {
   
    this.id = _id;
    this.name = _name;
    this.description = _description;
   
    this.toString = function() {
      var retVal = "";
      retVal = "[Item]" + "\n" +
      "Id:" + this.id + "\n" +
      "Name:" + this.name + "\n" +
      "Description:" + this.description + "\n";
      return retVal;
     }
  }

 function takeItem(item) {
   item_glowstick       = new protocol_item(0, "glowstick", "A stick filled with neon that can light up dark areas.");
   item_hammer          = new protocol_item(1, "hammer", "A tool that can break objects.");
   item_invitation      = new protocol_item(2, "invitation", "An invite to a Dance Dance Revolution Tournament.");
   item_code            = new protocol_item(3, "code", "A number sequence that can be used at a gate.");
 
   switch (currentLocation) { 
     case 5:
            inventoryArray[0] = item_glowstick
            updateDisplay("A glowstick in inventory.")
            break;
     case 8:
            inventoryArray[1] = item_hammer
            updateDisplay("A glowstick in inventory.")
            break;
     case 9:
            inventoryArray[2] = item_invitation
            updateDisplay("A glowstick in inventory.")
            break;
     case 6:
            inventoryArray[3] = item_code
            updateDisplay("A glowstick in inventory.")
            break;      
   }
 }   
 function showInventory() {
  var msg = "Inventory: ";
  if (glowstick) {
    msg = msg + "glowstick";
  }
  if (hammer) {
    msg = msg + "hammer";
  }
  if (invitation) {
    msg = msg + "invitation";
  }
  if (code) {
    msg = msg + "code";
  }
  if ((glowstick)&&(hammer)) {
    msg = msg + "glowstick, hammer";
  }
  if ((glowstick)&&(invitation)) {
    msg = msg + "glowstick, invitation";
  }
  if ((glowstick)&&(code)) {
    msg = msg + "glowstick, code";
  }
  if ((hammer)&&(invitation)) {
    msg = msg + "hammer, invitation";
  }
  if ((code)&&(invitation)) {
    msg = msg + "code, invitation";
  }
  if ((code)&&(hammer)) {
    msg = msg + "code, hammer";
  }else {
   msg = msg +"nothing";
  }
   updateDisplay(msg);
 }

 function takeItem(item) {
  if (location.hasItem()) {
   updateDisplay("Item Taken!");
  }else{
   updateDisplay("No Item here to take.")
  }
 }

 function updateDisplay(message) {
  var message = message;             
  var text = document.getElementById("taGame");
  text.value ="\n" + message + "\n" + text.value + "\n" ;
 }

 function clickAway() {
  var text=document.getElementById("txtCommand");
        if((text.value==="N")||(text.value==="n")){
          btn_command(north);
        }
        else if((text.value==="S")||(text.value==="s")){
          btn_command(south);
        }
        else if((text.value==="E")||(text.value==="e")){
          btn_command(east);
        }
        else if((text.value==="W")||(text.value==="w")){
          btn_command(west);
        }
        else if(text.value==="help"){
          helpMe();
        }
        else if(text.value==="take"){
          takeItem();
        }
        else if(text.value==="inventory"){
          showInventory();
        }
        else {
          msg="I do not understand your command. Type help if you need it, I know I do!"
          updateDisplay(msg);
        }
  }

 function helpMe() {
  updateDisplay("Looks like you need some help. Press the directional buttons in the direction"+
      " you want to go. You can also enter N,n,S,s,W,w,E,e in the input for north, south"+
      " east, and west respectively. To take items, type in take. Type inventory to see"+
      " your items");
 }    
       