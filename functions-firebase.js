
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
	otherDatabase.ref('/products/').once('value').then(function (snapshot) {
		var data = [];
		var line = "";
		snapshot.forEach(function (e) {
			line = 
			'<tr>' +
			'<td>' + e.val().nameProduct + '</td>' +
			'<td>' + e.val().price + '</td>' +
			'</tr>';

			data.push(line);
		});
		document.querySelector('#dataOtherDatabase>tbody').innerHTML = data.join();
	})
}

function setDataDefaultDatabase(){
	var obj = {
		id: $('#id').val(),
		name: $('#name').val(),
		address: $('#address').val(),
		city: $('#city').val(),
		pin: $('#pin').val(),
		country: $('#country').val(),
	};
	defaultDatabase.ref("clients/").push(obj);
}

function setDataOtherDatabase(){
	var obj = {
		nameProduct: $('#nameProduct').val(),
		price: $('#price').val()
	};
	otherDatabase.ref("products/").push(obj);
}