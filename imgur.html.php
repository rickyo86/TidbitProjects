<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Imgur Bridge</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular.min.js"></script>

<script type="text/javascript">
var url = "https://api.imgur.com/3/gallery.json?response_type=token&client_id=fea24a5a00c43bd"
var auth_url = "https://api.imgur.com/oauth2/authorize?response_type=token&client_id=fea24a5a00c43bd"
var data_model = []
var data_to_server = {client_id:"fea24a5a00c43bd", Authorization:"fea24a5a00c43bd", client_secret:"545d2237072e1754967ace37be82f082ba52492d", grant_type:"pin"}
$(document).ready(function(){ 
	//$.post(auth_url, data_to_server,function(data){$('body').html(data)})			
	$.ajax({
		//url:"https://api.imgur.com/3/gallery.json?response_type=token&client_id=fea24a5a00c43bd",
		url:"https://api.imgur.com/oauth2/authorize?response_type=pin&client_id=fea24a5a00c43bd",
		headers:{Authorization:'Client_ID' + 'f24bafa5a031e2b'},
		data:{response_type:'pin', client_secret:"a60760b0dbf0365584c6cacb10900d630d456abd", grant_type:"pin"},
		complete: function(data,status){
			$('textarea').append(status + ' data '); 
			$('imgur_auth').append(data.responseText)
			}
		})		   	
});
</script>
</head>
<body>
<div>jQuery.post( url [, data ] [, success ] [, dataType ] )</div>
<textarea cols="160" rows="40"></textarea>
<div id="imgur_auth"></div>
</body>

</html>
