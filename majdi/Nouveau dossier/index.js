function create(){
	var lis = document.createElement("li");
    lis.addClass="mylist" 
	document.getElementById("list").appendChild(lis)
}
var arr= document.getElementById("list")

function add(arr){
	var input= document.getElementByTagName("input").val();
	for(var i=0; i<arr.length; i++){
		if(input==="red" || input==="yellow" || input === "blue"){
			create()
		}else{
			return false
		}
		add(create)
	}

}