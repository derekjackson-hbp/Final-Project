$(document).ready(function(){
  
  $('#textSubmit').on('click', function(){
    var text = $("#textFile").val();
        alert(text);
        localStorage.setItem('file',text);
    
  });
console.log(localStorage.getItem('file'));
})