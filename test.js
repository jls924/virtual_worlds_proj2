var gameport = document.getElementById("gameport");
var renderer = PIXI.autoDetectRenderer(800, 600); 
gameport.appendChild(renderer.view);

var stage = new PIXI.Container();

PIXI.loader.add("hyperspace.mp3").load(playSound);

var hyperSound;
function playSound() {
	hyperSound = PIXI.audioManager.getAudio("hyperspace.mp3");
	hyperSound.loop = true;
	hyperSound.volume = .2;
}
	

// collision var
var collisionTest;
var hit = 24;



// textures
var background = PIXI.Texture.fromImage("andromeda.png");
var firstPlanet = PIXI.Texture.fromImage("planetPurp.png");
var start = PIXI.Texture.fromImage("JETsetREMASTERED1.png");
var instruct = PIXI.Texture.fromImage("StartScreen.png");
var firstJet = PIXI.Texture.fromImage("jet1.png");
var secondJet = PIXI.Texture.fromImage("jet2.png");
var mazeTexture = PIXI.Texture.fromImage("smallwall.png");
var hyperspace = PIXI.Texture.fromImage("hyperspace.png");



var endGameScreen = PIXI.Texture.fromImage("endGame.png");


// background
var space = new PIXI.Sprite(background);
space.position.x = 0;
space.position.y = 0;

// start screen
var startScreen = new PIXI.Sprite(start);
startScreen.position.x = 0;
startScreen.position.y = 0;

// instruction screen
var instructions = new PIXI.Sprite(instruct);
instructions.position.x = 0;
instructions.position.y = 0;
instructions.alpha = 0;

// jet
var jet = new PIXI.Sprite(firstJet);
jet.position.x = 60;
jet.position.y = 560;

// collision stuff
var jet2 = new PIXI.Sprite(secondJet);
jet2.position.x = 200;
jet2.position.y = 300;

var jet3 = new PIXI.Sprite(secondJet);
jet3.position.x = 200;
jet3.position.y = 500;


// purple planet 1
var planetPurp = new PIXI.Sprite(firstPlanet);
planetPurp.anchor.set(0.5);
planetPurp.position.x = 500;
planetPurp.position.y = 100;

// purple planet 2
var planetPurp2 = new PIXI.Sprite(firstPlanet);
planetPurp2.anchor.set(0.5);
planetPurp2.position.x = 400;
planetPurp2.position.y = 100;

// purple planet 3
var planetPurp3 = new PIXI.Sprite(firstPlanet);
planetPurp3.anchor.set(0.5);
planetPurp3.position.x = 300;
planetPurp3.position.y = 100;


// end game
//var endGame = new PIXI.Sprite(hyperspace);
//endGame.position.x = 765;
//endGame.position.y = 40;
// end game


// end game text
var endGameScreen = new PIXI.Sprite(endGameScreen);
endGameScreen.position.x = 0;
endGameScreen.position.y = 0;
endGameScreen.alpha = 0;


// add to stage
stage.addChild(space);



// maze making

// vert
var mazePart1 = new PIXI.Sprite(mazeTexture);
mazePart1.position.x = 32;
mazePart1.position.y = 568;

var mazePart2 = new PIXI.Sprite(mazeTexture);
mazePart2.position.x = 32;
mazePart2.position.y = 536;

var mazePart3 = new PIXI.Sprite(mazeTexture);
mazePart3.position.x = 32;
mazePart3.position.y = 504;

var mazePart4 = new PIXI.Sprite(mazeTexture);
mazePart4.position.x = 32;
mazePart4.position.y = 472;

var mazePart5 = new PIXI.Sprite(mazeTexture);
mazePart5.position.x = 32;
mazePart5.position.y = 440;

var mazePart6 = new PIXI.Sprite(mazeTexture);
mazePart6.position.x = 32;
mazePart6.position.y = 408;

var mazePart7 = new PIXI.Sprite(mazeTexture);
mazePart7.position.x = 32;
mazePart7.position.y = 376;

var mazePart8 = new PIXI.Sprite(mazeTexture);
mazePart8.position.x = 32;
mazePart8.position.y = 344;




// horizontal 1
var mazePart9 = new PIXI.Sprite(mazeTexture);
mazePart9.position.x = 64;
mazePart9.position.y = 344;

var mazePart10 = new PIXI.Sprite(mazeTexture);
mazePart10.position.x = 96;
mazePart10.position.y = 344;

