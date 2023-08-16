"use strict";
const mailForm = document.getElementById("email-form");
const mailInput = document.getElementById("email-input");
const mailSubmit = document.getElementById("email-submit");
let mailError = document.getElementById("email-error");

mailSubmit.addEventListener("click", (event) => {
	if (!mailInput.validity.valid) {
		if (mailInput.value == "") {
			mailError.innerText = "Oops! Please add your email";
		} else {
			mailError.innerText = "Oops! Please check your email";
		}
		event.preventDefault();
	}
});
mailInput.addEventListener("blur", (event) => {
	if (mailInput.value == "") {
		mailError.innerText = "";
	}
});
