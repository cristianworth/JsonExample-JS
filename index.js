var defaultDatabase;
var otherDatabase;
function initializeDefaultDatabase (){
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

function initializeOtherDatabase (){
	var config2 = {
		apiKey: "AIzaSyByOiFJCC20y9RZVXVFcMQq0KSxsqN1cPU",
		authDomain: "sd-2019-cristian.firebaseapp.com",
		databaseURL: "https://sd-2019-cristian.firebaseio.com",
		projectId: "sd-2019-cristian",
		storageBucket: "sd-2019-cristian.appspot.com",
		messagingSenderId: "375700408512"
	};
	var connectionDatabase = firebase.initializeApp(config2, "otherDatabase");
	otherDatabase = connectionDatabase.database();
}


window.onload = function() {
	initializeDefaultDatabase();
	getDataDefaultDatabase();

	initializeOtherDatabase();
	getDataOtherDatabase();
};

function getDataDefaultDatabase(){
	defaultDatabase.ref('/clients/').once('value').then(function (snapshot) {
		var data = [];
		var line = "";
		snapshot.forEach(function (e) {
			line = 
			'<tr>' +
			'<td>' + e.val().id + '</td>' +
			'<td>' + e.val().name + '</td>' +
			'<td>' + e.val().address + '</td>' +
			'<td>' + e.val().city + '</td>' +
			'<td>' + e.val().pin + '</td>' +
			'<td>' + e.val().country + '</td>'+
			'</tr>';

			data.push(line);
		});
		document.querySelector('#dataDefaultDatabase>tbody').innerHTML = data.join();
	})
}

function getDataOtherDatabase(){
	otherDatabase.ref('/clients/').once('value').then(function (snapshot) {
		var data = [];
		var line = "";
		snapshot.forEach(function (e) {
			line = 
			'<tr>' +
			'<td>' + e.val().id + '</td>' +
			'<td>' + e.val().name + '</td>' +
			'<td>' + e.val().address + '</td>' +
			'<td>' + e.val().city + '</td>' +
			'<td>' + e.val().pin + '</td>' +
			'<td>' + e.val().country + '</td>'+
			'</tr>';

			data.push(line);
		});
		document.querySelector('#dataOtherDatabase>tbody').innerHTML = data.join();
	})
}

function send(){
	var obj = {
		id: $('#id').val(),
		name: $('#name').val(),
		address: $('#address').val(),
		city: $('#city').val(),
		pin: $('#pin').val(),
		country: $('#country').val(),
	};
	defaultDatabase.ref("clients/").push(obj);
	//swal("Successful!!", "Successfully created client!", "success");
}