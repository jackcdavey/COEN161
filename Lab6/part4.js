(function () {
	var resources = "http://students.engr.scu.edu/~adiaztos/resources/";

	// Load sample1.php
	$("#sample1").load(resources + "sample1.php");

	// Load sample2.php
	$("#sample2").load(resources + "sample2.php");

	// Get sample3.php
	$.get(resources + "sample3.php", function(data) {
		var dat = JSON.parse(data);
		const list = $("<ul></ul>");
		$("#sample3").append(list);

		for (var i = 0; i < dat.friends.length; i++) {
			list.append("<li>" + dat.friends[i].name + "</li>");
		}
	});
})();