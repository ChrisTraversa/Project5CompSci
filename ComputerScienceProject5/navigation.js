 var currentLocation = 0; 
 var north  = 0;
 var south  = 1;
 var east   = 2;
 var west   = 3;


              
 function btn_command(action) {
  var locations = new Array(locations_0, // <--Web Developer says that is my problem
                            locations_1,
                            locations_2,
                            locations_3,
                            locations_4,
                            locations_5,
                            locations_6,
                            locations_7,
                            locations_8,
                            locations_9,
                            locations_10,
                            locations_11 );
                            
              
  var nav = new Array ( 
                [ 1,11, 9, 8],
                [ 2, 0,-1,-1],
                [ 3, 1, 6, 5],
                [-1, 2, 4,-1],
                [-1,-1,-1, 3],
                [-1,-1, 2,-1],
                [-1,-1,-1, 2],
                [-1,-1, 8,-1],
                [-1,-1, 0, 7],
                [-1,-1,10, 0],
                [-1,-1,-1,-1], 
                [ 0,-1,-1,-1]
              );            
              
   var navBtns = new Array("nn", "ss", "ee", "ww");
  
   var navBtns_switch = new Array( 
                [ 1, 1, 1, 1],
                [ 1, 1, 0, 0],
                [ 1, 1, 1, 1],
                [ 0, 1, 1, 0],
                [ 0, 0, 0, 1],
                [ 0, 0, 1, 0],
                [ 0, 0, 0, 1],
                [ 0, 0, 1, 0],
                [ 0, 0, 1, 1],
                [ 0, 0, 1, 1],
                [ 0, 0, 0, 0],
                [ 1, 0, 0, 0]
               );            
                           
 if (action === "N" || action === "n") {
    action = north;
  }
  else if (action === "S" || action === "s") {
    action = south;
  }
  else if (action === "E" || action === "e") {
    action = west;
  }
  else if (action === "W" || action === "w"){
    action = east;
  }
  
  var nextLocation = 0;
  nextLocation = nav[currentLocation][action];
  if (nextLocation >= 0) {
    updateDisplay(locations[nextLocation]);
    currentLocation = nextLocation;
    
    for (var i = 0; i < navBtns.length; i++) {
      var btnDisable = 0;
      btnDisable = navBtns_switch[currentLocation][i];
      if (btnDisable === 1) {
        document.getElementById(navBtns[i]).disabled = true;
      } else {
        document.getElementById(navBtns[i]).disabled = false;
        }
      }
      } else {
      updateDisplay("NO WAY JOSE");
      }  
  }