<!DOCTYPE html>
<html lang="en" ng-app="Encyclopedia" ng-controller="ColumnDataFiller">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Encyclopedia - of the Lord</title>

<!-- Bootstrap -->
<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">
<link href="css/page.css" rel="stylesheet">

<!--JqueryUI used instead of  multi screen, because of angular js-->
<link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/themes/smoothness/jquery-ui.css">



<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body>
<nav class="navbar navbar-default" >
  <div class="container-fluid">
      <p><a class="index" href="index.html">Home</a><a href="channel.html">Channel</a><a href="chart.html">Chart</a><a href="#" class="animateBlue" data-toggle="collapse" data-target="#collapsetarget">Client List</a></p>
  <div id="collapsetarget" class="collapse">
    <p class="text-center">Let's turn mydatabase into an nwjs app. with multiscreen and boostrap applied.</p>
       <p class="text-center">I'd also like to overlay a UI with a canvas(particularly chart.js) and coloring to the header(jquery.color) or navbar.</p>
              <p class="text-center">Let's go a little farther for the columns and have them screen out and color as well using multiscreen for the columns(div) in rows</p>
 </div>
    <!-- /.navbar-collapse --> 
  </div>
  <!-- /.container-fluid --> 
</nav>
<div class="container-fluid" id="screen4">
  <div class="row">
  <div class="col-md-1 col-xs-1 left-index">
      <h1 class="text-center" ng-repeat ="k in ['A','B','C','D','E','F','G','H','I','J','K','L','M']">
      <a href="javascript:void(0)">{{k}}</a>
      </h1>
    </div>
    <div class="col-md-10 col-xs-10">
      <h1 class="text-center">jquery.ui background color when hover over col - Column M for Center Column Holding encyclopedia data</h1>
       <div id="test_row" class="row">
            <div class="col-lg-4 col-md-4 col-xs-12 col-sm-12 flash_column" ng-repeat="p in posts track by $index" ng-animate="{enter: 'animate-enter'}">
                <div class="post_title"> <h3 class="text-center"><a href="#"  data-target={{'#post'+$index}} data-toggle="collapse">{{p.title}}</a></h3> </div>
                <div id={{'post'+$index}} ng-bind-html="p.body" class="collapse post_body">
				</div>
            </div>
       </div>
	   <div class="row">
            <div class="hidden-md col-lg-12 col-xs-12">
                <h3 class="text-center">Column M 1 for Center Column Holding encyclopedia data</h3>
				<div>Unfortunately, I can't bind ms data directives to angular.  At home, Emma busied herself knitting Chip a new scarf. She noticed that his old scarf was terribly tattered, mostly due to her lack of knitting expertise when she made it. This one would be better though, she thought. I’ll surprise him once he comes home. Hopefully it’ll be soon, she worried. Chip had a habit of storming off after particularly bad spats, and he never told Emma where he went. She never admitted it, but Emma secretly feared being abandoned as a wife, just as her father had left her mother. He had simply said he was going to the store and never came back. At least father said he was going, not like— No! I mustn’t think like that! Emma steeled herself. Her husband was coming back, she would apologize, and then… she would tell him the good news. She smiled to herself, attacking her knitting with renewed zeal.</div>
            </div>
            <div class="hidden-md hidden-lg col-xs-12">
                <h3 class="text-center">Column M 2 for Center Column Holding encyclopedia data</h3>
                <div>Instead of using JqueryUI, just use colors, and css the animation - Chip had made up his mind. This was his fault. He had promised to Emma that he would love her, protect her, provide for her, and now… Now it was time to rectify a few things. Maybe I’ll take more shifts at work, or even pick up overtime, but I’ll do whatever it takes to make my wife happy. Chip looked up into the murky gray, steadily darkening sky and realized that he did not know where he was. His puzzled expression saw the wrinkled faces of the trees, the dead foliage trampled by his torn boots, but no signs of civilization. The forest? Surely I didn’t walk this far. But it was undeniable; he was lost.
						Chip was suddenly cold; the bitter breeze biting at his clothes had finally gotten through. He tried to retrace his footsteps, but it was getting harder and harder to see. Soon he wouldn’t be able to make out his hand in front of his face. A distant howl made Chip shiver. He recalled suddenly that town members were discouraged from entering the woods because of the animals said to roam the area. Great, and here I am in the middle of it, Chip thought. Wait—what is that? Far off, Chip saw something flickering. Could that be salvation? Wasting no time, he ran towards the light. 
				</div>
            </div>
       </div>
       <div class="row">
           <div id="col1" class="col-md-3 col-xs-6 flash_column">
                <h3 class="text-center">Column M 3 for Center Column Holding encyc data</h3>
                <div>I really want the layouts to be consistent all across browsers.  but with angular and jquery ui being funny.  It's a little harder.  I'm building alternatives.
                I could actually use the mscontainer for the NAV - “But Chip…” Emma sighed, snaking her arms lovingly around his neck, “Why not? Can’t I have what I want just this once?” Chip groaned. For the third time this week, he and Emma were in disagreement about money. 
