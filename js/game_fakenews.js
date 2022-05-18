//variables
let encerts = 0;
let vides = 3;
let t_restant = false;
let timer = 90;
let stopTimer = null;
let currentQuestion = {};

let mostrarEncerts = document.getElementById('encerts');
let mostrarTemps = document.getElementById('t-restant');
let mostrarVides = document.getElementById('vides');
let bar = document.getElementById("myBar");

const MAX_ENCERTS = 3;


//////////////
function contarTemps(){
	stopTimer = setInterval(()=>{
		timer--;
		mostrarTemps.innerHTML = `${timer}`;
		if(timer===0){
			clearInterval(stopTimer);
			return window.location.assign('tips.html')
		}
	}, 1000);
}

function setColor(id, color){
	var button = document.getElementById(id);
	button.style.backgroundColor=color;
	button.disabled = true;
}

/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

////////////

if(t_restant == false){ //comença a contar
		contarTemps();
		t_restant = true;
}

width = 0;
//funcio principal
function clicar(id){

	if(id == '2' || id == '5' || id == '6'){ //en cas que la resposta sigui correcta
		encerts ++;
		width = width+30;
		mostrarEncerts.innerHTML = `${encerts} / ${MAX_ENCERTS}`;
		setColor(id, '#c3cc22'); //green
		bar.style.width = width + "%";

		if(encerts==3){ //si el jugador encerta les tres notícies, el joc s'acaba, guanya el joc
			//print end game
			clearInterval(stopTimer);
			mostrarTemps.innerHTML = `Només has tardat ${90 - timer} segons`;
			//$('#playAgainButton').show(); //s'ha de crear un botó playAgainButton
			return window.location.assign('end.html') //has guanyat el joc!!
		}

	}else{ //en cas que la resposta sigui falsa
		vides--;
		setColor(id, '#ff5757'); //red
		if (vides == 2){
			document.getElementById("myLifeBar").src="src/-1heart.png";
		}
		else if (vides == 1){
			document.getElementById("myLifeBar").src="src/-2heart.png";
		}
		else if (vides == 0){ //si el jugador perd totes les vides, perd el joc
			clearInterval(stopTimer)
			//$('#playAgainButton').show(); //s'ha de crear un botó playAgainButton
			document.getElementById("myLifeBar").src="src/-3heart.png";
			return window.location.assign('perdut.html') //torna a començar
		}
	}
}


