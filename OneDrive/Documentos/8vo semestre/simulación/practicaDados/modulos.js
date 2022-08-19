function select(id){
	var selection= document.getElementById(id).value;
	console.log(selection);
	if(selection==3){
		document.getElementById("funcion").innerHTML=`
		<h5 class=""></h5>
		<div class="d-flex flex-row">
			<h4 class="">Lanzamiento de dos dados</h4>
			<select class="form-control border border-secondary bg-light ms-3"  id="tipoSim" onchange="select('tipoSim')" required>
				<option value="3">Dos dados</option>
				<option value="2">Un dado</option>
				<option value="1">Moneda</option>
			</select>	
		</div>
		
		<h6 id="iteracion"></h6>
	</div>
	<select class="form-control border border-secondary bg-light mt-3"  id="velocidad" onchange="" required>
	<option value="">Velocidad normal</option>
		<option value="1">Velocidad lenta</option>
		<option value="2">Velocidad rápida</option>
		<option value="3">Sin animación</option>
	</select>
	<select class="form-control border border-secondary bg-light mt-3"  id="iteraciones" onchange="" required>
		
		<option value="0">DETENER</option>
		<option value="100">100 iteraciones</option>
		<option value="500">500 iteraciones</option>
		<option value="1000">1,000 iteraciones</option>
		<option value="2000">2,000 iteraciones</option>
		<option value="5000">5,000 iteraciones</option>
		<option value="10000">10,000 iteraciones</option>
		<option value="50000">50,000 iteraciones</option>
	</select>
	<div class="d-flex flex-column justify-content-center align-items-center mt-4 p-2" id="result1"></div>
	<div class="row">
		<img class="container shadow m-3 justify-content-center align-items-center me-5" id="dado1" src="dado5.png" width="100px">
		<img class="container shadow m-3 justify-content-center align-items-center" id="dado2" src="dado6.png" width="100px">
	</div>
	<button type="button" class="btn btn-dark shadow mt3" onclick="f1()" id="actionButton">COMENZAR SIMULACIÓN</button>
		`;
	}else if(selection==2){
		document.getElementById("funcion").innerHTML=`
		<div class="d-flex flex-column justify-content-center bg-light mt-2 mb-2 ps-2 pe-2 pb-1 pt-1 shadow "  id="title">
			<h5 class=""></h5>
			<div class="d-flex flex-row">
				<h4 class="">Lanzamiento de un dado</h4>
				<select class="form-control border border-secondary bg-light ms-3"  id="tipoSim" onchange="select('tipoSim')" required>
					<option value="2">Un dado</option>
					<option value="3">Dos dados</option>
					<option value="1">Moneda</option>
				</select>
			</div>
			
			<h6 id="iteracion"></h6>
		</div>
		<select class="form-control border border-secondary bg-light mt-3"  id="velocidad" onchange="" required>
		<option value="">Velocidad normal</option>
			<option value="1">Velocidad lenta</option>
			<option value="2">Velocidad rápida</option>
			<option value="3">Sin animación</option>
		</select>
		<select class="form-control border border-secondary bg-light mt-3"  id="iteraciones" onchange="" required>
			
			<option value="0">DETENER</option>
			<option value="100">100 iteraciones</option>
			<option value="500">500 iteraciones</option>
			<option value="1000">1,000 iteraciones</option>
			<option value="2000">2,000 iteraciones</option>
			<option value="5000">5,000 iteraciones</option>
			<option value="10000">10,000 iteraciones</option>
			<option value="50000">50,000 iteraciones</option>
		</select>
		<div class="d-flex flex-column justify-content-center align-items-center mt-4 p-2" id="result1"></div>
		
		<img class="container shadow m-3 justify-content-center align-items-center" id="dado1" src="dado5.png" width="100px">
		
		<button type="button" class="btn btn-dark shadow mt3" onclick="f2()" id="actionButton">COMENZAR SIMULACIÓN</button>
		`
	}else if(selection==1){
		document.getElementById("funcion").innerHTML=`
		<div class="d-flex flex-row">
			<h4 class="">Lanzamiento de moneda</h4>
			<select class="form-control border border-secondary bg-light ms-3"  id="tipoSim" onchange="select('tipoSim')" required>
				<option value="1">Moneda</option>
				<option value="2">Un dado</option>
				<option value="3">Dos dados</option>
			</select>	
		</div>
		<select class="form-control border border-secondary bg-light mt-3"  id="velocidad" onchange="" required>
		<option value="">Velocidad normal</option>
			<option value="1">Velocidad lenta</option>
			<option value="2">Velocidad rápida</option>
			<option value="3">Sin animación</option>
		</select>
		<select class="form-control border border-secondary bg-light mt-3"  id="itered" onchange="" required>
			<option value="0">DETENER</option>
			<option value="100">100 iteraciones</option>
			<option value="500">500 iteraciones</option>
			<option value="1000">1,000 iteraciones</option>
			<option value="2000">2,000 iteraciones</option>
			<option value="5000">5,000 iteraciones</option>
			<option value="10000">10,000 iteraciones</option>
			<option value="50000">50,000 iteraciones</option>
		</select>
		<h5 class="ms-3 mt-4" id="iteraciones">iteraciones 0</h5>
		<div class="d-flex flex-row  justify-content-center align-items-center">
			<img src="cara.png" width="150" class="mt-4">
			<h5 class="ms-3 mt-4" id="caraname">CARA</h5>
			<p class="ms-5 mt-5" id="caraProv">prov: 50%</p>
			<p class="ms-5 mt-5" id="caraRep">Rep: 0</p>
		</div>
		
		<div class="d-flex flex-row  justify-content-center align-items-center">
			<img src="cruz.png" width="150" class="mt-4">
			<h5 class="ms-3 mt-4" id="caraname">CRUZ</h5>
			<p class="ms-5 mt-5" id="cruzProv">Prov: 50%</p>
			<p class="ms-5 mt-5" id="cruzRep">Rep: 0</p>
		</div>
		<button type="button" class="btn btn-dark shadow mt-5" onclick="f3()" id="actionButton">COMENZAR SIMULACIÓN</button>
		`;

	}
}