In the world of buy-it-now, investment portfolios, and the Home Shopping Network, Chip was the lonely child with his face plastered against the candy store’s window, eagerly gazing at treats, sentenced to behold but never to partake. He glanced around his shoddy one-bedroom apartment, wishing to be someplace else. Anywhere else, really. A vacation would be great this time of year, even just for a weekend…
</div>
           </div>
           <div id="col2" class="col-md-3 col-xs-6 flash_column">
                <h3 class="text-center">Column M 4 for : Nothing here {{'yet' + '!'}}</h3>
                <div>“Chip!” Emma said, startling Chip from his daze, “Can I have the new coat or not? Jenny has one, and look!— I’ve  already circled the cheapest one in the catalogue…” 
“Emma, if I’ve told you once I’ve told you a hundred times— ” now Chip rose, yelling to get his point across, “No! Our finances aren’t where they need to be! Stop asking me for things you know we can’t afford! Maybe if you worked—” Chip gulped, hoping Emma hadn’t heard him. Too late, he anxiously attempted to backtrack with, “What I meant to say was…” his lackluster attempt hung in the air, sour as the vows he had made to take care of his wife. As Chip stared, mouth agape, Emma slowly turned, silently retreating to the bedroom. He could only imagine the pained look on her face.
</div>
           </div>
           <div id="col3" class="col-md-3 hidden-xs flash_column">
                <h3 class="text-center">Column M 5 for Center Column Holding encyc data</h3>
                <div>As he came closer, he saw that it was a small flame. Maybe the nutcase who decided to camp here can give me directions, Chip surmised. Coming upon the fire, he felt a heat unlike anything he’d ever experienced. His entire body was warm. And from such a tiny source, Chip marveled. He spied what seemed like painting on the ground. All the leaves had been cleared away, and a circle with funny looking symbols had been freshly made. Looking closer, Chip tripped over a large black bag just on the outside of the drawing. He wondered what was inside. As he crouched to unzip it, Chip saw a glimpse of money, but immediately had the distinct feeling that he was being watched. Where was everyone? Someone certainly had to light the fire. 
He swung his head round to see two bulbous red eyes staring at him from a nearby bush.</div>
           </div>
           <div id="col4" class="col-md-3 hidden-xs">
                <h3 class="text-center">Column M 6 for : Nothing here {{'yet' + '!'}}</h3>
                <div>Suddenly, he heard a thump on the ground behind him. Chip spun around to discover his lumpy leather wallet lying on the cracked sidewalk. Instantly, Chip realized what had happened. His coat, sewn and stitched more times than he could count, had ripped again, probably due to the furious manner in which he snatched it off the rack. Now, angry at himself for his blunder, Chip grabbed his wallet, checking inside to make sure his few precious dollars were still present. Something surprisingly white caught his eye, and he realized it was his favorite photograph: a candid picture of Emma the day they were married. The blurred print rushed back memories of Emma and of himself. They were so happy then, full of hope and love and laughter. Listen to me, Chip thought. They. Have we changed so much?</div>
           </div>
       </div>
    </div>
     <div class="col-md-1 col-xs-1 right-index">
      <h1 class="text-center" ng-repeat="b in ['N','O','P','Q','R','S','T','U','V','W','X','Y','Z']"><a>{{b}}</a></h1>
    </div>
  </div>
  <hr>