var mazePart11 = new PIXI.Sprite(mazeTexture);
mazePart11.position.x = 128;
mazePart11.position.y = 344;

// vert 2
var mazePart12 = new PIXI.Sprite(mazeTexture);
mazePart12.position.x = 128;
mazePart12.position.y = 376;

var mazePart13 = new PIXI.Sprite(mazeTexture);
mazePart13.position.x = 128;
mazePart13.position.y = 408;

// top horizontal 2
var mazePart14 = new PIXI.Sprite(mazeTexture);
mazePart14.position.x = 160;
mazePart14.position.y = 408;



// vert right
var mazePart15 = new PIXI.Sprite(mazeTexture);
mazePart15.position.x = 96;
mazePart15.position.y = 568;

var mazePart16 = new PIXI.Sprite(mazeTexture);
mazePart16.position.x = 96;
mazePart16.position.y = 536;


var mazePart17 = new PIXI.Sprite(mazeTexture);
mazePart17.position.x = 96;
mazePart17.position.y = 504;

var mazePart18 = new PIXI.Sprite(mazeTexture);
mazePart18.position.x = 96;
mazePart18.position.y = 472;

var mazePart20 = new PIXI.Sprite(mazeTexture);
mazePart20.position.x = 192;
mazePart20.position.y = 408;

var mazePart21= new PIXI.Sprite(mazeTexture);
mazePart21.position.x = 224;
mazePart21.position.y = 408;

//var mazePart22= new PIXI.Sprite(mazeTexture);
//mazePart22.position.x = 256;
//mazePart22.position.y = 408;


var mazePart29 = new PIXI.Sprite(mazeTexture);
mazePart29.position.x = 320;
mazePart29.position.y = 440;

var mazePart30 = new PIXI.Sprite(mazeTexture);
mazePart30.position.x = 320;
mazePart30.position.y = 408;

var mazePart31 = new PIXI.Sprite(mazeTexture);
mazePart31.position.x = 320;
mazePart31.position.y = 376;

var mazePart32 = new PIXI.Sprite(mazeTexture);
mazePart32.position.x = 320;
mazePart32.position.y = 344;


var mazePart33 = new PIXI.Sprite(mazeTexture);
mazePart33.position.x = 320;
mazePart33.position.y = 312;

var mazePart34 = new PIXI.Sprite(mazeTexture);
mazePart34.position.x = 320;
mazePart34.position.y = 280;

var mazePart35 = new PIXI.Sprite(mazeTexture);
mazePart35.position.x = 320;
mazePart35.position.y = 248;

var mazePart36 = new PIXI.Sprite(mazeTexture);
mazePart36.position.x = 320;
mazePart36.position.y = 216;

// vert2
var mazePart37 = new PIXI.Sprite(mazeTexture);
mazePart37.position.x = 224;
mazePart37.position.y = 376;

var mazePart38 = new PIXI.Sprite(mazeTexture);
mazePart38.position.x = 224;
mazePart38.position.y = 344;

var mazePart39 = new PIXI.Sprite(mazeTexture);
mazePart39.position.x = 224;
mazePart39.position.y = 312;

var mazePart40 = new PIXI.Sprite(mazeTexture);
mazePart40.position.x = 224;
mazePart40.position.y = 280;

var mazePart41 = new PIXI.Sprite(mazeTexture);
mazePart41.position.x = 224;
mazePart41.position.y = 248;

var mazePart42 = new PIXI.Sprite(mazeTexture);
mazePart42.position.x = 224;
mazePart42.position.y = 216;

var mazePart43 = new PIXI.Sprite(mazeTexture);
mazePart43.position.x = 224;
mazePart43.position.y = 184;

var mazePart44 = new PIXI.Sprite(mazeTexture);
mazePart44.position.x = 224;
mazePart44.position.y = 152;








// top horizontal 3

var mazePart22= new PIXI.Sprite(mazeTexture);
mazePart22.position.x = 256;
mazePart22.position.y = 152;

var mazePart45 = new PIXI.Sprite(mazeTexture);
mazePart45.position.x = 288;
mazePart45.position.y = 152;

var mazePart46 = new PIXI.Sprite(mazeTexture);
mazePart46.position.x = 320;
mazePart46.position.y = 152;

var mazePart47 = new PIXI.Sprite(mazeTexture);
mazePart47.position.x = 352;
mazePart47.position.y = 152;

