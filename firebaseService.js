var admin = require("firebase-admin");
var serviceAccount=require('./dalmiauniversity-firebase-adminsdk-3ueea-9955a44821.json')
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
const messaging=admin.messaging()  
module.exports=messaging