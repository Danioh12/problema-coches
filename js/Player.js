class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.positionX = 0;
    this.positionY = 0;
  }

//Función de lectura
 getCount(){
  var playerCountRef = database.ref("gameState");
 playerCountRef.on("value", function(data) {
   playerCount = data.val();
 });


 }

 //Función de actualización
 updateCount(count){
    database.ref("/").update({
      playerCount: count
    });
 }

}
