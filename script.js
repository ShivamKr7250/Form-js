var patten = /\s/g;
	var alert = document.getElementById('alert-caps');
	function white(data){
		var isSpace = patten.test(data);
		if (isSpace) {
			alert.innerText = "Space is not allowed";
		}else{
			alert.innerText = "";
		}
	}

	var password = document.getElementById('password');
	var flag = 1; // 1 -> no error ,, 0 -> error present
	function toggle(elem){
		var type = password.getAttribute('type');
		if(type === 'password'){
			password.setAttribute('type','text');
			elem.innerText = "Hide Password";
		}
		else{
			password.setAttribute('type','password');
			elem.innerText = "Show Password";
		}
	}

	function passCheck(data){
		var passClass = document.getElementsByClassName('password-check');
		const lowerCase = new RegExp ('(?=.*[a-z])');
		const upperCase = new RegExp ('(?=.*[A-Z])');
		const number = new RegExp ('(?=.*[0-9])');
		const specialChar = new RegExp ('(?=.*[!@#\$%\^&\*])');
		const eightChar = new RegExp ('(?=.{8,})');

		if(eightChar.test(data)){
			passClass[0].style.color = "green";
		}else{
			passClass[0].style.color = "blue";
		}
		if(lowerCase.test(data)){
			passClass[1].style.color = "green";
		}else{
			passClass[1].style.color = "blue";
		}
		if(upperCase.test(data)){
			passClass[2].style.color = "green";
		}else{
			passClass[2].style.color = "blue";
		}
		if(number.test(data)){
			passClass[3].style.color = "green";
		}else{
			passClass[3].style.color = "blue";
		}if(specialChar.test(data)){
			passClass[4].style.color = "green";
		}else{
			passClass[4].style.color = "blue";
		}
	}
function check(elem){
		if(elem.value.length > 0){
			if(elem.value != password.value){
				document.getElementById('alert').innerText = "Confirm password does not match";
				flag = 0;
			}else{
				document.getElementById('alert').innerText = "";
				flag = 1;
			}
		}else{
			document.getElementById('alert').innerText = "Please confirm password";
			flag = 0;
		}
	}
	function vaidate(){
		if (flag==1){
			return true;
		}else{
			return false;
		}
	}

	window.addEventListener('keyup', event => {
		var capslock = event.getModifierState('CapsLock');
		if (capslock){
			document.getElementById('alert').innerText = "WARNING! Capslock is on";
		}else{
			document.getElementById('alert').innerText = "";
		}
	})

	window.addEventListener('keyup', event => {
		console.log(event.getModifierState('CapsLock'));
	})
	