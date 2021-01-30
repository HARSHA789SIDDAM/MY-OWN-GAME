var hero;
var enemy;
var ground;
var en1,en2,en3,en4,en5,en6,en7,en8,en9;
var he1,he2,he3,he4,he5,he6,he7,he8,he9;
var entry,entryimg;


function preload(){
	//enemy
	en1 = loadAnimation("en1/0.png","en1/1.png","en1/2.png","en1/3.png","en1/4.png","en1/5.png","en1/6.png","en1/7.png","en1/8.png","en1/9.png","en1/10.png","en1/11.png","en1/12.png","en1/13.png","en1/14.png","en1/15.png","en1/16.png","en1/17.png","en1/18.png","en1/19.png","en1/20.png","en1/21.png","en1/22.png","en1/23.png","en1/24.png","en1/25.png","en1/26.png","en1/27.png","en1/28.png","en1/29.png","en1/30.png","en1/31.png","en1/32.png","en1/33.png");
	en2 = loadAnimation("en2/0.png","en2/1.png","en2/2.png","en2/3.png","en2/4.png","en2/5.png","en2/6.png","en2/7.png","en2/8.png","en2/9.png","en2/10.png","en2/11.png","en2/12.png","en2/13.png","en2/14.png","en2/15.png","en2/16.png","en2/17.png","en2/18.png","en2/19.png","en2/20.png","en2/21.png","en2/22.png","en2/23.png","en2/24.png","en2/25.png","en2/26.png","en2/27.png","en2/28.png","en2/29.png","en2/30.png","en2/31.png","en2/32.png","en2/33.png");
	en3 = loadAnimation("en3/0.png","en3/1.png","en3/2.png");
	en4 = loadAnimation("en4/0.png","en4/1.png","en4/2.png","en4/3.png");
	en5 = loadAnimation("en5/0.png","en5/1.png","en5/2.png","en5/3.png","en5/4.png","en5/5.png","en5/6.png","en5/7.png","en5/8.png","en5/9.png","en5/10.png","en5/11.png","en5/12.png","en5/13.png","en5/14.png","en5/15.png","en5/16.png","en5/17.png","en5/18.png","en5/19.png","en5/20.png","en5/21.png","en5/22.png","en5/23.png","en5/24.png","en5/25.png","en5/26.png","en5/27.png","en5/28.png","en5/29.png","en5/30.png","en5/31.png","en5/32.png","en5/33.png","en5/34.png","en5/35.png","en5/36.png","en5/37.png","en5/38.png","en5/39.png","en5/40.png","en5/41.png","en5/42.png","en5/43.png","en5/44.png","en5/45.png","en5/46.png","en5/47.png","en5/48.png");
	en6 = loadAnimation("en6/0.png","en6/1.png","en6/2.png","en6/3.png","en6/4.png","en6/5.png","en6/6.png","en6/7.png","en6/8.png","en6/9.png","en6/10.png","en6/11.png","en6/12.png","en6/13.png","en6/14.png","en6/15.png","en6/16.png","en6/17.png","en6/18.png","en6/19.png","en6/20.png","en6/21.png","en6/22.png","en6/23.png","en6/24.png","en6/25.png","en6/26.png","en6/27.png","en6/28.png","en6/29.png","en6/30.png","en6/31.png","en6/32.png","en6/33.png","en6/34.png","en6/35.png","en6/36.png","en6/37.png","en6/38.png","en6/39.png");
	en7 = loadAnimation("en7/0.png","en7/1.png","en7/2.png","en7/3.png","en7/4.png","en7/5.png","en7/6.png","en7/7.png","en7/8.png","en7/9.png","en7/10.png","en7/11.png","en7/12.png","en7/13.png","en7/14.png","en7/15.png","en7/16.png","en7/17.png","en7/18.png","en7/19.png","en7/20.png","en7/21.png","en7/22.png","en7/23.png","en7/24.png","en7/25.png","en7/26.png","en7/27.png","en7/28.png","en7/29.png","en7/30.png","en7/31.png","en7/32.png","en7/33.png","en7/34.png");
	en8 = loadAnimation("en8/0.png","en8/1.png","en8/2.png","en8/3.png","en8/4.png","en8/5.png","en8/6.png","en8/7.png","en8/8.png","en8/9.png","en8/10.png","en8/11.png","en8/12.png","en8/13.png","en8/14.png","en8/15.png","en8/16.png","en8/17.png","en8/18.png","en8/19.png","en8/20.png","en8/21.png","en8/22.png","en8/23.png","en8/24.png");
	en9 = loadAnimation("en9/0.png","en9/1.png","en9/2.png");

	//hero
	he1 = loadAnimation("he1/0.png","he1/1.png","he1/2.png","he1/3.png","he1/4.png","he1/5.png");
    he2 = loadAnimation("he2/0.png","he2/1.png","he2/2.png","he2/3.png","he2/4.png","he2/5.png","he2/6.png","he2/7.png","he2/8.png","he2/9.png","he2/10.png","he2/11.png","he2/12.png","he2/13.png","he2/14.png","he2/15.png");
	he3 = loadAnimation("he3/0.png","he3/1.png","he3/2.png","he3/3.png","he3/4.png","he3/5.png","he3/6.png","he3/7.png","he3/8.png","he3/9.png","he3/10.png","he3/11.png","he3/12.png","he3/13.png","he3/14.png","he3/15.png","he3/16.png","he3/17.png","he3/18.png","he3/19.png","he3/20.png","he3/21.png","he3/22.png");
	he4 = loadAnimation("he4/0.png","he4/1.png","he4/2.png","he4/3.png","he4/4.png","he4/5.png","he4/6.png","he4/7.png","he4/8.png","he4/9.png","he4/10.png","he4/11.png","he4/12.png","he4/13.png","he4/14.png","he4/15.png","16.png","he4/17.png","he4/18.png","he4/19.png","he4/20.png","he4/21.png","he4/22.png","he4/23.png","he4/24.png","he4/25.png","he4/26.png","he4/27.png");
	he5 = loadAnimation("he5/0.png","he5/1.png","he5/2.png","he5/3.png","he5/4.png","he5/5.png","he5/6.png","he5/7.png","he5/8.png","he5/9.png","he5/10.png","he5/11.png","he5/12.png","he5/13.png","he5/14.png");
	he6 = loadAnimation("he6/0.png","he6/1.png","he6/2.png","he6/3.png","he6/4.png","he6/5.png","he6/6.png","he6/7.png","he6/8.png","he6/9.png","he6/10.png","he6/11.png","he6/12.png","he6/13.png","he6/14.png","he6/15.png","he6/16.png","he6/17.png","he6/18.png","he6/19.png","he6/20.png","he6/21.png","he6/22.png","he6/23.png","he6/24.png","he6/25.png","he6/26.png","he6/27.png","he6/28.png","he6/29.png","he6/30.png","he6/31.png","he6/32.png","he6/33.png","he6/34.png","he6/35.png","he6/36.png","he6/37.png","he6/38.png","he6/39.png","he6/40.png","he6/41.png","he6/42.png","he6/43.png","he6/44.png","he6/45.png","he6/46.png","he6/47.png","he6/48.png","he6/49.png","he6/50.png","he6/51.png","he6/52.png","he6/53.png","he6/54.png","he6/55.png","he6/56.png","he6/57.png","he6/58.png","he6/59.png","he6/60.png","he6/61.png","he6/62.png","he6/63.png","he6/64.png");
	he7 = loadAnimation("he7/0.png","he7/1.png","he7/2.png","he7/3.png","he7/4.png","he7/5.png","he7/6.png","he7/7.png","he7/8.png","he7/9.png","he7/10.png","he7/11.png","he7/12.png","he7/13.png","he7/14.png","he7/15.png","he7/16.png","he7/17.png","he7/18.png","he7/19.png","he7/20.png","he7/21.png","he7/22.png","he7/23.png","he7/24.png","he7/25.png","he7/26.png","he7/27.png","he7/28.png","he7/29.png","he7/30.png","he7/31.png","he7/32.png","he7/33.png","he7/34.png","he7/35.png","he7/36.png","he7/37.png","he7/38.png","he7/39.png","he7/40.png","he7/41.png","he7/42.png","he7/43.png","he7/44.png");
	he8 = loadAnimation("he8/0.png","he8/1.png","he8/2.png","he8/3.png","he8/4.png","he8/5.png","he8/6.png","he8/7.png","he8/8.png","he8/9.png","he8/10.png","he8/11.png","he8/12.png","he8/13.png","he8/14.png","he8/15.png","he8/16.png","he8/17.png","he8/18.png","he8/19.png","he8/20.png","he8/21.png","he8/22.png","he8/23.png");
	he9 = loadAnimation("he9/0.png","he9/1.png","he9/2.png","he9/3.png","he9/4.png","he9/5.png","he9/6.png","he9/7.png","he9/8.png","he9/9.png","he9/10.png","he9/11.png","he9/12.png","he9/13.png","he9/14.png","he9/15.png","he9/16.png","he9/17.png","he9/18.png","he9/19.png");

	entryimg = loadAnimation("entry/0.png","entry/1.png","entry/2.png","entry/3.png","entry/4.png","entry/5.png","entry/6.png","entry/7.png","entry/8.png","entry/9.png");

	//backGround
	bg = loadAnimation("screen/0.png","screen/1.png","screen/2.png","screen/3.png","screen/4.png","screen/5.png","screen/6.png","screen/7.png","screen/8.png","screen/9.png","screen/10.png","screen/11.png","screen/12.png","screen/13.png","screen/14.png","screen/15.png","screen/16.png","screen/17.png","screen/18.png","screen/19.png","screen/20.png","screen/21.png","screen/22.png","screen/23.png",);
}

function setup(){
	createCanvas(1000, 500);
	ground = createSprite(500, 200);
	ground.addAnimation("pnh",bg);
	ground.scale = 1.6;

	entry = createSprite(500, 300);
	entry.addAnimation("abs",entryimg);
	entry.scale = 0.5;
	entry.velocityY = 2;
	
}

function draw(){
	background("purple");

	drawSprites();
}