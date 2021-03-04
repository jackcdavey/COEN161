(function () {
	const resources = "http://students.engr.scu.edu/~adiaztos/resources/";
	
	// Create an XMLHttpRequest object
	var xhttp1 = new XMLHttpRequest();

	// Handle succesful responses
	xhttp1.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("sample1").innerHTML = this.responseText;
		}
	};
	// Get sample1.php
	xhttp1.open("GET", resources + "sample1.php", true);
	xhttp1.send();


	// Create an XMLHttpRequest object
	var xhttp2 = new XMLHttpRequest();

	// Handle succesful responses
	xhttp2.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			document.getElementById("sample2").innerHTML = this.responseText;
		}
	};

	// Get sample2.php
	xhttp2.open("GET", "http://students.engr.scu.edu/~adiaztos/resources/sample2.php",true);
	xhttp2.send();

	// Create an XMLHttpRequest object
	var xhttp3 = new XMLHttpRequest();

	// Handle succesful responses
	xhttp3.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			const response = JSON.parse(this.responseText);
			var list = document.createElement("ul");
			for(var i = 0; i < response.friends.length; i++){
				var friend = document.createElement("li");
				friend.appendChild(document.createTextNode(response.friends[i].name));
				list.appendChild(friend);

			}
			document.getElementById("sample3").appendChild(list);
		}
	};
	
	// Get sample3.php
	xhttp3.open("GET", "http://students.engr.scu.edu/~adiaztos/resources/sample3.php",true);
	xhttp3.send();
})();