var mazePart48 = new PIXI.Sprite(mazeTexture);
mazePart48.position.x = 384;
mazePart48.position.y = 152;

var mazePart49 = new PIXI.Sprite(mazeTexture);
mazePart49.position.x = 416;
mazePart49.position.y = 152;

var mazePart50 = new PIXI.Sprite(mazeTexture);
mazePart50.position.x = 448;
mazePart50.position.y = 152;

var mazePart51 = new PIXI.Sprite(mazeTexture);
mazePart51.position.x = 480;
mazePart51.position.y = 152;

var mazePart52 = new PIXI.Sprite(mazeTexture);
mazePart52.position.x = 512;
mazePart52.position.y = 152;



// horizontal bottom going right
var mazePart19 = new PIXI.Sprite(mazeTexture);
mazePart19.position.x = 128;
mazePart19.position.y = 472;

var mazePart23 = new PIXI.Sprite(mazeTexture);
mazePart23.position.x = 160;
mazePart23.position.y = 472;

var mazePart24 = new PIXI.Sprite(mazeTexture);
mazePart24.position.x = 192;
mazePart24.position.y = 472;

var mazePart25 = new PIXI.Sprite(mazeTexture);
mazePart25.position.x = 224;
mazePart25.position.y = 472;

var mazePart26 = new PIXI.Sprite(mazeTexture);
mazePart26.position.x = 256;
mazePart26.position.y = 472;

var mazePart27 = new PIXI.Sprite(mazeTexture);
mazePart27.position.x = 288;
mazePart27.position.y = 472;

var mazePart28 = new PIXI.Sprite(mazeTexture);
mazePart28.position.x = 320;
mazePart28.position.y = 472;



// horizontal 3 bottom

var mazePart53 = new PIXI.Sprite(mazeTexture);
mazePart53.position.x = 352;
mazePart53.position.y = 216;

var mazePart54 = new PIXI.Sprite(mazeTexture);
mazePart54.position.x = 384;
mazePart54.position.y = 216;

var mazePart55 = new PIXI.Sprite(mazeTexture);
mazePart55.position.x = 416;
mazePart55.position.y = 216;

var mazePart56 = new PIXI.Sprite(mazeTexture);
mazePart56.position.x = 448;
mazePart56.position.y = 216;

var mazePart57 = new PIXI.Sprite(mazeTexture);
mazePart57.position.x = 480;
mazePart57.position.y = 216;

var mazePart58 = new PIXI.Sprite(mazeTexture);
mazePart58.position.x = 512;
mazePart58.position.y = 216;

var mazePart59 = new PIXI.Sprite(mazeTexture);
mazePart59.position.x = 544;
mazePart59.position.y = 216;

var mazePart60 = new PIXI.Sprite(mazeTexture);
mazePart60.position.x = 576;
mazePart60.position.y = 216;


// vert 3

var mazePart61 = new PIXI.Sprite(mazeTexture);
mazePart61.position.x = 512;
mazePart61.position.y = 120;

var mazePart62 = new PIXI.Sprite(mazeTexture);
mazePart62.position.x = 512;
mazePart62.position.y = 88;

var mazePart63 = new PIXI.Sprite(mazeTexture);
mazePart63.position.x = 512;
mazePart63.position.y = 56;

var mazePart64 = new PIXI.Sprite(mazeTexture);
mazePart64.position.x = 512;
mazePart64.position.y = 24;


var mazePart65 = new PIXI.Sprite(mazeTexture);
mazePart65.position.x = 512;
mazePart65.position.y = 0;


// vert 3 right

var mazePart66 = new PIXI.Sprite(mazeTexture);
mazePart66.position.x = 576;
mazePart66.position.y = 184;

var mazePart67 = new PIXI.Sprite(mazeTexture);
mazePart67.position.x = 576;
mazePart67.position.y = 152;

var mazePart68 = new PIXI.Sprite(mazeTexture);
mazePart68.position.x = 576;
mazePart68.position.y = 120;

var mazePart69 = new PIXI.Sprite(mazeTexture);
mazePart69.position.x = 576;
mazePart69.position.y = 88;



// horizontal 4 top

var mazePart70 = new PIXI.Sprite(mazeTexture);
mazePart70.position.x = 544;
mazePart70.position.y = 0;

var mazePart71 = new PIXI.Sprite(mazeTexture);
mazePart71.position.x = 576;
mazePart71.position.y = 0;

