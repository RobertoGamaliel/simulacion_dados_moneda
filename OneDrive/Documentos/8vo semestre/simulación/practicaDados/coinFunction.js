function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    },x);
  });
}

async function f3() {
	if(document.getElementById("actionButton").innerHTML=="REALIZANDO SIMULACIÓN"){
		alert("LA SIMULACIÓN YA SE ESTA EJECUTANDO");
		return;
	}

	if(document.getElementById('itered').value==0){
		alert("SELECCIONE UN NUMERO DE ITERACIONES PARA PODER COMENZAR LA SIMULACIÓN");
		return;
	}
	document.getElementById("actionButton").innerHTML="REALIZANDO SIMULACIÓN";
	var cara=0,cruz=0;
	var totIter=0;
	var prov1=0;
	var prov2=0;
	for (var i = 0; i < document.getElementById('itered').value; i++) {
		totIter++;
		var speed =document.getElementById('velocidad').value;
		console.log(speed);
		if(speed==""){
			await resolveAfter2Seconds(100);
		}else if(speed==1){
			await resolveAfter2Seconds(400);
		}else if(speed==2){
			await resolveAfter2Seconds(10);
		}
		
    document.getElementById("iteraciones").innerHTML=`Iteraciónes: ${i+1}`;
    var num=getRandomInt(2)+1;
	    
		if(num==1){
			cara++;
			prov1= Math.floor(cara/(i+1)*100);
			prov2=100-prov1;
			document.getElementById("caraProv").innerHTML=`Prov: ${prov1}%`;
			document.getElementById("caraRep").innerHTML=`Rep: ${cara}`;
			document.getElementById("cruzProv").innerHTML=`Prov: ${prov2}%`;
			document.getElementById("cruzRep").innerHTML=`Rep: ${cruz}`;
		}else {
			cruz++;
			prov2=Math.floor(cruz/(i+1)*100);
			prov1=100-prov2;
			document.getElementById("caraProv").innerHTML=`Prov: ${prov1}%`;
			document.getElementById("caraRep").innerHTML=`Rep: ${cara}`;
			document.getElementById("cruzProv").innerHTML=`Prov: ${prov2}%`;
			document.getElementById("cruzRep").innerHTML=`Rep: ${cruz}`;
		}	
	}

	var prov1=Math.floor(cara/(totIter+1)*100);
	var prov2=100-prov1;
	document.getElementById("caraProv").innerHTML=`Prov: ${prov1}%`;
	document.getElementById("caraRep").innerHTML=`Rep: ${cara}`;
	document.getElementById("cruzProv").innerHTML=`Prov: ${prov2}%`;
	document.getElementById("cruzRep").innerHTML=`Rep: ${cruz}`;

	document.getElementById("iteraciones").innerHTML=`Iteraciones totales: ${totIter}`;
	
		
	
	
	document.getElementById("actionButton").innerHTML="COMENZAR SIMULACIÓN";
    // 10
}