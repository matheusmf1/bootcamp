const admin = require("firebase-admin");

const serviceAccount = require("C:/Users/matheus.franco/Documents/pgweblib-auttest-firebase-adminsdk-hoorf-aa5f9c7409.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://pgweblib-auttest.firebaseio.com"
});

const registrationToken = "cOlR-tfRC7w:APA91bHYl_Z1OIEgpxfmQglvU9E4FA_b8AO5j-eSNCPfACyHg7HBAU4y1Opl6DLqybBeIXVfQXFqTxVlKfTdf-7ug_vpftGM4KUtjI37_UZqCd8DoskkVxiGEr48CN6Bc0CuZcYHW48j";

// define what will be delivered on the device
var payload = {
  // only data - without notifications
  data: {
    operacao: "transacao", 
    dados: "teste"
  }
};

//define some options when sending msg to the device
var options = {
  priority: "high",
  timeToLive: 60 * 3
};

admin.messaging().sendToDevice( registrationToken, payload, options ).then( response => { 
  console.log( "Successfully sent msg: ", response );
}).catch( ( error ) => { 
  console.log( "Error sending msg: ",error ) 
});