var mazePart72 = new PIXI.Sprite(mazeTexture);
mazePart72.position.x = 608;
mazePart72.position.y = 0;

var mazePart73 = new PIXI.Sprite(mazeTexture);
mazePart73.position.x = 640;
mazePart73.position.y = 0;

var mazePart74 = new PIXI.Sprite(mazeTexture);
mazePart74.position.x = 672;
mazePart74.position.y = 0;

var mazePart75 = new PIXI.Sprite(mazeTexture);
mazePart75.position.x = 704;
mazePart75.position.y = 0;

var mazePart76 = new PIXI.Sprite(mazeTexture);
mazePart76.position.x = 736;
mazePart76.position.y = 0;

var mazePart77 = new PIXI.Sprite(mazeTexture);
mazePart77.position.x = 768;
mazePart77.position.y = 0;



// horizontal 4 bot

var mazePart78 = new PIXI.Sprite(mazeTexture);
mazePart78.position.x = 608;
mazePart78.position.y = 88;

var mazePart79 = new PIXI.Sprite(mazeTexture);
mazePart79.position.x = 640;
mazePart79.position.y = 88;

var mazePart80 = new PIXI.Sprite(mazeTexture);
mazePart80.position.x = 672;
mazePart80.position.y = 88;

var mazePart81 = new PIXI.Sprite(mazeTexture);
mazePart81.position.x = 704;
mazePart81.position.y = 88;

var mazePart82 = new PIXI.Sprite(mazeTexture);
mazePart82.position.x = 736;
mazePart82.position.y = 88;

var mazePart83 = new PIXI.Sprite(mazeTexture);
mazePart83.position.x = 768;
mazePart83.position.y = 88;




var endHyperspace = new PIXI.Sprite(hyperspace);
endHyperspace .position.x = 765;
endHyperspace .position.y = 40;




// end maze making

// add jets, planets, and hyperspace

stage.addChild(jet);
stage.addChild(jet2);
stage.addChild(jet3);
stage.addChild(planetPurp);
stage.addChild(planetPurp2);
stage.addChild(planetPurp3);
stage.addChild(endHyperspace);







// add maze pieces
stage.addChild(mazePart1);
stage.addChild(mazePart2);
stage.addChild(mazePart3);
stage.addChild(mazePart4);
stage.addChild(mazePart5);
stage.addChild(mazePart6);
stage.addChild(mazePart7);
stage.addChild(mazePart8);
stage.addChild(mazePart9);
stage.addChild(mazePart10);
stage.addChild(mazePart11);
stage.addChild(mazePart12);
stage.addChild(mazePart13);
stage.addChild(mazePart14);
stage.addChild(mazePart15);
stage.addChild(mazePart16);
stage.addChild(mazePart17);
stage.addChild(mazePart18);
stage.addChild(mazePart19);
stage.addChild(mazePart20);
stage.addChild(mazePart21);
stage.addChild(mazePart22);
stage.addChild(mazePart23);
stage.addChild(mazePart24);
stage.addChild(mazePart25);
stage.addChild(mazePart26);
stage.addChild(mazePart27);
stage.addChild(mazePart28);
stage.addChild(mazePart29);
stage.addChild(mazePart30);
stage.addChild(mazePart31);
stage.addChild(mazePart32);
stage.addChild(mazePart33);
stage.addChild(mazePart34);
stage.addChild(mazePart35);
stage.addChild(mazePart36);
stage.addChild(mazePart37);
stage.addChild(mazePart38);
stage.addChild(mazePart39);
stage.addChild(mazePart40);
stage.addChild(mazePart41);
stage.addChild(mazePart42);
stage.addChild(mazePart43);
stage.addChild(mazePart44);
stage.addChild(mazePart45);
stage.addChild(mazePart46);
stage.addChild(mazePart47);
stage.addChild(mazePart48);
stage.addChild(mazePart49);
stage.addChild(mazePart50);
stage.addChild(mazePart51);
stage.addChild(mazePart52);
stage.addChild(mazePart53);
stage.addChild(mazePart54);
stage.addChild(mazePart55);
stage.addChild(mazePart56);
stage.addChild(mazePart57);
stage.addChild(mazePart58);
stage.addChild(mazePart59);
stage.addChild(mazePart60);
stage.addChild(mazePart61);
stage.addChild(mazePart62);
stage.addChild(mazePart63);
stage.addChild(mazePart64);
stage.addChild(mazePart65);
stage.addChild(mazePart66);
stage.addChild(mazePart67);
stage.addChild(mazePart68);
stage.addChild(mazePart69);
stage.addChild(mazePart70);
stage.addChild(mazePart71);
stage.addChild(mazePart72);
stage.addChild(mazePart73);
stage.addChild(mazePart74);
stage.addChild(mazePart75);
stage.addChild(mazePart76);
stage.addChild(mazePart77);
stage.addChild(mazePart78);
stage.addChild(mazePart79);
stage.addChild(mazePart80);
stage.addChild(mazePart81);
stage.addChild(mazePart82);
stage.addChild(mazePart83);






