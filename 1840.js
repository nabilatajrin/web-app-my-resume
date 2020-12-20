	//Start JavaScript Function
	function verify() {
		//for field must take some input
		//document.forms[0]
		//document.forms["form1"]
		var myInput = document.getElementById("psw");
		var letter = document.getElementById("letter");
		var capital = document.getElementById("capital");
		var number = document.getElementById("number");
		var length = document.getElementById("length");
		var character = /[$@$!%*?&]/g;
		var lowerCaseLetters = /[a-z]/g;
		var upperCaseLetters = /[A-Z]/g;
		var numbers = /[0-9]/g;
		var zipCode = /[^\d{5}(-\d{4})?(?!-)$]/g;
		var password = document.form1.passid.value;

		//for field must take some input
		if (document.form1.passid.value == "") {
			document.form1.passid.focus();
			alert("Please enter a Password");
			return false;
		}
		
		// Validate length
		if (document.form1.passid.value.length < 8) {
			alert("Please give a password at least 8 characters");
			document.form1.passid.focus();
			return false;
		}
		
		// Validate lowercase letters
		if(!(document.form1.passid.value.match(lowerCaseLetters))) {  
			alert("Password must have atleast one small letter");
			document.form1.passid.focus();	
			return false;
		}
		
		// Validate capital letters
		if(!(document.form1.passid.value.match(upperCaseLetters))) {  
			alert("Password must have atleast one capital letter");
			document.form1.passid.focus();
			return false;
		}
		
		// Validate numbers
		if(!(document.form1.passid.value.match(numbers))) {  
			alert("Password must have atleast one number");
			document.form1.passid.focus();
			return false;
		}
		
		// Validate special character
		if(!(document.form1.passid.value.match(character))) {  
			alert("Password must have atleast one special character");
			document.form1.passid.focus();
			return false;
		}

		// for field must take some input
		if (document.form1.username.value == "") {
			alert("Please give your name");
			document.form1.username.focus();
			return false;
		}
		
		// for field must take some input
		if (document.form1.address.value == "") {
			alert("Please give address");
			document.form1.address.focus();
			return false;
		}
		
		//Country must be selected
		if (document.form1.country.value == "") {
			alert("Please select a country");
			document.form1.country.focus();
			return false;
		}
		
		//zip code must be selected
		if (document.form1.zip.value == "") {
			alert("Please give zip code");
			document.form1.zip.focus();
			return false;
		}
		
		// Validate length
		if (document.form1.zip.value.length < 5) {
			alert("Zip code must be 5 character in length");
			document.form1.zip.focus();
			return false;
		}
		
		// Validate numbers
		//for field must take some input
		if (document.form1.email.value == "") {
			document.form1.email.focus();
			alert("Please give the email");
			return false;
		}
		
		// Gender must be selected
		if (document.form1.sex[0].checked == false &&
			document.form1.sex[1].checked == false) {
			alert("Please select sex");
			return false;
		}
		
		// At least one checkbox from language must be checked
		if (document.form1.en.checked == false &&
			document.form1.nonen.checked == false){
			alert("Please Select your choice of language(Atleast One)");
			return false;
		}
		
		// for field must take some input
		if (document.form1.desc.value == "") {
			alert("Please give description");
			document.form1.desc.focus();
			return false;
		}
		return true;
	}
