window.addEventListener('scroll', e => {
    document.body.style.cssText += `--scrollTop: ${this.scrollY}px`
})
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
	wrapper: '.wrapper',
	content: '.content'
})

const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

 form.addEventListener('submit', e => {
	validateInputs(e);
 });

const setError = (element, message) => {
	const inputControl = element.parentElement;
	const errorDisplay = inputControl.querySelector('.error');

	errorDisplay.innerText = message;
	inputControl.classList.add('error');
	inputControl.classList.remove('success');
}

const setSuccess = element => {
	const inputControl = element.parentElement;
	const errorDisplay = inputControl.querySelector('.error');

	errorDisplay.innerText = '';
	inputControl.classList.add('success');
	inputControl.classList.remove('error');
};
const validateInputs = (e) => {
	const usernameValue = username.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();

	if(usernameValue === '') {
		setError(username, 'Username is required.');
		e.preventDefault();
	} else {
		setSuccess(username);
	}
	if(passwordValue === '') {
		setError(password, 'Password is required.');
		e.preventDefault();
	} else if (passwordValue.length < 8) {
		setError(password, 'Password must be at least 8 character.');
		e.preventDefault();
	} else{
		setSuccess(password);
	}
	if(password2Value === '') {
		setError(password2, 'Please confirm your password.');
		e.preventDefault();
	} else if (password2Value != passwordValue) {
		setError(password2, "Passwords doesn't match.");
		e.preventDefault();
	} else{
		setSuccess(password2);
	}
	
};
function del (){
	div.remove();
}

let div=document.createElement('div');
let button=document.createElement('button');
div.classList.toggle ("deldiv");
button.classList.toggle ("button");
div.id='ddi';
div.append(button);
document.getElementById("form").after(div);
div=document.getElementById('ddi');
div.addEventListener("click",del);

