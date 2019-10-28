const admin = require("firebase-admin");

const serviceAccount = require("C:/Users/matheus.franco/Documents/pgweblib-auttest-firebase-adminsdk-hoorf-aa5f9c7409.json");

admin.initializeApp( {
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://pgweblib-auttest.firebaseio.com"
});

const registrationToken = "cOlR-tfRC7w:APA91bHYl_Z1OIEgpxfmQglvU9E4FA_b8AO5j-eSNCPfACyHg7HBAU4y1Opl6DLqybBeIXVfQXFqTxVlKfTdf-7ug_vpftGM4KUtjI37_UZqCd8DoskkVxiGEr48CN6Bc0CuZcYHW48j";

var exports = module.exports = {};

// define what will be delivered on the device
let setPayload = (op, info) => {
  info = JSON.stringify(info);
  var payload = {
    data:{
      operacao: op,
      dados: info
    }  
  }
  return payload;
};

//define some options when sending msg to the device
const options = {
  priority: "high",
  timeToLive: 60
};


exports.sendData = ( op, pl, res ) => {
   var payload = setPayload( op, pl );
    admin.messaging().sendToDevice( registrationToken, payload, options ).then( response => { 
      return  res.json({Successfully: response });
  }).catch( ( error ) => { 
    return res.json( {Error:error} );
  })
};