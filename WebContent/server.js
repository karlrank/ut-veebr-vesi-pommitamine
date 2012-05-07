function Server(){this.ownField=generateEmptyField();this.oppField=generateEnemyField();this.enemyShips=generateShips(this.oppField);this.ownShips=generateShips(this.ownField);this.registerShot=registerShot;this.getEnemyResponse=getEnemyResponse;this.confirmShips=confirmShips;this.isGameOver=isGameOver;this.ready=ready;}
function registerShot(shot){$.post("game",{"coords":JSON.stringify(shot)});var txt="123";if(txt=="0"){return 0;}
else if(txt=="1"){return 1;}
else if(txt=="2"){return 2;}
else{var ship=JSON.parse(txt);var ship=new Ship(ship.coordinates);drawDownedShip(ship);return 3;}}
function getEnemyResponse(){return generateRandomEnemyResponse();}
function confirmShips(){if(!validateShips(this.ownField)){return false;}
drawShips(generateShips(this.ownField));return true;}
function isGameOver(){var msg=$.get("gameOver");setTimeout("",200);var txt=msg.responseText;if(txt=="1"){return 1;}
else if(txt=="2"){return 2;}
else{return 0;}}
function ready(){var msg=$.get("ready");setTimeout("",200);var txt=msg.responseText;if(txt=="1"){return true;}
else{return false;}}