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

async function f1() {
	if(document.getElementById("actionButton").innerHTML=="REALIZANDO SIMULACIÓN"){
		alert("LA SIMULACIÓN YA SE ESTA EJECUTANDO");
		return;
	}

	if(document.getElementById('iteraciones').value==0){
		alert("SELECCIONE UN NUMERO DE ITERACIONES PARA PODER COMENZAR LA SIMULACIÓN");
		return;
	}

	document.getElementById("actionButton").innerHTML="REALIZANDO SIMULACIÓN";
	var p2=0,p3=0,p4=0,p5=0,p6=0,p7=0,p8=0,p9=0,p10=0,p11=0,p12=0;
	var pr2=0,pr3=0,pr4=0,pr5=0,pr6=0,pr7=0,pr8=0,pr9=0,pr10=0,pr11=0,pr12=0;
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
    var dado2=document.getElementById('dado2');
    document.getElementById("iteracion").innerHTML=`iteración: ${i+1}`;
    var num=getRandomInt(6)+1;
    var num2=getRandomInt(6)+1;
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

			if(num2===1){
				dado2.src="dado1.png";
			}else if(num2==2){
				dado2.src="dado2.png";
			}else if(num2==3){
				dado2.src="dado3.png";
			}else if(num2==4){
				dado2.src="dado4.png";
			}else if(num2==5){
				dado2.src="dado5.png";
			}else{
				dado2.src="dado6.png";
			}
	   }
	    

		if(num+num2==2){
			p2++;
		}else if(num+num2==3){
			p3++;
		}else if(num+num2==4){
			p4++;
		}else if(num+num2==5){
			p5++;
		}else if(num+num2==6){
			p6++;
		}else if(num+num2==7){
			p7++;
		}else if(num+num2==8){
			p8++;
		}else if(num+num2==9){
			p9++;
		}else if(num+num2==10){
			p10++;
		}else if(num+num2==11){
			p11++;
		}else{
			p12++
		}

		pr2=Math.floor(p2/(i+1)*100);
		pr3=Math.ceil(p3/(i+1)*100);
		pr4=Math.floor(p4/(i+1)*100);
		pr5=Math.ceil(p5/(i+1)*100);
		pr6=Math.floor(p6/(i+1)*100);
		pr7=Math.ceil(p7/(i+1)*100);
		pr8=Math.floor(p8/(i+1)*100);
		pr9=Math.ceil(p9/(i+1)*100);
		pr10=Math.floor(p10/(i+1)*100);
		pr11=Math.ceil(p11/(i+1)*100);
		pr12=100-(pr2+pr3+pr4+pr5+pr6+pr7+pr8+pr9+pr10+pr11);
		if(pr12<0)pr12=0;
		

		

		if (speed!=3) {
			document.getElementById("result1").innerHTML=
			`<div class='d-flex flex-row'id='estadisticas1'>
				<div class='ms-3 me-4' id='valeatoria'>x = 2:</div>
				<div id='provab1'>prov: ${pr2}% </div>
				<div class='ms-5' id='rep1'>Rep: ${p2} </div>
			</div>
			<div class='d-flex flex-row' id='estadisticas1'>
				<div class='ms-3 me-4' id='valeatoria'>x = 3:</div>
				<div id='provab1'>prov: ${pr3}% </div>
				<div class='ms-5' id='rep1'>Rep: ${p3} </div>
			</div>
			<div class='d-flex flex-row' id='estadisticas1'>
				<div class='ms-3 me-4' id='valeatoria'>x = 4:</div>
				<div id='provab1'>prov: ${pr4}% </div>
				<div class='ms-5' id='rep1'>Rep: ${p4} </div>
			</div>
			<div class='d-flex flex-row' id='estadisticas1'>
				<div class='ms-3 me-4' id='valeatoria'>x = 5:</div>
				<div id='provab1'>prov: ${pr5}% </div>
				<div class='ms-5' id='rep1'>Rep: ${p5} </div>
			</div>
			<div class='d-flex flex-row' id='estadisticas1'>
				<div class='ms-3 me-4' id='valeatoria'>x = 6:</div>
				<div id='provab1'>prov: ${pr6}% </div>
				<div class='ms-5' id='rep1'>Rep: ${p6} </div>
			</div>
			<div class='d-flex flex-row' id='estadisticas1'>
				<div class='ms-3 me-4' id='valeatoria'>x = 7:</div>
				<div id='provab1'>prov: ${pr7}% </div>
				<div class='ms-5' id='rep1'>Rep: ${p7} </div>
			</div>
			<div class='d-flex flex-row' id='estadisticas1'>
				<div class='ms-3 me-4' id='valeatoria'>x = 8:</div>
				<div id='provab1'>prov: ${pr8}% </div>
				<div class='ms-5' id='rep1'>Rep: ${p8} </div>
			</div>
			<div class='d-flex flex-row' id='estadisticas1'>
				<div class='ms-3 me-4' id='valeatoria'>x = 9:</div>
				<div id='provab1'>prov: ${pr9}% </div>
				<div class='ms-5' id='rep1'>Rep: ${p9} </div>
			</div>
			<div class='d-flex flex-row' id='estadisticas1'>
				<div class='ms-3 me-4' id='valeatoria'>x = 10:</div>
				<div id='provab1'>prov: ${pr10}%</div>
				<div class='ms-5' id='rep1'>Rep: ${p10} </div>
			</div>
			<div class='d-flex flex-row' id='estadisticas1'>
				<div class='ms-3 me-4' id='valeatoria'>x = 11:</div>
				<div id='provab1'>prov: ${pr11}%</div>
				<div class='ms-5' id='rep1'>Rep: ${p11} </div>
			</div>
			<div class='d-flex flex-row' id='estadisticas1'>
				<div class='ms-3 me-4' id='valeatoria'>x = 12:</div>
				<div id='provab1'>prov: ${pr12}% </div>
				<div class='ms-5' id='rep1'>Rep: ${p12} </div>
			</div>`;
			drwarChart1(p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12);
		}
	}

	pr2=Math.floor(p2/(totIter+1)*100);
		pr3=Math.ceil(p3/(totIter+1)*100);
		pr4=Math.floor(p4/(totIter+1)*100);
		pr5=Math.ceil(p5/(totIter+1)*100);
		pr6=Math.floor(p6/(totIter+1)*100);
		pr7=Math.ceil(p7/(totIter+1)*100);
		pr8=Math.floor(p8/(totIter+1)*100);
		pr9=Math.ceil(p9/(totIter+1)*100);
		pr10=Math.floor(p10/(totIter+1)*100);
		pr11=Math.ceil(p11/(totIter+1)*100);
		pr12=100-(pr2+pr3+pr4+pr5+pr6+pr7+pr8+pr9+pr10+pr11);
		if(pr12<0)pr12=0;

	document.getElementById("iteracion").innerHTML=``;
	document.getElementById("result1").innerHTML=
	`<h6 class="mb-2">ITERACIONES REALIZADAS: ${totIter}</h6>
	<div class='d-flex flex-row'id='estadisticas1'>
		<div class='ms-3 me-4' id='valeatoria'>x = 2:</div>
		<div id='provab1'>prov: ${pr2}% </div>
		<div class='ms-5' id='rep1'>Rep: ${p2} </div>
	</div>
	<div class='d-flex flex-row' id='estadisticas1'>
		<div class='ms-3 me-4' id='valeatoria'>x = 3:</div>
		<div id='provab1'>prov: ${pr3}% </div>
		<div class='ms-5' id='rep1'>Rep: ${p3} </div>
	</div>
	<div class='d-flex flex-row' id='estadisticas1'>
		<div class='ms-3 me-4' id='valeatoria'>x = 4:</div>
		<div id='provab1'>prov: ${pr4}% </div>
		<div class='ms-5' id='rep1'>Rep: ${p4} </div>
	</div>
	<div class='d-flex flex-row' id='estadisticas1'>
		<div class='ms-3 me-4' id='valeatoria'>x = 5:</div>
		<div id='provab1'>prov: ${pr5}% </div>
		<div class='ms-5' id='rep1'>Rep: ${p5} </div>
	</div>
	<div class='d-flex flex-row' id='estadisticas1'>
		<div class='ms-3 me-4' id='valeatoria'>x = 6:</div>
		<div id='provab1'>prov: ${pr6}% </div>
		<div class='ms-5' id='rep1'>Rep: ${p6} </div>
	</div>
	<div class='d-flex flex-row' id='estadisticas1'>
		<div class='ms-3 me-4' id='valeatoria'>x = 7:</div>
		<div id='provab1'>prov: ${pr7}% </div>
		<div class='ms-5' id='rep1'>Rep: ${p7} </div>
	</div>
	<div class='d-flex flex-row' id='estadisticas1'>
		<div class='ms-3 me-4' id='valeatoria'>x = 8:</div>
		<div id='provab1'>prov: ${pr8}% </div>
		<div class='ms-5' id='rep1'>Rep: ${p8} </div>
	</div>
	<div class='d-flex flex-row' id='estadisticas1'>
		<div class='ms-3 me-4' id='valeatoria'>x = 9:</div>
		<div id='provab1'>prov: ${pr9}% </div>
		<div class='ms-5' id='rep1'>Rep: ${p9} </div>
	</div>
	<div class='d-flex flex-row' id='estadisticas1'>
		<div class='ms-3 me-4' id='valeatoria'>x = 10:</div>
		<div id='provab1'>prov: ${pr10}%</div>
		<div class='ms-5' id='rep1'>Rep: ${p10} </div>
	</div>
	<div class='d-flex flex-row' id='estadisticas1'>
		<div class='ms-3 me-4' id='valeatoria'>x = 11:</div>
		<div id='provab1'>prov: ${pr11}%</div>
		<div class='ms-5' id='rep1'>Rep: ${p11} </div>
	</div>
	<div class='d-flex flex-row' id='estadisticas1'>
		<div class='ms-3 me-4' id='valeatoria'>x = 12:</div>
		<div id='provab1'>prov: ${pr12}% </div>
		<div class='ms-5' id='rep1'>Rep: ${p12} </div>
	</div>`;
	drwarChart1(p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12);	
	
	
	document.getElementById("actionButton").innerHTML="COMENZAR SIMULACIÓN";
    // 10
}

function drwarChart1(r2,r3,r4,r5,r6,r7,r8,r9,r10,r11,r12){
	var canvas=document.getElementById('myChart').getContext('2d');
	const labels = [,
			    'X=2',
			    'X=3',
			    'X=4',
			    'X=5',
			    'X=6',
			    'X=7',
			    'X=8',
			    'X=9',
			    'X=10',
			    'X=11',
			    'X=12'
			  ];

  const data = {
    labels: labels,
    datasets: [{
    	type:'bar',
      label: 'Lanzamientos acertados',
      backgroundColor: ['rgb(54, 162, 235)','rgb(255, 99, 132)'],
      borderColor: ['rgb(255, 99, 132)','rgb(54, 162, 235)'],
      data: [0, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12],
    }]
  };

  const config = {
     type: 'scatter',
    data: data,
    options: {
	    scales: {
	      y: {
	        beginAtZero: true
	      }
	    }
	  }
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