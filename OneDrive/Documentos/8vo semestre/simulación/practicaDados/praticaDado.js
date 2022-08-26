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

async function f2() {
	if(document.getElementById("actionButton").innerHTML=="REALIZANDO SIMULACIÓN"){
		alert("LA SIMULACIÓN YA SE ESTA EJECUTANDO");
		return;
	}

	if(document.getElementById('iteraciones').value==0){
		alert("SELECCIONE UN NUMERO DE ITERACIONES PARA PODER COMENZAR LA SIMULACIÓN");
		return;
	}

	document.getElementById("actionButton").innerHTML="REALIZANDO SIMULACIÓN";
	var p1=0,p2=0,p3=0,p4=0,p5=0,p6=0;
	var prov1=0,prov2=0,prov3=0,prov4=0,prov5=0,prov6=0;
	var totIter=0;

	for (var i = 0; i < document.getElementById('iteraciones').value; i++) {
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
		
    var dado1=document.getElementById('dado1');
    
    document.getElementById("iteracion").innerHTML=`iteración: ${i+1}`;
    var num=getRandomInt(6)+1;
    if (speed!=3) {
			if(num===1){
				dado1.src="dado1.png";
			}else if(num==2){
				dado1.src="dado2.png";
			}else if(num==3){
				dado1.src="dado3.png";
			}else if(num==4){
				dado1.src="dado4.png";
			}else if(num==5){
				dado1.src="dado5.png";
			}else{
				dado1.src="dado6.png";
			}
    }
	    

		if(num==1){
			p1++;
		}else if(num==2){
			p2++;
		}else if(num==3){
			p3++;
		}else if(num==4){
			p4++;
		}else if(num==5){
			p5++;
		}else{
			p6++;
		}
		
		prov1=Math.floor(p1/(i+1)*100);
		prov2=Math.ceil(p2/(i+1)*100);
		prov3=Math.floor(p3/(i+1)*100);
		prov4=Math.ceil(p4/(i+1)*100);
		prov5=Math.floor(p5/(i+1)*100);
		prov6=100-(prov1+prov2+prov3+prov4+prov5);

		if (speed!=3) {
			document.getElementById("result1").innerHTML=
			`<div class='d-flex flex-row'id='estadisticas1'>
				<div class='ms-3 me-4' id='valeatoria'>x = 1:</div>
				<div id='provab1'>prov: ${prov1}% </div>
				<div class='ms-5' id='rep1'>Rep: ${p1} </div>
			</div>
			<div class='d-flex flex-row'id='estadisticas1'>
				<div class='ms-3 me-4' id='valeatoria'>x = 2:</div>
				<div id='provab1'>prov: ${prov2}% </div>
				<div class='ms-5' id='rep1'>Rep: ${p2} </div>
			</div>
			<div class='d-flex flex-row' id='estadisticas1'>
				<div class='ms-3 me-4' id='valeatoria'>x = 3:</div>
				<div id='provab1'>prov: ${prov3}% </div>
				<div class='ms-5' id='rep1'>Rep: ${p3} </div>
			</div>
			<div class='d-flex flex-row' id='estadisticas1'>
				<div class='ms-3 me-4' id='valeatoria'>x = 4:</div>
				<div id='provab1'>prov: ${prov4}% </div>
				<div class='ms-5' id='rep1'>Rep: ${p4} </div>
			</div>
			<div class='d-flex flex-row' id='estadisticas1'>
				<div class='ms-3 me-4' id='valeatoria'>x = 5:</div>
				<div id='provab1'>prov: ${prov5}% </div>
				<div class='ms-5' id='rep1'>Rep: ${p5} </div>
			</div>
			<div class='d-flex flex-row' id='estadisticas1'>
				<div class='ms-3 me-4' id='valeatoria'>x = 6:</div>
				<div id='provab1'>prov: ${prov6}% </div>
				<div class='ms-5' id='rep1'>Rep: ${p6} </div>
			</div>`;
			drwarChart2(p1,p2,p3,p4,p5,p6);
		}

		
	}

	document.getElementById("iteracion").innerHTML=``;
	prov1=Math.floor(p1/(totIter+1)*100);
	prov2=Math.ceil(p2/(totIter+1)*100);
	prov3=Math.floor(p3/(totIter+1)*100);
	prov4=Math.ceil(p4/(totIter+1)*100);
	prov5=Math.floor(p5/(totIter+1)*100);
	prov6=100-(prov1+prov2+prov3+prov4+prov5);
	document.getElementById("result1").innerHTML=
	`<h6 class="mb-2">ITERACIONES REALIZADAS: ${totIter}</h6>
	<div class='d-flex flex-row'id='estadisticas1'>
		<div class='ms-3 me-4' id='valeatoria'>x = 1:</div>
		<div id='provab1'>prov: ${prov1}% </div>
		<div class='ms-5' id='rep1'>Rep: ${p1} </div>
	</div>
	<div class='d-flex flex-row'id='estadisticas1'>
		<div class='ms-3 me-4' id='valeatoria'>x = 2:</div>
		<div id='provab1'>prov: ${prov2}% </div>
		<div class='ms-5' id='rep1'>Rep: ${p2} </div>
	</div>
	<div class='d-flex flex-row' id='estadisticas1'>
		<div class='ms-3 me-4' id='valeatoria'>x = 3:</div>
		<div id='provab1'>prov: ${prov3}% </div>
		<div class='ms-5' id='rep1'>Rep: ${p3} </div>
	</div>
	<div class='d-flex flex-row' id='estadisticas1'>
		<div class='ms-3 me-4' id='valeatoria'>x = 4:</div>
		<div id='provab1'>prov: ${prov4}% </div>
		<div class='ms-5' id='rep1'>Rep: ${p4} </div>
	</div>
	<div class='d-flex flex-row' id='estadisticas1'>
		<div class='ms-3 me-4' id='valeatoria'>x = 5:</div>
		<div id='provab1'>prov: ${prov5}% </div>
		<div class='ms-5' id='rep1'>Rep: ${p5} </div>
	</div>
	<div class='d-flex flex-row' id='estadisticas1'>
		<div class='ms-3 me-4' id='valeatoria'>x = 6:</div>
		<div id='provab1'>prov: ${prov6}% </div>
		<div class='ms-5' id='rep1'>Rep: ${p6} </div>
	</div>`;
	drwarChart2(p1,p2,p3,p4,p5,p6);
	
	
	document.getElementById("actionButton").innerHTML="COMENZAR SIMULACIÓN";
    // 10
}

function drwarChart2(r1,r2,r3,r4,r5,r6){
	var canvas=document.getElementById('myChart').getContext('2d');
	const labels = [,
			    `X=1`,
			    'X=2',
			    'X=3',
			    'X=4',
			    'X=5',
			    'X=6',
			  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'Lanzamientos acertados',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0,r1, r2, r3, r4, r5, r6],
    }]
  };

  const config = {
    type: 'line',
    data: data,
    options: {}
  };

  try{
  	var chartExist = Chart.getChart("myChart"); // <canvas> id
    if (chartExist != undefined){ 
      chartExist.destroy(); 
    }
  }catch(e){
  	console.log(e); 
  }
  

  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
}