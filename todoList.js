// Check Off Speciifc Todos by Clicking
$('ul').on('click', 'li', function() {
	$(this).toggleClass("completed");
});

//Click on X to delete Todo
$("ul").on('click', 'span', function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	})
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
	if(event.which === 13) {
		//grabbing new todo text from input
		let todoText = $(this).val()
		//clear the input
		$(this).val("")
		//create a new li with the text and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}
});

$('.fa-plus').click(function() {
	$("input[type='text']").fadeToggle();
})