//end maze pieces

// start / end screens
stage.addChild(startScreen);
stage.addChild(instructions);
stage.addChild(endGameScreen);

// array of objects that can kill

var collObjects = [mazePart1,mazePart2,mazePart3,mazePart4,mazePart5,mazePart6,mazePart7,mazePart8,mazePart9,mazePart10,mazePart11,mazePart12,mazePart13,mazePart14,mazePart15,mazePart16,mazePart17,mazePart18,mazePart19,mazePart20,mazePart21,mazePart22,mazePart23,mazePart24,mazePart25,mazePart26,mazePart27,mazePart28,mazePart29,mazePart30,mazePart31,mazePart32,mazePart34,mazePart35,mazePart36,mazePart37,mazePart38,mazePart39,mazePart40,mazePart41,mazePart42,mazePart43,mazePart44,mazePart45,mazePart46,mazePart47,mazePart48,mazePart49,mazePart50,mazePart51,mazePart52,mazePart53,mazePart54,mazePart55,mazePart56,mazePart57,mazePart58,mazePart59,mazePart60,mazePart61,mazePart62,mazePart63,mazePart64,mazePart65,mazePart66,mazePart67,mazePart68,mazePart69,mazePart70,mazePart71,mazePart72,mazePart73,mazePart74,mazePart75,mazePart76,mazePart77,mazePart78,mazePart79,mazePart80,mazePart81,mazePart82,mazePart83,jet2,jet3, planetPurp, planetPurp2, planetPurp3, endHyperspace  ];


// planet movement
var planetPoint = new PIXI.Point();
var planetPoint2 = new PIXI.Point();
var planetPoint3 = new PIXI.Point();

placePoint();
// used http://scottmcdonnell.github.io/pixi-examples/index.html?s=demos&f=alpha-mask.js&title=Alpha%20Mask
function placePoint() {
	planetPoint.x = Math.floor(Math.random() * 800);
	planetPoint.y = Math.floor(Math.random() *  500);
	planetPoint2.x = Math.floor(Math.random() * 800);
	planetPoint2.y = Math.floor(Math.random() *  500);
	planetPoint3.x = Math.floor(Math.random() * 800);
	planetPoint3.y = Math.floor(Math.random() *  500);

}

function mouseHandler(e) {
	startScreen.alpha = 0;
	instructions.alpha = 1;
	// music
	hyperSound.play()
	
}

startScreen.interactive = true;
startScreen.on('mousedown', mouseHandler);
	

// keyboard interaction
function keydownEventHandler(e) {

	if (e.keyCode == 87) { // W key
	
	jet.texture = secondJet;
	jet.position.y -=20;

	collisionTest= collision(collObjects);
	}
	
	if (e.keyCode == 83) { // S key
	jet.texture = firstJet;
	jet.position.y += 20;
	
	collisionTest= collision(collObjects);
	}
	
	if (e.keyCode == 65) { // A key
	jet.texture = secondJet;
	jet.position.x -= 20;
	
	collisionTest= collision(collObjects);
	}

	if (e.keyCode == 68) { // D key
	jet.texture = firstJet;
	jet.position.x += 20;
	
	collisionTest= collision(collObjects);
	
	}

	if(e.keyCode == 32){ // space bar
	window.location.reload(false);
	}
	
	if(e.keyCode == 67){// c for credits
		
	PIXI.loader.add("creditScreenAssets.json").load(setCredits);

	}
	if(e.keyCode == 50){// 2 for instructions
		
	instructions.alpha = 0;
	}
	
	
}

var endGameFlag = false;


