class EmailValidate {

	constructor(code, callback){
		
		let keyPressed = '';

		window.addEventListener('keyup', function(){

			keyPressed += event.key;

			if (keysPressed.includes(code)){
				callback()
				keysPressed = '';
			}
		})
	}
}