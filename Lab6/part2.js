(function () {
	const template = document.getElementById("template");

	// remove template from the page, since it is only a template
	const parent = template.parentNode;
	parent.removeChild(template);

	// Create an XMLHttpRequest object
	var xhttp = new XMLHttpRequest();

	// Set onreadystatechange
	xhttp.onreadystatechange = function(){
		if (this.readyState == 4 && this.status == 200)
			populateContacts(JSON.parse(this.responseText));
	}

	// Open and send requests
	xhttp.open("GET", "http://students.engr.scu.edu/~adiaztos/resources/contacts.php", true);
	xhttp.send();

	// This function takes the list of contacts and clones a new element from the template with the value of each contact
	function populateContacts(contacts) {
		for(var i = 0; i < contacts.length; i++){
			var node = template.cloneNode(true);
			node.id = contacts[i].id;
			var str = node.innerHTML.replace("1", i+1);
			node.innerHTML = str;
			var str2 = node.innerHTML.replace(/index/g, i + node.id);
			node.innerHTML = str2;
			var str3 = node.innerHTML.replace('name="name"', 'value="' + contacts[i].name + '" name="name"');
			node.innerHTML = str3;
			var str4 = node.innerHTML.replace('name="email"', 'value="' + contacts[i].email + '" name="email"');
			node.innerHTML = str4;
			
			document.getElementsByClassName("card-body")[0].append(node);
		}
	}

	// submits a request with the search query for the filtered list of contacts
	function search() {
		// clear the current contacts list
		while (parent.lastChild)
			parent.removeChild(parent.lastChild);
		xhttp.open("POST", "http://students.engr.scu.edu/~adiaztos/resources/contacts.php?query=" + document.getElementById("searchField").value, true);
		xhttp.send();	
	}

	// assign the search function as the click handler for search button
	document.getElementById("searchBtn").onclick = function(){search();};

})();