
const login = (() => {
	
	$(document).ready(() => {
		$("#send").click(send);
	});
	
	function send () {
		const user = $("#user").val();
		const password = $("#pass").val();
		console.log (user);
		console.log (password);
		
		const data = {
			user: user,
			pass: password
		};
		
		let xhttp = new XMLHttpRequest();
		xhttp.open("POST", "chatbot/message");
		xhttp.responseType = "text";
		xhttp.setRequestHeader("Content-type", "application/json");
    
		xhttp.onload = (() => {});
	
		xhttp.send(data);
	}
	
})();