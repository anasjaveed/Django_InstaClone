// var attempt = 10; //Variable to count number of attempts

//Below function Executes on click of login button
function validate(){
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	if ( username == " " && password == " "){
		// attempt --;//Decrementing by one
		alert("You have left "+attempt+" attempt;");
	}
	/*else{
		alert ("Login successfully");
		window.location = "success.html"; //redirecting to other page
		return false;
		}*/
	
}