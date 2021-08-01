/*let nums = [];

for(let i=1; i<=10; i++){
	nums[i] = i;
	// console.log(nums[i]);
}
let rand = 1;
for(let i=1; i<=10; i++){
 rand =Math.trunc((Math.random() * 6)+1);
	// if(nums[i]==7) i=27;
	// if(nums[i]==9) i=56;
	// if(nums[i]==21) i=96;
	// if(nums[i]==32) i=5;
	// if(nums[i]==36) i=64;
	// if(nums[i]==41) i=92;
	// if(nums[i]==44) i=16;
	// if(nums[i]==49) i=11;
	// if(nums[i]==51) i=91;
	// if(nums[i]==60) i=97;
	// if(nums[i]==65) i=85;
	// if(nums[i]==67) i=87;
	// if(nums[i]==74) i=3;
	// if(nums[i]==90) i=50;
	// if(nums[i]==94) i=63;
	// if(nums[i]==99) i=10;
	if(nums[i]==2) i=5;
	if(nums[i]==4) i=7;
	// if(nums[i]==8) i=2;
	console.log(nums[i]);
}
*/
const span = document.getElementsByTagName('span');
const btnRoll1 = document.querySelector('#btn1');
const btnRoll2 = document.querySelector('#btn2');
const btnRoll = document.querySelector('.btn');

const pl1 = document.getElementById('pl1');
const pl2 = document.getElementById('pl2');

const dice1 = document.querySelector('.dice1');
const dice2 = document.querySelector('.dice2');

const wonP1 = document.getElementById('wonP1');
const wonP2 = document.getElementById('wonP2');

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

// player - 1
btnRoll1.addEventListener('click', function(){
	let get =Math.trunc((Math.random() * 6)+1);

	activePlayer = 0;
	dice1.src = `dice-${get}.png`;
	console.log(get);

	p1 += get;
	if(p1 == 7)
		p1 = 27;
	else if(p1== 9)
		p1 = 56;
	else if(p1== 21)
		p1 = 96;
	else if(p1== 32){
			removeClassYellow(p1);
					p1 = 5;}
	else if(p1== 36)
		p1 = 64;
	else if(p1== 41)
		p1 = 92;
	else if(p1== 44){
			removeClassYellow(p1);
			p1 = 16;}
	else if(p1== 49){
			removeClassYellow(p1);
			p1 = 11;}
	else if(p1== 51)
		p1 = 91;
	else if(p1== 60)
		p1 = 97;
	else if(p1== 65)
		p1 = 85;
	else if(p1== 67)
		p1 = 87;
	else if(p1== 74){
			removeClassYellow(p1);
			p1 = 3;}
	else if(p1== 90){
			removeClassYellow(p1);
			p1 = 50;}
	else if(p1== 94){
			removeClassYellow(p1);
			p1 = 63;}
	else if(p1== 99){
			removeClassYellow(p1);
			p1 = 10;}

	if(p1 > 100){
		p1 -= get;
	}else if(p1==100){
		console.log(`pl1 won`);
		dice1.style.display = 'none';
		dice2.style.display = 'none';

		btnRoll1.style.display = 'none';
		btnRoll2.style.display = 'none';

		wonP1.style.display = 'block';
		wonP2.style.display = 'block';
		wonP2.innerHTML = ':(';
	}
	b[p1].classList.add('yellow');
	console.log(p1);

	switchPlayer();
	removeClassYellow(p1);
})

//player - 2
btnRoll2.addEventListener('click', function(){
	let get =Math.trunc((Math.random() * 6)+1);
	activePlayer = 1;

	dice2.src = `dice-${get}.png`;
	console.log(get);

	p2 += get;
	// b[p2].classList.add('yellow');
	if(p2 == 7)
		p2 = 27;
	else if(p2== 9)
		p2 = 56;
	else if(p2== 21)
		p2 = 96;
	else if(p2== 32){
			removeClassPink(p2);
			p2 = 5;}
	else if(p2== 36)
		p2 = 64;
	else if(p2== 41)
		p2 = 92;
	else if(p2== 44){
			removeClassPink(p2);
			p2 = 16;}
	else if(p2== 49){
			removeClassPink(p2);
			p2 = 11;}
	else if(p2== 51)
		p2 = 91;
	else if(p2== 60)
		p2 = 97;
	else if(p2== 65)
		p2 = 85;
	else if(p2== 67)
		p2 = 87;
	else if(p2== 74){
			removeClassPink(p2);
			p2 = 3;}
	else if(p2== 90){
			removeClassPink(p2);
			p2 = 50;}
	else if(p2== 94){
			removeClassPink(p2);
			p2 = 63;}
	else if(p2== 99){
			removeClassPink(p2);
			p2 = 10;}


	if(p2 > 100){
		p2 -= get;
	}else if(p2==100){
		console.log(`pl2 won`);
		dice1.style.display = 'none';
		dice2.style.display = 'none';

		btnRoll1.style.display = 'none';
		btnRoll2.style.display = 'none';

		wonP2.style.display = 'block';
		wonP1.style.display = 'block';
		wonP1.innerHTML = ':(';
	}
	b[p2].classList.add('pink');
	console.log(p2);

	switchPlayer();
	removeClassPink(p2);

})

