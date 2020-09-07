/*function digita(n){
	document.getElementById("barra").value+=n;
}

function esegui(){
	document.getElementById("barra").value=eval(document.getElementById("barra").value);
}

function cancella(){
	document.getElementById("barra").value= '';
}*/

//JQUERY

$(document).ready(function(){
	console.log("PROVAAA");
	
	//DIGITA
	$(".btn-j").click(function(){		
		let n = $(this).val();
		let tot = $("#barra").val()+n;
		$("#barra").val(tot);
		console.log("CLICK " + n);
	});
	
	//ESEGUI
	$("#esegui").click(function(){
		$("#barra").val(eval($("#barra").val())) ;
		console.log("ESEGUI");
	});
	
	//CANCELLA
	$("#c").click(function(){
		$("#barra").val('');
		console.log("CANCELLA");
	});
});
