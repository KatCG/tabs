function tabs(id){
	var tab = document.getElementById("id");
	tab.style.display = "block";

	if('content-tab-1' == id) {
		var tab2 = document.getElementById('content-tab-2');
		var tab3 = document.getElementById('content-tab-3');
		tab2.style.display = "none";
		tab3.style.display = "none";
	}

	if('content-tab-2' == id) {
		var tab1 = document.getElementById('content-tab-1');
		var tab3 = document.getElementById('content-tab-3');
		tab1.style.display = "none";
		tab3.style.display = "none";
	}

	if('content-tab-3' == id) {
		var tab1 = document.getElementById('content-tab-1');
		var tab2 = document.getElementById('content-tab-2');
		tab1.style.display = "none";
		tab2.style.display = "none";
	}
}

// dentro de las llaves van los parámetros
// se guarda el elemento "content-tab-1" en la variable para manejarla
// esperamos un id(como parametro)