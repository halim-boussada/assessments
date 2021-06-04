$("#create").click(function(){
    var chek1 = $("#b").prop('checked')
    var chek2=$("#y").prop('checked')
    var chek3=$("#r").prop('checked')
  if(chek1&&chek2&&chek3===true){
      $("#list").append("<li class ='black'>hi</li> <li class ='black'>by</li> <li class ='black'>see you</li>")
  }
  if(chek1&&chek3===true){
    $("#list").append("<li class ='purple'>hi</li> <li class ='purple'>by</li> <li class ='purple'>see you</li>")
}
if(chek1&&chek2===true){
    $("#list").append("<li class ='green'>hi</li> <li class ='green'>by</li> <li class ='green'>see you</li>")
}
if(chek2&&chek3===true){
    $("#list").append("<li class ='orange'>hi</li> <li class ='orange'>by</li> <li class ='orange'>see you</li>")
}
else if(chek1===true){
    $("#list").append("<li class ='red'>hi</li> <li class ='yellow'>by</li> <li class ='blue'>see you</li>")
}
})
$("#delete").click(function(){
    var chek1 = $("#b").prop('checked')
    var chek2=$("#y").prop('checked')
    var chek3=$("#r").prop('checked')
    if(chek1&&chek2&&chek3===true){
        $(".black").remove()
    }
    if(chek1&&chek3===true){
      $(".purple").remove()
  }
  if(chek1&&chek2===true){
      $(".green").remove()
  }
  if(chek2&&chek3===true){
      $(".orange").remove()
  }
  if(chek1||chek2||chek3===true){
      $(".red ").remove()
      $(".blue").remove()
      $(" .red").remove()
  }
   
})