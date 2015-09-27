$(document).ready(function() {
        
    $('#openBtn').click(function(){
  
    	$('.modal-body').load('test2.html',function(result){
    	  $('#myModal').modal({show:true});
  		});
  
  
	});
        
});