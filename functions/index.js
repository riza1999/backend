const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

//Membuat fungsi baru bernama (ProgramPertama)
exports.ProgramPertama = functions.https.onRequest((request, response) => {
    
    //Menampilkan log pada Cloud Function
    console.log("Belajar Firebase Cloud Functions"); 
    
    //Menampilkan Teks pada Layar
    response.send("Selamat Datang di WILDAN TECHNO ART - Cianjur Apps Developers");
});