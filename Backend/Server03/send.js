const admin = require("firebase-admin");

const serviceAccount = require("C:/Users/matheus.franco/Documents/pgweblib-auttest-firebase-adminsdk-hoorf-aa5f9c7409.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://pgweblib-auttest.firebaseio.com"
});

const registrationToken = "cOlR-tfRC7w:APA91bHYl_Z1OIEgpxfmQglvU9E4FA_b8AO5j-eSNCPfACyHg7HBAU4y1Opl6DLqybBeIXVfQXFqTxVlKfTdf-7ug_vpftGM4KUtjI37_UZqCd8DoskkVxiGEr48CN6Bc0CuZcYHW48j";


var info = JSON.stringify(
  { "operations":[
    {
      "operation":"PWOPER_SALE",
      "PWINFO_TOTAMNT":"10000",
      "PWINFO_CURRENCY":"986",
      "PWINFO_CURREXP":"2",
      "PWINFO_FISCALREF":"1000",
      "PWINFO_CARDTYPE":"1",
      "PWINFO_VIRTMERCH":"3061",
      "PWINFO_AUTHSYST":"BIN",
      "PWINFO_FINTYPE":"01",
      "CVV":"123",
      "RemoteControl_Address":"10.1.2.15:5558",
      "RemoteControl_Card":".//Scripts//1.08//MagStripe//Cielo//CARTAO 003.spp"
    }   
  ]}
);

// define what will be delivered on the device
var payload = {
  // only data - without notifications
  data: {
    operacao: "transacao", 
    dados: info
  }
};

console.log(payload)


//define some options when sending msg to the device
var options = {
  priority: "high",
  timeToLive: 60
};

admin.messaging().sendToDevice( registrationToken, payload, options ).then( response => { 
  console.log( "Successfully sent msg: ", response );
}).catch( ( error ) => { 
  console.log( "Error sending msg: ",error ) 
});