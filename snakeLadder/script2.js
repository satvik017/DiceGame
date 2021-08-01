const span = document.getElementsByTagName('span');
const btn = document.querySelector('#btn');
const playag = document.querySelector("#playagain");

const pl1 = document.getElementById('pl1');
const pl2 = document.getElementById('pl2');

const dice = document.querySelector('.dice');

const wonP1 = document.getElementById('wonP1');
const wonP2 = document.getElementById('wonP2');

let currentScore, playing, activePlayer = 1, scores;
var p1=0, p2=0;
const b = [];
for(let i=1; i<=100; i++){
	b[i] = document.getElementById(`b${i}`);
}

//switching active player
const switchPlayer = function(){
		currentScore = 0;
		activePlayer = activePlayer == 0 ? 1 : 0;
		pl1.classList.toggle('player--active');
		pl2.classList.toggle('player--active');
}

const removeClassYellow = function(n){
	for(let i=1; i<n; i++){
	b[i].classList.remove('yellow');
	}
}
const removeClassPink = function(n){
	for(let i=1; i<n; i++){
	b[i].classList.remove('pink');
	}
}

function calmove(n){
	switch(n)
	{
		case 7:
			n = 27;
			break;
		case 9:
			n = 56;
			break;
		case 21:
			n = 96;
			break;
		case 32:
			if(activePlayer === 1 )
			removeClassYellow(n);
			else
			removeClassPink(n);
			n = 5;
			break;

		case 36:
			n = 64;
			break;
		case 41:
			n = 92;
			break;
		case 44:
			if(activePlayer === 1 )
			removeClassYellow(n);
			else
			removeClassPink(n);
			n = 16;
			break;
		case 49:
			if(activePlayer === 1 )
			removeClassYellow(n);
			else
			removeClassPink(n);
			n = 11;
			break;
		case 51:
			n = 91;
			break;
		case 60:
			n = 97;
			break;
		case 65:
			n = 85;
			break;
		case 67:
			n = 87;
			break;
		case 74:
			if(activePlayer === 1 )
			removeClassYellow(n);
			else
			removeClassPink(n);
			n = 3;
			break;
		case 90:
			if(activePlayer === 1 )
			removeClassYellow(n);
			else
			removeClassPink(n);
			n = 50;
			break;
		case 94:
			if(activePlayer === 1 )
			removeClassYellow(n);
			else
			removeClassPink(n);
			n = 63;
			break;
		case 99:
			if(activePlayer === 1 )
			removeClassYellow(n);
			else
			removeClassPink(n);
			n = 10;
			break;
		}
		
		return n;
	}


	//roll dice
btn.addEventListener('click', function(){
	let get =Math.trunc((Math.random() * 6)+1);
if(activePlayer===1){
	dice.src = `dice-${get}.png`;
	console.log(get);

	p1 += get;
	p1=calmove(p1);
	
	if(p1 > 100){
		p1 -= get;
	}else if(p1==100){
		console.log(`pl1 won`);
		dice.style.display = 'none';
		
		wonP1.style.display = 'block';
		wonP2.style.display = 'block';
		wonP2.innerHTML = ':(';
		btn.style.display = 'none';
		playag.style.display = "block";
	}
	b[p1].classList.add('yellow');
	console.log(p1);
	removeClassYellow(p1);
}
else{
	dice.src = `dice-${get}.png`;
	console.log(get);

	p2 += get;
	// b[p2].classList.add('yellow');
	p2 = calmove(p2);


	if(p2 > 100){
		p2 -= get;
	}
	if(p2==100){
		console.log(`pl2 won`);
		dice.style.display = 'none';

		wonP2.style.display = 'block';
		wonP1.style.display = 'block';
		wonP1.innerHTML = ':(';
		btn.style.display = 'none';
		playag.style.display = "block";
	}
	b[p2].classList.add('pink');
	console.log(p2);
	removeClassPink(p2);
}
if(get !== 6){
	switchPlayer();
}
	
});


