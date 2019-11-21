
function getDataClientDatabase(){
	clientDatabase.ref('/clients/').once('value').then(function (snapshot) {
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
        $("#dataClientDatabase tbody").append(data);
	})
}

function getDataProductDatabase(){
	productDatabase.ref('/products/').once('value').then(function (snapshot) {
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
        $("#dataProductDatabase tbody").append(data);
	})
}

function setDataClientDatabase(){
	var obj = {
		id: $('#id').val(),
		name: $('#name').val(),
		address: $('#address').val(),
		city: $('#city').val(),
		pin: $('#pin').val(),
		country: $('#country').val(),
	};
	clientDatabase.ref("clients/").push(obj);
}

function setDataProductDatabase(){
	var obj = {
		nameProduct: $('#nameProduct').val(),
		price: $('#price').val()
	};
	productDatabase.ref("products/").push(obj);
}