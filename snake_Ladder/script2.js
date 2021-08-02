const span = document.getElementsByTagName('span');
const btnRoll = document.querySelector('.btn');

const pl1 = document.getElementById('pl1');
const pl2 = document.getElementById('pl2');

const dice = document.querySelector('.dice');

const wonP1 = document.getElementById('wonP1');
const wonP2 = document.getElementById('wonP2');
const gameOver = document.getElementById('gameOver');
let currentScore, playing, activePlayer = 1, scores;
let p1=0, p2=0;
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

const removeClass = function(n){
	if(n == 7)
		n = 27;
	else if(n== 9)
		n = 56;
	else if(n== 21)
		n = 96;
	else if(n== 32){
		if (activePlayer ==1 ) {
			removeClassYellow(n);
		}else{
			removeClassPink(n);
		}
		n = 5;
		}
	else if(n== 36)
		n = 64;
	else if(n== 41)
		n = 92;
	else if(n== 44){
			if (activePlayer ==1 ) {
			removeClassYellow(n);
			}else{
			removeClassPink(n);
			}
			n = 16;
		}
	else if(n== 49){
			if (activePlayer ==1 ) {
			removeClassYellow(n);
			}else{
				removeClassPink(n);
			}
			n = 11;
		}
	else if(n== 51)
		n = 91;
	else if(n== 60)
		n = 97;
	else if(n== 65)
		n = 85;
	else if(n== 67)
		n = 87;
	else if(n== 74){
			if (activePlayer ==1 ) {
			removeClassYellow(n);
			}else{
				removeClassPink(n);
			}
			n = 3;
		}
	else if(n== 90){
			if (activePlayer ==1 ) {
			removeClassYellow(n);
			}else{
				removeClassPink(n);
			}
			n = 50;
		}
	else if(n== 94){
			if (activePlayer ==1 ) {
			removeClassYellow(n);
			}else{
				removeClassPink(n);
			}
			n = 63;
		}
	else if(n== 99){
			if (activePlayer ==1 ) {
			removeClassYellow(n);
			}else{
				removeClassPink(n);
			}
			n = 10;
		}
		return n;

}

btnRoll.addEventListener('click', function(){
	let get =Math.trunc((Math.random() * 6)+1);

	dice.src = `dice-${get}.png`;
	console.log(get);

	if(activePlayer == 1){
		p1 += get;
		
		if(p1 > 100){
			p1 -= get;
		}else if(p1==100){
			console.log(`pl1 won`);
			dice.style.display = 'none';

			btnRoll.style.display = 'none';

			wonP1.style.display = 'block';
			wonP2.style.display = 'block';
			wonP2.innerHTML = ':(';
			gameOver.style.display = 'block';
			pl1.classList.remove('player--active');
			pl2.classList.remove('player--active');
		}
		b[p1].classList.add('yellow');
		console.log(p1);
		removeClassYellow(p1);
	}else{
		dice.src = `dice-${get}.png`;
		p2 += get;
		if(p2 > 100){
		p2 -= get;
		}else if(p2==100){
		console.log(`pl2 won`);
		dice.style.display = 'none';

		btnRoll.style.display = 'none';

		wonP2.style.display = 'block';
		wonP1.style.display = 'block';
		wonP1.innerHTML = ':(';
		gameOver.style.display = 'block';
		pl2.classList.remove('player--active');
		pl1.classList.remove('player--active');
	}
	b[p2].classList.add('pink');
	console.log(p2);
	removeClassPink(p2);
	}
	if(get != 6){
		switchPlayer();
	}
})

