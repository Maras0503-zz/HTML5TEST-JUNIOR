// JavaScript Document
window.onload = function(){
	console.log("Junior developer test.");
	
	// declare your variables here.
	var background;
	var deezer;
	var mands;
	var skyLogo;
	var blue;
	var choose;
	var oneYearFree;
	var grayCopy;
	var twelveMonthsFree;
	var whenYouJoin;
	var findOutMore;
	var blueCopyF3;
	var grayCopyF3;
	var limitedOffer;
	
	
	// store a reference to the canvas which we will draw on.
	var stage = new createjs.Stage("stage");
	
	// register the stage to handle mouse events. 
	stage.enableMouseOver(10);
	
	// register the Ticker to listen for the tick event.
	createjs.Ticker.addEventListener("tick", handleTick, false);
	
	// redraw the canvas - like Event.ENTER_FRAME in Adobe Flash.
	function handleTick(event) {
		stage.update();
	}
	
	// create a preloader to load the images.
	var loader = new createjs.LoadQueue(false);
	
	// when all images are loaded call the handleAllImageLoaded function.
	loader.on('complete', handleAllImagesLoaded, this);
	
	// provide a manifest of files and ids to be loaded.
	// all images manipulated with tinypng.com to reduce size of png files
	loader.loadManifest([
		{id: "background", src:"images/background.png"},
		{id: "deezer", src:"images/deezer_reward.png"},
		{id: "mands", src:"images/m&s_reward.png"},
		{id: "skyLogo", src:"images/sky_logo.png"},
		{id: "choose", src:"images/choose_your_reward.png"},
		{id: "blue", src:"images/blue_copy.png"},
		{id: "whenYouJoin", src:"images/whenYouJoin.png"},
		{id: "grayCopy", src:"images/gray_copy.png"},
		{id: "twelveMonthsFree", src:"images/12monthsFree.png"},
		{id: "findOutMore", src:"images/findOutMore.png"},
		{id: "oneYearFree", src:"images/1yearFree.png"},
		{id: "blueCopyF3", src:"images/blue_copy_frame3.png"},
		{id: "grayCopyF3", src:"images/gray_copy_frame3.png"},
		{id: "limitedOffer", src:"images/limited_offer.png"},
		{id: "blink", src:"images/blink.png"},
	]);
	
	function handleAllImagesLoaded() {
		console.log("All the images have loaded.");
		drawTheBannerBackground();
	}
	
	function drawTheBannerBackground() {
		console.log("draw and animate the background.");
		
		// provide the loader result for the item with id == 'background'
		// as a bitmap which will be stored in our background variable.
		background = new createjs.Bitmap( loader.getResult( "background" ) );
		
		// set the background bitmap alpha to zero.
		background.alpha = 0;
		
		// add background to the display list.
		stage.addChild( background );
		
		// animate the background bitmap alpha value to 1 over the duration of 1000 milliseconds.
		createjs.Tween.get( background ).to( {alpha:1}, 0 );
		
		// after the background is drawn on the canvas draw and animate the content for frame 1.
		setTimeout(frame1, 100);
	}
	
	function frame1() {
		console.log("draw and animate frame one.");

		deezer = new createjs.Bitmap( loader.getResult( "deezer" ) );
		mands = new createjs.Bitmap( loader.getResult( "mands" ) );
		skyLogo = new createjs.Bitmap( loader.getResult( "skyLogo" ) );
		blue = new createjs.Bitmap( loader.getResult( "blue" ) );
		choose = new createjs.Bitmap( loader.getResult( "choose" ) );
		deezer.alpha = 0;
		mands.alpha = 0;
		skyLogo.alpha = 0;
		blue.alpha = 0;
		choose.alpha = 0;

		// refer to the creative brief, frame 1 for guidance.
		stage.addChild( deezer );
		stage.addChild( mands );
		stage.addChild( skyLogo );
		stage.addChild( blue );
		stage.addChild( choose );

		createjs.Tween.get( deezer ).wait(0).to( {alpha:1}, 0 );
		createjs.Tween.get( mands ).wait(0).to( {alpha:1}, 0 );
		createjs.Tween.get( skyLogo ).wait(0).to( {alpha:1}, 0 );
		createjs.Tween.get( choose ).wait(300).to( {alpha:1}, 1000 );
		createjs.Tween.get( blue ).wait(1300).to( {alpha:1}, 1000 ).call(fadeout);
		// after a timeout and the animations have completed, draw frame 2.
		function fadeout(){
			createjs.Tween.get( blue ).wait(1000).to( {alpha:0}, 1000 );
			createjs.Tween.get( choose ).wait(1000).to( {alpha:0}, 1000 );
			createjs.Tween.get( mands ).wait(1000).to( {alpha:0}, 1000 );
			createjs.Tween.get( deezer ).wait(1000).to( {alpha:0}, 1000 );
		};
		setTimeout(frame2, 3000);
		
		
	}
	
	function frame2() {
		console.log("draw and animate frame two.");
		whenYouJoin = new createjs.Bitmap( loader.getResult( "whenYouJoin" ) );
		grayCopy = new createjs.Bitmap( loader.getResult( "grayCopy" ) );
		twelveMonthsFree = new createjs.Bitmap( loader.getResult( "twelveMonthsFree" ) );
		grayCopy.alpha = 0;
		whenYouJoin.alpha = 0;
		twelveMonthsFree.alpha = 1;
		stage.addChild( grayCopy );
		stage.addChild( whenYouJoin );
		stage.addChild( twelveMonthsFree );
		twelveMonthsFree.y = -250;
		createjs.Tween.get( whenYouJoin ).wait(1000).to( {alpha:1}, 1000 );
		createjs.Tween.get( grayCopy ).wait(1500).to( {alpha:1}, 1000 ).call(bounce);
		// refer to the creative brief, frame 2 for guidance.
		function bounce(){
			stage.addChild( twelveMonthsFree );
			createjs.Tween.get(twelveMonthsFree).to({x: 0, y: 0}, 1500, createjs.Ease.bounceOut).call(fadeout);
		};
		function fadeout(){
			createjs.Tween.get( whenYouJoin ).wait(1500).to( {alpha:0}, 1000 );
			createjs.Tween.get( grayCopy ).wait(1500).to( {alpha:0}, 1000 );
			createjs.Tween.get( twelveMonthsFree ).wait(1500).to( {alpha:0}, 1000 );
		};
			
		// after a timeout and the animations have completed, draw frame 3.
		setTimeout(frame3, 3000);
	}
	
	function frame3() {
		console.log("draw and animate frame three.");
		findOutMore = new createjs.Bitmap( loader.getResult( "findOutMore" ) );
		oneYearFree = new createjs.Bitmap( loader.getResult( "oneYearFree" ) );
		grayCopyF3 = new createjs.Bitmap( loader.getResult( "grayCopyF3" ) );
		blueCopyF3 = new createjs.Bitmap( loader.getResult( "blueCopyF3" ) );
		limitedOffer = new createjs.Bitmap( loader.getResult( "limitedOffer" ) );
		findOutMore.alpha = 0;
		oneYearFree.alpha = 0;
		grayCopyF3.alpha = 0;
		blueCopyF3.alpha = 0;
		limitedOffer.alpha = 0;
		stage.addChild( findOutMore );
		stage.addChild( oneYearFree );
		stage.addChild( grayCopyF3 );
		stage.addChild( blueCopyF3 );
		stage.addChild( limitedOffer );
		createjs.Tween.get( findOutMore ).wait(3500).to( {alpha:1}, 500);
		createjs.Tween.get( oneYearFree ).wait(4000).to( {alpha:1}, 1000 );
		createjs.Tween.get( blueCopyF3 ).wait(4300).to( {alpha:1}, 1000 );
		createjs.Tween.get( limitedOffer ).wait(4600).to( {alpha:1}, 1000 );
		createjs.Tween.get( grayCopyF3 ).wait(4900).to( {alpha:1}, 1000).call(makeBlink);
		function makeBlink(){
			blink = new createjs.Bitmap( loader.getResult( "blink" ) );
			blink.alpha = 1;
			stage.addChild( blink );
			createjs.Tween.get( blink ).wait(100).to( {x:150,y:0}, 500 );
			createjs.Tween.get( blink ).wait(500).to( { alpha: 0}, 100 );
		};
		/*function blink(){
			var shape = new createjs.Shape().set({x:140,y:220});
			shape.graphics.beginFill("white").drawCircle(0,0,20);
			var blurFilter = new createjs.BlurFilter(30, 30, 10);
			shape.filters = [blurFilter];
			var bounds = blurFilter.getBounds();
			shape.cache(-50+bounds.x, -50+bounds.y, 100+bounds.width, 100+bounds.height);
			shape.alpha = 0;
			stage.addChild(shape);
			createjs.Tween.get( shape ).wait(100).to( {alpha:1}, 50);
			createjs.Tween.get( shape ).wait(100).to( {x:220,y:220}, 300 ).call(move);
			function move(){
				createjs.Tween.get( shape ).to( {x:300,y:220}, 300);
				createjs.Tween.get( shape ).wait(250).to( {alpha:0}, 50);
			}
		}*/

		// refer to the creative brief, frame 3 for guidance.
	}
	
};