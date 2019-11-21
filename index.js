var clientDatabase;
var productDatabase;
function initializeClientDatabase() {
  var config = {
    apiKey: "AIzaSyByOiFJCC20y9RZVXVFcMQq0KSxsqN1cPU",
    authDomain: "sd-2019-cristian.firebaseapp.com",
    databaseURL: "https://sd-2019-cristian.firebaseio.com",
    projectId: "sd-2019-cristian",
    storageBucket: "sd-2019-cristian.appspot.com",
    messagingSenderId: "375700408512"
  };
  firebase.initializeApp(config);
  clientDatabase = firebase.database();
}

function initializeProductDatabase() {
  var config = {
    apiKey: "AIzaSyCPzwtfTmk0wJVNOnLdkl54mLRoSWOTAyI",
    authDomain: "product-sd-cristian-2019.firebaseapp.com",
    databaseURL: "https://product-sd-cristian-2019.firebaseio.com",
    projectId: "product-sd-cristian-2019",
    storageBucket: "product-sd-cristian-2019.appspot.com",
    messagingSenderId: "160413180818"
  };
  var connectionDatabase = firebase.initializeApp(config, "productDatabase");
  productDatabase = connectionDatabase.database();
}

window.onload = function() {
  initializeClientDatabase();
  getDataClientDatabase();

  initializeProductDatabase();
  getDataProductDatabase();
};

function addClient() {
  setDataClientDatabase();
  //swal("Successful!!", "Successfully created client!", "success");
}

function addProduct() {
  setDataProductDatabase();
  //swal("Successful!!", "Successfully created product!", "success");
}