</div>
<div class="container">
  <div class="row text-center">
    <div class="col-md-6 col-md-offset-3">Click outside the blue container to select this <strong>row</strong>. Columns are always contained within a row. <strong>Rows are indicated by a dashed grey line and rounded corners</strong>. </div>
  </div>
  <hr>
  <div class="row">
    <div class="text-justify col-sm-4"> Click here to select this<strong> column.</strong> Always place your content within a column. Columns are indicated by a dashed blue line. </div>
    <div class="col-sm-4 text-justify"> You can <strong>resize a column</strong> using the handle on the right. Drag it to increase or reduce the number of columns.</div>
    <div class="col-sm-4 text-justify"> You can <strong>offset a column</strong> using the handle on the left. Drag it to increase or reduce the offset. </div>
  </div>
  <hr>
  <div class="row">
    <div class="text-center col-md-12">
      <div class="well"><strong> Easily build your page using the Bootstrap components from the Insert panel.</strong></div>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-4 text-center">
      <h4>Adding <strong>Buttons</strong></h4>
      <p>Quickly add buttons to your page by using the button component in the insert panel. </p>
      <button type="button" class="btn btn-info btn-sm">Info Button</button>
      <button type="button" class="btn btn-success btn-sm">Success Button</button>
    </div>
    <div class="text-center col-sm-4">
      <h4>Adding <strong>Labels</strong></h4>
      <p>Using the insert panel, add labels to your page by using the label component.</p>
      <span class="label label-warning">Info Label</span><span class="label label-danger">Danger Label</span> </div>
    <div class="text-center col-sm-4">
      <h4>Adding <strong>Glyphicons</strong></h4>
      <p>You can also add glyphicons to your page from within the insert panel.</p>
      <div class="row">
        <div class="col-xs-4"><span class="glyphicon glyphicon-menu-hamburger" aria-hidden="true"></span></div>
        <div class="col-xs-4"><span class="glyphicon glyphicon-home" aria-hidden="true"> </span> </div>
        <div class="col-xs-4"><span class="glyphicon glyphicon-envelope" aria-hidden="true"></span></div>
      </div>
    </div>
  </div>
  <hr>
  <div class="row">
    <div id="footer" class="text-center col-md-6 col-md-offset-3">
      <h4 >Footer <!-- footer test--></h4>
      <p>Copyright &copy; 2016 &middot; All Rights Reserved &middot; <a href="{{public_url}}" >{{public_url}}</a></p>
    </div>
  </div>
  <hr>
</div>
<!-- jQuery (necessary for Bootstrap's JavaScript plugins) --> 
<!-- <script src="js/jquery-1.11.3.min.js"></script>

I WON'T BE USING MOBILE JQUERY, BECAUSE IT ONLY WORK WITH JQUERY 1.6 - ANGULAR MOBILE USED INSTEAD -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script> 
<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>



<!-- Include all compiled plugins (below), or include individual files as needed --> 
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular-animate.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular-sanitize.min.js"></script>
<script src="js/mobile-angular-ui/dist/js/mobile-angular-ui.js"></script>

<!-- Call jquery UI after angular has finished acting as a server --> 

<script type="text/javascript">	
	var app = angular.module('Encyclopedia',['ngAnimate','ngSanitize']) //ng-app directive goes here
		app.controller('ColumnDataFiller',['$scope','$http','$animate','$sce',function($scope,$http,$animate,$sce){
			//grab model data here and add $scope._ to display view.html 
			//$http.get('/someUrl', config).then(successCallback, errorCallback);
			$http.get('models/tunnels.json').then((response)=>{
				$scope.public_url = response.data.tunnels[0].public_url
				});
			$http.get('models/tumblr.json').then((response)=>{
				$scope.blog_title = response.data.blog.title
				$scope.rows = Math.ceil(response.data.posts.length/4)
				//alert(response.data.posts.length)
				//append rows
				response.data.posts.forEach((val,index,arr)=>{
					//$('#test_row').append('<div class="col-lg-4 col-md-4 col-xs-12 col-sm-12 <?php echo 'flash_column';?>"><h3>'+val.title+'</h3>'+val.body+'</div>')
					//if(counter<=4){counter++} else{ $scope.row_id++; counter = 0}
				})
				$scope.posts = response.data.posts //break up posts in alphabetical order

				//alert(response.data.blog.title)
				});
			
		}]);

 </script>
 
  <script type="text/javascript">
	$(document).ready((e)=>{
		//alert("blue")
		//setInterval(()=>{},500)
		$('.animateBlue').hover((dataI)=>{$('.navbar-default').animate({backgroundColor:'#21409A'},1000)},(dataO)=>{$('.navbar-default').animate({backgroundColor:'#f8f8f8'},1000)})
			$('#test_row').hover((event_in)=>{
				//var target = event_in.currentTarget
				var target = event_in.target
				//target = event_in.currentTarget
				//var color = //randomColor in Array
				//alert('hovered')
				$(target).animate({
					backgroundColor:"#FF9600",
					borderBottomRightRadius:20,
					borderTopLeftRadius:20
					},1000)
				},(event_out)=>{
				//var target = event_out.currentTarget
				var target = event_out.target

				$(target).animate({
					backgroundColor:"#fff",
					borderBottomRightRadius:0,
					borderTopLeftRadius:0
					},1000)
				})
		});
</script>
</body>
</html>
