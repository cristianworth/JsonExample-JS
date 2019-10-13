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
};
function setLocalStorage() {
	//SetJson
	var myJSON = JSON.stringify($('form').serializeArray());
	localStorage.setItem("myJSON", myJSON);
}