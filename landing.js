var Promise=["https://fsd1.herokuapp.com/users/login",
 			 "​https://fsd1.herokuapp.com/users/create"];

function login(event,email,password){
	event.preventDefault();
	let loginemail=email.value;
	let loginpassword=password.value;
	var user={
		"user_eamil":loginemail;
		"user_pass":loginpassword;
	};
	var init={
		method:'POST',
		body:JSON.stringify(user),
		headers:{
			'Content-Type':'application/json'
		}

	}
let PromiseCall=fetch("https://fsd1.herokuapp.com/users/login",init);
PromiseCall.then(response=>response.json())
           .then(data=>{
           	if(data.status!=sucess){
           		document.getElementById("warningMsg").textContent=data.message;

           	}
           	else{
           		window.location.href="../test/html.html";

           	}
           })
.catch(error=>console.log(error));
}
function signUp(event){
	event.preventDefault();
	let username=document.getElementById('username').value;
	let email=document.getElementById('email').value;
	let password=document.getElementById('password').value;
	let confirmpassword=document.getElementById('confirmpass').value;
	if(password=confirmpassword){
		var user={
			user_name:'username',
			user_eamil:'email',
			user_pass:'password'
		};
		var init={
			method:'POST',
			body:JSON.stringify(user),
			headers:{
				'Content-Type':'application/json'
			}
		}
let PromiseCall=fetch("https://fsd1.herokuapp.com/users/create",init);
PromiseCall.then(response=>response.json())
           .then(data=>{
           	if(data.status!=sucess){
           		document.getElementById("warningMsg").textContent=data.message;
           	}
           	else{
           		document.getElementById(warningMsg).textContent=data.message;

           	}
           })
.catch(error=>console.log(error));
}