// collision testing
function collision(collObjects){

	
	for(let iter = 0; iter < collObjects.length; iter++) {
	
		var x_pos = collObjects[iter].position.x - jet.position.x;
		var y_pos = collObjects[iter].position.y - jet.position.y;
	
		// check if position of jet is the same as collision object and is hyperspace
		if (iter == collObjects.length - 1 && x_pos >= -(hit) && x_pos <= hit && y_pos >= -(hit) && y_pos <= hit)
		{
			PIXI.loader.add("winScreenAssets.json").load(ready);
			return true;
		}		

		// check if position of jet is the same as collision object
		if (x_pos >= -(hit) && x_pos <= hit && y_pos >= -(hit) && y_pos <= hit)
		{
		
		
		return true;
		
		}
	}
	return false;
}

document.addEventListener('keydown', keydownEventHandler);

// moving planets
var point = new PIXI.Point();

moveSprite();

function moveSprite(x_coord, y_coord) {
	point.x = x_coord;
	point.y = y_coord;
	collision(collObjects);
}

function setCredits(){
	var frames = [];
	

	for (var i=1; i<4; i++) {
		frames.push(PIXI.Texture.fromFrame('creditScreen' + i + '.png'));
	}
	
	creditScreen = new PIXI.extras.MovieClip(frames);
	creditScreen .position.x = 0;
	creditScreen .position.y = 0;
	creditScreen .animationSpeed = 0.1;
	creditScreen .play();
	stage.addChild(creditScreen );


}

function ready() {

	var frames = [];
	

	for (var i=1; i<4; i++) {
		frames.push(PIXI.Texture.fromFrame('winScreen' + i + '.png'));
	}

	

	winScreen= new PIXI.extras.MovieClip(frames);
	winScreen.position.x = 0;
	winScreen.position.y = 0;
	winScreen.animationSpeed = 0.1;
	winScreen.play();
	stage.addChild(winScreen);


	
}


	
// start animation loop
function animate() {
	
	requestAnimationFrame(animate);
			

	// if jet ran into something
	if (collisionTest == true && !endGameFlag)
	{
		jet.rotation += 0.1;
		endGameScreen.alpha = 1;
		
	}

	// move position of collision objects
	jet2.position.x += 1;	
	jet3.position.y -= 1;
	planetPurp.position.x += (planetPoint.x - planetPurp.x) * 0.05;
	planetPurp.position.y += (planetPoint.y - planetPurp.y) * 0.05;
	planetPurp2.position.x += (planetPoint2.x - planetPurp2.x) * 0.02;
	planetPurp2.position.y += (planetPoint2.y - planetPurp2.y) * 0.02;
	planetPurp3.position.x += (planetPoint3.x - planetPurp3.x) * 0.01;
	planetPurp3.position.y += (planetPoint3.y - planetPurp3.y) * 0.01;

	// move planets randomly
	if (Math.abs(planetPurp.x - planetPoint.x) <1)
	{
		placePoint(); 
		planetPurpcoll = collision(collObjects);
		// if jet ran into something
		if (planetPurpcoll == true && !endGameFlag)
		{
			jet.rotation += 0.1;
			endGameScreen.alpha = 1;
		
		}

	}

	if (Math.abs(planetPurp2.x - planetPoint2.x) <1)
	{
		placePoint();
		planetPurpcoll2 = collision(collObjects);
		// if jet ran into something
		if (planetPurpcoll2 == true && !endGameFlag)
		{
			jet.rotation += 0.1;
			endGameScreen.alpha = 1;
		
		}

	}

	if (Math.abs(planetPurp3.x - planetPoint3.x) <1)
	{
		placePoint(); 
		planetPurpcoll3 =collision(collObjects);
		// if jet ran into something
		if (planetPurpcoll3 == true && !endGameFlag)
		{
			jet.rotation += 0.1;
			endGameScreen.alpha = 1;
		
		}

	}

	
	// move back and forth jets
	if(jet2.x == 325 )
	{
		createjs.Tween.get(jet2.position).wait(10).to({x: 200, y: 300}, 1000);
		if (collision(collObjects)== true && !endGameFlag){
			endGameScreen.alpha = 1;
		}

	}
	
	if(jet3.y == 400)
	{
		createjs.Tween.get(jet3.position).wait(10).to({x: 200, y: 500}, 1000);
		if (collision(collObjects)== true && !endGameFlag){
			endGameScreen.alpha = 1;
		}

	}

		
	
	
	renderer.render(stage);

}


animate();


