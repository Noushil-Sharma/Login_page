const form = document.querySelector('form');
const message = document.querySelector('.message');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	
	// Check login credentials
	const username = form.username.value;
	const password = form.password.value;

	// Example login validation
	if (username === 'myusername' && password === 'mypassword') {
		alert('Login successful!');
	} else {
		message.innerHTML = 'Incorrect username or password';
	}
});
