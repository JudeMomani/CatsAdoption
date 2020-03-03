for (let i = 0; i <= 10; i++) {
  var request = new XMLHttpRequest()
  request.open('GET', 'https://api.thecatapi.com/v1/images/search?api_key=266bb844-4092-4559-b0c0-b7a97d3b76e0', true)
  request.onload = function(e) {
    // Begin accessing JSON data here
    // document.getElementById("test").innerHTML = e.content;
    var res = JSON.parse(e.srcElement.response)[0];
    id = res["id"];
    img = res["url"];
    if(i==0){
      document.getElementById("gallery").innerHTML += "<div class=\"carousel-item active\"><img src="+ img +" class=\"d-block w-100\" ><div class=\"carousel-caption d-none d-md-block\"><h5>this cat's id : <span>"+id+"</span></h5></div></div>";
    }else{
      document.getElementById("gallery").innerHTML += "<div class=\"carousel-item\"><img src="+ img +" class=\"d-block w-100\" ><div class=\"carousel-caption d-none d-md-block\"><h5>this cat's id : <span>"+id+"</span></h5></div></div>";
    }
  }
  request.send()
}


$(document).ready(function(){
    $('.toggle-menu').click(function(){
    $('nav').toggleClass('active');
    })
    $('ul li').click(function(){
    $(this).siblings().removeClass('active');
    $(this).toggleClass('active');
    })

})


console.log(document.getElementById("gallery").innerHTML)
