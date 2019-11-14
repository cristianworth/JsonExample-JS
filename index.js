var config = {
	apiKey: "AIzaSyByOiFJCC20y9RZVXVFcMQq0KSxsqN1cPU",
	authDomain: "sd-2019-cristian.firebaseapp.com",
	databaseURL: "https://sd-2019-cristian.firebaseio.com",
	projectId: "sd-2019-cristian",
	storageBucket: "sd-2019-cristian.appspot.com",
	messagingSenderId: "375700408512"
};
firebase.initializeApp(config);

window.onload = function() {
	firebase.database().ref('/clients/').once('value').then(function (snapshot) {
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
		document.querySelector('#data>tbody').innerHTML = data.join();
	})
};

function send(){
	var obj = {
		id: $('#id').val(),
		name: $('#name').val(),
		address: $('#address').val(),
		city: $('#city').val(),
		pin: $('#pin').val(),
		country: $('#country').val(),
	};
	firebase.database().ref("clients/").push(obj);
	//swal("Successful!!", "Successfully created client!", "success");
}