var ul =$("<ul></ul>")
$("#dive").append(ul)

var input1=$('<input type="checkbox" id="r"></input>');
var input2=$('<input type="checkbox" id="y"></input>');
var input3=$('<input type="checkbox" id="b"></input>');
$("ul").append(input1,input2,input3);

var button1=$('<button id="create"></button>').text("create");
var button2=$('<button id ="remove"></button>').text("remove");
$("#dive").append(button1,button2);

$("#create").click(function(){


	if($("#r").prop("checked") && $("#y").prop("checked") && $("#b").prop("checked")){
	 $("ul").append('<li class="black">black</li>');
	};

	if($("#r").prop("checked") && $("#y").prop("checked") && !($("#b").prop("checked"))){
      $("ul").append('<li class="orange">orange</li>');
	};

	if($("#y").prop("checked") && $("#b").prop("checked") && !($("#r").prop("checked"))){
		$("ul").append('<li class="green">green</li>');
	}
	if($("#r").prop("checked") && $("#b").prop("checked") && !($("#y").prop("checked"))){
		$("ul").append('<li class="purple">purple</li>');
	}

	if($("#r").prop("checked") && !($("#y").prop("checked")) && !($("#b").prop("checked"))){
	 $("ul").append('<li class="red">red</li>');
	};

	if($("#y").prop("checked") && !($("#r").prop("checked")) && !($("#b").prop("checked"))){
	 $("ul").append('<li class="yellow">yellow</li>');
	};

	if($("#b").prop("checked") && !($("#r").prop("checked")) && !($("#y").prop("checked"))){
	 $("ul").append('<li class="blue">blue</li>');
	};
		
});

$("#remove").click(function(){
if($("#r").prop("checked") && $("#y").prop("checked") && !($("#b").prop("checked"))){
      $("ul").delette('<li class="orange">orange</li>');
	};
})


