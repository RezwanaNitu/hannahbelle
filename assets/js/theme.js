/*
	Project Name 			:	Your project name;
	Project Description 	:	Your project descriptions;
	Author Name 			:	Rezwana Nitu;
	Author Email 			:	rezwananitu88@gmail.com;
	Author URL				:	https://github.com/RezwanaNitu	
	__________________________________________________________________________________________________
*/

$(function(){

	// Preventing Default Behaviour For Hashed Link
	$('a[href="#"]').click(function(event){ event.preventDefault(); }); 

	// Initialize Bootstrap Tooltip;
	function init_tooltip()
	{ 
		$('[data-toggle="tooltip"], [data-plugin="tooltip"]').tooltip({'container' : 'body', 'html' : true});
	}
	// //////////////////////////////////////////////////////////////////////////////////////////////////////

	init_tooltip();

	// Parallax Setup
	$('.parallax-window').parallax({positionY: "20px"});

});