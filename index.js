window.onload = function() {
	//GetJson
	var json = localStorage.getItem("myJSON");
	obj = JSON.parse(json);
	if (obj != null) {
		//Set Fields Values
		obj.forEach(function(campo){
			document.getElementById(campo.name).value = campo.value;
		});
	}
	
	debugger;
	$.ajax({
		url: "https://ageless-answer-251400.firebaseio.com/clientes/100.json",
		//url: "https://fir-sd-35b18.firebaseio.com/user.json",
		async: true
	}).done(function (data) {
		var dados = JSON.stringify(data);
		console.log(dados)
	});
	
	$.ajax({
                    url: 'https://ageless-answer-251400.firebaseio.com/clientes/100.json',
                    type: 'GET',
                    success: function(retorno){
                        $.each(retorno, function(dados) {
							console.log(dados.first);
							console.log(dados.last);
                        })
                    }
                })
};
function setLocalStorage() {
	//SetJson
	var myJSON = JSON.stringify($('form').serializeArray());
	localStorage.setItem("myJSON", myJSON);
}
function registerAccount() {
	//Reset Fields
	document.getElementById("form").reset();
	localStorage.setItem("myJSON", null);
	swal("Successful!!", "Your account has now been created!", "success");
}