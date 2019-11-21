var defaultDatabase;
var otherDatabase;
function initializeDefaultDatabase() {
  var config = {
    apiKey: "AIzaSyByOiFJCC20y9RZVXVFcMQq0KSxsqN1cPU",
    authDomain: "sd-2019-cristian.firebaseapp.com",
    databaseURL: "https://sd-2019-cristian.firebaseio.com",
    projectId: "sd-2019-cristian",
    storageBucket: "sd-2019-cristian.appspot.com",
    messagingSenderId: "375700408512"
  };
  firebase.initializeApp(config);
  defaultDatabase = firebase.database();
}

function initializeOtherDatabase() {
  var config = {
    apiKey: "AIzaSyCPzwtfTmk0wJVNOnLdkl54mLRoSWOTAyI",
    authDomain: "product-sd-2019-cristian.firebaseapp.com",
    databaseURL: "https://product-sd-2019-cristian.firebaseio.com",
    projectId: "product-sd-2019-cristian",
    storageBucket: "product-sd-2019-cristian.appspot.com",
    messagingSenderId: "160413180818"
  };
  var connectionDatabase = firebase.initializeApp(config, "otherDatabase");
  otherDatabase = connectionDatabase.database();
}

window.onload = function() {
  initializeDefaultDatabase();
  getDataDefaultDatabase();

  initializeOtherDatabase();
  getDataOtherDatabase();
};

function addClient() {
  setDataDefaultDatabase();
  //swal("Successful!!", "Successfully created client!", "success");
}

function addProduct() {
  setDataOtherDatabase();
  //swal("Successful!!", "Successfully created product!", "success");
}