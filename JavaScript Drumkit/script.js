
function playSound(e) {
	const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
	const key = document.querySelector(`div[data-key = "${e.keyCode}"]`);
	
	// prekida funkciju ako nema audio snimka
	if (!audio) return;
	
	key.classList.add('playing');
	audio.currentTime = 0;
	audio.play();
	
	const keys = Array.from(document.querySelectorAll('.key'));
	keys.forEach(key => key.addEventListener('transitionend', removeTransition));
}

function removeTransition(e) {
	if (e.propertyName !== 'transform') return;
	e.target.classList.remove('playing');
}


window.addEventListener('keydown', playSound);






//window.addEventListener('keydown', function (e) {
//	
//	// smesta u promenljivu odgovarajuci audio element ako je pritisnuto odgovarajuce dugme koje ima isti 'data-key' atribut
//	const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
//	
//	// smesta u promenljivu odgovarajuce dugme sa klasom .key i atributom 'data-key'
//	const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
//	
//	// prekida funkciju ako nema audio snimka za dugme
//	if (!audio) return;
//	
//	// ako brzo pritiskamo dugmice, nece se ponoviti zvuk jer jos uvek traje pustanje, zato koristimo currentTime = 0 da bi nam omogucio ponovno momentalno pustanje zvuka
//	audio.currentTime = 0;
//	
//	// pokrece pustanje zvuka
//	audio.play();
//	
//	key.classList.add('playing');
//	
//	function removeTransition (e) {
//	
//		//ako dato dugme nema property 'transform' , zavrsi funkciju
//		if (e.propertyName !== 'transform') return;
//		
//		// sklanja klasu 'playing'
//		this.classList.remove('playing');
//	};
//
//	const keys = document.querySelectorAll('.key');
//	keys.forEach(key => key.addEventListener('transitionend', removeTransition));
//	
//});
