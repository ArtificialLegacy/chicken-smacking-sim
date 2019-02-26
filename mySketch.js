let save = {
	"clicks": 0,
	"presPoints": 0,
	"clickMult": 1,
	"upCost": 50,
	"autoMult": 0,
	"autoCost": 75,
	"cannonMult": 0,
	"cannonCost": 1500,
	"turretMult": 0,
	"turretCost": 2500,
	"presLvl": 0,
	"hit50mill": false,
	"hit100mill": false,
	"hit150mill": false,
	"hit200mill": false,
	"packSel": 0,
	"hasRoyalePack": false,
	"ach1": false,
	"ach2": false,
	"ach3": false,
	"ach4": false,
	"ach5": false,
	"ach6": false,
	"ach7": false,
	"ach8": false,
	"presCost": 300000000
};

let packSel = 0;

let hasRoyalPack = false;

let presPoints = 0;

let presCost = 300000000;

let esave = save;

let time = 0;

let shopOpen = false;
let skinsOpen = false;
let achieveOpen = false;

let hit50mill = false;
let hit100mill = false;
let hit150mill = false;
let hit200mill = false;

let clicks = 0;

let clickMult = 1;
let upCost = 50;

let autoMult = 0;
let autoCost = 75;

let cannonMult = 0;
let cannonCost = 1500;

let turretMult = 0;
let turretCost = 2500;

let presLvl = 0;

let ach1 = false;
let ach2 = false;
let ach3 = false;
let ach4 = false;
let ach5 = false;
let ach6 = false;
let ach7 = false;
let ach8 = false;

let img;
let img2;
let img3;
let img4;
let img5;

let img_1;
let img2_1;
let img3_1;
let img4_1;
let img5_1;

let mute;
let unmute;

let achieve;

let shop;

let shopCool = 0;

let skinsCool = 0;

let achieveCool = 0;

let muted = false;
let muteCool = 0;

let timerOn;
let timerOff;

let timerd = false;
let timeCool = 0;

let timerReset;

let fpsd = false;
let fpsCool = 0;

let currFPS = 60;
let upFPS = 0;

let fpsYes;
let fpsNo;

let saveI;
let saveU;

let skins;

let sound;
let up;
function setup() {
	createCanvas(windowWidth, windowHeight);
	img.resize(windowWidth-50, windowHeight);
	img2.resize(windowWidth-50, windowHeight);
	img3.resize(windowWidth-50, windowHeight);
	img4.resize(windowWidth-50, windowHeight);
	img5.resize(windowWidth-50, windowHeight);
	img_1.resize(windowWidth-50, windowHeight);
	img2_1.resize(windowWidth-50, windowHeight);
	img3_1.resize(windowWidth-50, windowHeight);
	img4_1.resize(windowWidth-50, windowHeight);
	img5_1.resize(windowWidth-50, windowHeight);
	shop.resize(25, 25);
	mute.resize(25, 25);
	unmute.resize(25, 25);
	timerOn.resize(25, 25);
	timerOff.resize(25, 25);
	timerReset.resize(25, 25);
	fpsYes.resize(25, 25);
	fpsNo.resize(25, 25);
	saveI.resize(25, 25);
	saveU.resize(25, 25);
	skins.resize(25, 25);
	achieve.resize(25, 25);
	loadSave();
}

function shopGUI(){
	fill(160);
	rectMode(CENTER);
	rect(windowWidth/2, windowHeight/2, windowWidth/2, (windowHeight/3)*2);
	rect(windowWidth/2-windowWidth/8, windowHeight/2-(windowHeight/3)+10, windowWidth/4, 50);
	rect(windowWidth/2-windowWidth/8, windowHeight/2-(windowHeight/3)+60, windowWidth/4, 50);
	rect(windowWidth/2+windowWidth/8, windowHeight/2-(windowHeight/3)+10, windowWidth/4, 50);
	rect(windowWidth/2+windowWidth/8, windowHeight/2-(windowHeight/3)+60, windowWidth/4, 50);
	rect(windowWidth/2, windowHeight/2+(windowHeight/3)-10, windowWidth/2, 50);
	fill(0);
	rectMode(CORNER);
	textAlign(CENTER);
	if(windowWidth < 275 || windowHeight < 600){
		textSize(8);
	} else {
		textSize(13);
	}
	text(`SPC: ${upCost}`, windowWidth/2-windowWidth/8, windowHeight/2-(windowHeight/3)+20);
	text(`SmackCannon: ${cannonCost}`, windowWidth/2-windowWidth/8, windowHeight/2-(windowHeight/3)+70);
	text(`Autosmacker: ${autoCost}`, windowWidth/2+windowWidth/8, windowHeight/2-(windowHeight/3)+20);
	text(`SmackTurret: ${turretCost}`, windowWidth/2+windowWidth/8, windowHeight/2-(windowHeight/3)+70);
	text(`Prestige: ${presCost}; Level : ${presLvl}`, windowWidth/2, windowHeight/2+(windowHeight/3)-10);
}

function skinsGUI(){
	fill(160);
	rectMode(CENTER);
	rect(windowWidth/2, windowHeight/2, windowWidth/2, (windowHeight/3)*2);
	rect(windowWidth/2-windowWidth/8, windowHeight/2-(windowHeight/3)+10, windowWidth/4, 50);
	rect(windowWidth/2+windowWidth/8, windowHeight/2-(windowHeight/3)+10, windowWidth/4, 50);
	rectMode(CORNER);
	fill(0);
	textAlign(CENTER);
	if(windowWidth < 275 || windowHeight < 600){
		textSize(5);
	} else {
		textSize(10);
	}
	if(packSel == 0){
		text("Default Pack (Selected)", windowWidth/2-windowWidth/8, windowHeight/2-(windowHeight/3)+20);
	} else {
		text("Default Pack", windowWidth/2-windowWidth/8, windowHeight/2-(windowHeight/3)+20);
	}
	if(packSel == 1){
		text("Royal Pack (Selected)", windowWidth/2+windowWidth/8, windowHeight/2-(windowHeight/3)+20);
	} else {
		if(hasRoyalPack){
			text("Royal Pack", windowWidth/2+windowWidth/8, windowHeight/2-(windowHeight/3)+20);	
		} else {
			text("Buy Royal Pack: (1 Prestige Point)", windowWidth/2+windowWidth/8, windowHeight/2-(windowHeight/3)+20);	
		}
	}
}

function achieveGUI(){
	fill(160);
	rectMode(CENTER);
	rect(windowWidth/2, windowHeight/2, windowWidth/2, (windowHeight/3)*2);
	rectMode(CORNER);
	fill(0);
	textAlign(LEFT);
	if(windowWidth < 275 || windowHeight < 600){
		textSize(8);
	} else {
		textSize(14);
	}
	if(!ach1){
		text("Reach 50m Smacks : Incomplete", windowWidth/2-windowWidth/4+10, windowHeight/2-(windowHeight/3)+20);
	} else {
		text("Reach 50m Smacks : Complete", windowWidth/2-windowWidth/4+10, windowHeight/2-(windowHeight/3)+20);
	}
	if(!ach2){
		text("Reach 100m Smacks : Incomplete", windowWidth/2-windowWidth/4+10, windowHeight/2-(windowHeight/3)+40);
	} else {
		text("Reach 100m Smacks : Complete", windowWidth/2-windowWidth/4+10, windowHeight/2-(windowHeight/3)+40);
	}
	if(!ach3){
		text("Reach 150m Smacks : Incomplete", windowWidth/2-windowWidth/4+10, windowHeight/2-(windowHeight/3)+60);
	} else {
		text("Reach 150m Smacks : Complete", windowWidth/2-windowWidth/4+10, windowHeight/2-(windowHeight/3)+60);
	}
	if(!ach4){
		text("Reach 200m Smacks : Incomplete", windowWidth/2-windowWidth/4+10, windowHeight/2-(windowHeight/3)+80);
	} else {
		text("Reach 200m Smacks : Complete", windowWidth/2-windowWidth/4+10, windowHeight/2-(windowHeight/3)+80);
	}
	if(!ach5){
		text("Prestige Once : Incomplete", windowWidth/2-windowWidth/4+10, windowHeight/2-(windowHeight/3)+100);
	} else {
		text("Prestige Once : Complete", windowWidth/2-windowWidth/4+10, windowHeight/2-(windowHeight/3)+100);
	}
	if(!ach6){
		text("Prestige 5 Times : Incomplete", windowWidth/2-windowWidth/4+10, windowHeight/2-(windowHeight/3)+120);
	} else {
		text("Prestige 5 Times : Complete", windowWidth/2-windowWidth/4+10, windowHeight/2-(windowHeight/3)+120);
	}
	if(!ach7){
		text("Prestige 10 Times : Incomplete", windowWidth/2-windowWidth/4+10, windowHeight/2-(windowHeight/3)+140);
	} else {
		text("Prestige 10 Times : Complete", windowWidth/2-windowWidth/4+10, windowHeight/2-(windowHeight/3)+140);
	}
	if(!ach8){
		text("Buy a Skin Pack : Incomplete", windowWidth/2-windowWidth/4+10, windowHeight/2-(windowHeight/3)+160);
	} else {
		text("Buy a Skin Pack : Complete", windowWidth/2-windowWidth/4+10, windowHeight/2-(windowHeight/3)+160);
	}
}

function screen() {
	fill(75, 122, 198);
	rect(0, 0, windowWidth-48, windowHeight);
	if(packSel == 0){
		if(!hit50mill){
			image(img, 0, 0);
		} else if(hit200mill){
			image(img4, 0, 0);
		} else if(hit150mill){
			image(img3, 0, 0);
		} else if(hit100mill){
			image(img2, 0, 0);
		} else if(hit50mill){
			image(img5, 0, 0);
		}
	} else if(packSel == 1){
		if(!hit50mill){
			image(img_1, 0, 0);
		} else if(hit200mill){
			image(img4_1, 0, 0);
		} else if(hit150mill){
			image(img3_1, 0, 0);
		} else if(hit100mill){
			image(img2_1, 0, 0);
		} else if(hit50mill){
			image(img5_1, 0, 0);
		}
	}
	fill(0);
	if(windowWidth < 275 || windowHeight < 600){
		textSize(14);
	} else {
		textSize(23);
	}
	textAlign(LEFT);
	text(`Smacks: ${Math.floor(clicks)}`, 10, 25);
	text(`Prestige Points: ${presPoints}`, 10, 55);
	if(timerd){
		text(`Timer: (${Math.floor(time/60)}); (${time});`, 10, 85);
	}
	if(fpsd){
		text(`FPS: ${Math.floor(currFPS)}`, 10, 115);	
	}
	fill(8, 39, 129);
	rect(windowWidth-50, 0, 50, 50);
	rect(windowWidth-50, 50, 50, 50);
	rect(windowWidth-50, 100, 50, 50);
	rect(windowWidth-50, 150, 50, 50);
	rect(windowWidth-50, 200, 50, 50);
	rect(windowWidth-50, 250, 50, 50);
	rect(windowWidth-50, 300, 50, windowHeight-450);
	rect(windowWidth-50, windowHeight-50, 50, 50);
	rect(windowWidth-50, windowHeight-100, 50, 50);
	rect(windowWidth-50, windowHeight-150, 50, 50);
	imageMode(CENTER);
	if(muted){
		image(mute, windowWidth-25, 25);
	} else {
		image(unmute, windowWidth-25, 25);
	}
	if(timerd){
		image(timerOn, windowWidth-25, 75);	
	} else {
		image(timerOff, windowWidth-25, 75);	
	}
	if(fpsd){
		image(fpsYes, windowWidth-25, 175);	
	} else {
		image(fpsNo, windowWidth-25, 175);	
	}
	image(timerReset, windowWidth-25, 125);
	image(saveI, windowWidth-25, 225);
	image(saveU, windowWidth-25, 275);
	image(shop, windowWidth-25, windowHeight-25);
	image(skins, windowWidth-25, windowHeight-75);
	image(achieve, windowWidth-25, windowHeight-125);
	imageMode(CORNER);
	fill(0);
	textAlign(CENTER);
	if(shopOpen){
		shopGUI();	
	}
	if(skinsOpen){
		skinsGUI();	
	}
	if(achieveOpen){
		achieveGUI();	
	}
}

function preload() {
	img = loadImage('chick-chick.png');
	img2 = loadImage('chick-chick2.png');
	img3 = loadImage('chick-chick3.png');
	img4 = loadImage('chick-chick4.png');
	img5 = loadImage('chick-chick5.png');
	
	img_1 = loadImage('chick-chick_1.png');
	img2_1 = loadImage('chick-chick2_1.png');
	img3_1 = loadImage('chick-chick3_1.png');
	img4_1 = loadImage('chick-chick4_1.png');
	img5_1 = loadImage('chick-chick5_1.png');
	
	mute = loadImage('mute.png');
	unmute = loadImage('volume.png');
	
	shop = loadImage('shop.png');
	
	achieve = loadImage('achievements.png');
	
	timerOn = loadImage('timerOn.png');
	timerOff = loadImage('timerOff.png');
	timerReset = loadImage('timerReset.png');
	
	fpsYes = loadImage('fps.png');
	fpsNo = loadImage('nofps.png');
	
	saveI = loadImage('save.png');
	saveU = loadImage('delsave.png');
	
	skins = loadImage('skins.png');
	
	sound = loadSound('Slap-SoundMaster13-49669815.mp3');
	up = loadSound('spell.wav');
}

function mousePressed(){
	if(mouseX > windowWidth-50 && mouseY < 50){
		if(muteCool <= 0){
			muteCool = 20;
			if(muted){
				muted = false;	
			} else {
				muted = true;	
			}
		}
	} else if(mouseX > windowWidth-50 && mouseY < 100 && mouseY > 50){
		if(timeCool <= 0){
			timeCool = 20;
			if(timerd){
				timerd = false;	
			} else {
				timerd = true;	
			}
		}
	} else if(mouseX > windowWidth-50 && mouseY < 200 && mouseY > 150){
		if(fpsCool <= 0){
			fpsCool = 20;
			if(fpsd){
				fpsd = false;	
			} else {
				fpsd = true;	
			}
		}
	} else if(mouseX > windowWidth-50 && mouseY < 250 && mouseY > 200){
		updateSave();
		alert("Progress Saved!");
	} else if(mouseX > windowWidth-50 && mouseY < 300 && mouseY > 250){
		let confirm = prompt("Type 'confirm' to reset progress", "cancel");
		if(confirm == "confirm"){
			localStorage.setItem("chickensmackingsim", JSON.stringify(esave));
			loadSave();
			alert("Progress reset!");
		} else {
			alert("Progress reset cancelled.");	
		}
	} else if(!skinsOpen && !achieveOpen && mouseX > windowWidth-50 && mouseY > windowHeight-50){
		if(shopCool <= 0){
			shopCool = 20;
			if(shopOpen){
				shopOpen = false;	
			} else {
				shopOpen = true;	
			}
		}
	} else if(!shopOpen && !achieveOpen && mouseX > windowWidth-50 && mouseY > windowHeight-100 && mouseY < windowHeight-50){
		if(skinsCool <= 0){
			skinsCool = 20;
			if(skinsOpen){
				skinsOpen = false;	
			} else {
				skinsOpen = true;	
			}
		}
	} else if(!shopOpen && !skinsOpen && mouseX > windowWidth-50 && mouseY > windowHeight-150 && mouseY < windowHeight-100){
		if(achieveCool <= 0){
			achieveCool = 20;
			if(achieveOpen){
				achieveOpen = false;	
			} else {
				achieveOpen = true;	
			}
		}
	} else if(mouseX > windowWidth-50 && mouseY < 150 && mouseY > 100){
		time = 0;
	} else if(shopOpen && mouseX > windowWidth/2-windowWidth/8-(windowWidth/4)/2 && mouseX < windowWidth/2 && mouseY > windowHeight/2-(windowHeight/3)-15 && mouseY < windowHeight/2-(windowHeight/3)+35){
		if(clicks >= upCost){
			clicks -= upCost;
			upCost += 5;
			clickMult++;
			if(!muted){
				up.play();
			}
		}
	} else if(shopOpen && mouseX > windowWidth/2-windowWidth/8-(windowWidth/4)/2 && mouseX < windowWidth/2 && mouseY > windowHeight/2-(windowHeight/3)+35 && mouseY < windowHeight/2-(windowHeight/3)+85){
		if(clicks >= cannonCost){
			clicks -= cannonCost;
			cannonCost += 175;
			cannonMult += 15;
			if(!muted){
				up.play();
			}
		}
	} else if(shopOpen && mouseX > windowWidth/2 && mouseX < windowWidth/2+windowWidth/8+(windowWidth/4)/2 && mouseY > windowHeight/2-(windowHeight/3)-15 && mouseY < windowHeight/2-(windowHeight/3)+35){
		if(clicks >= autoCost){
			clicks -= autoCost;
			autoCost += 120;
			autoMult += 40;
			if(!muted){
				up.play();
			}
		}
	} else if(shopOpen && mouseX > windowWidth/2 && mouseX < windowWidth/2+windowWidth/8+(windowWidth/4)/2 && mouseY > windowHeight/2-(windowHeight/3)+35 && mouseY < windowHeight/2-(windowHeight/3)+85){
		if(clicks >= turretCost){
			clicks -= turretCost;
			turretCost += 400;
			turretMult += 300;
			if(!muted){
				up.play();
			}
		}
	} else if(skinsOpen && mouseX > windowWidth/2-windowWidth/8-(windowWidth/4)/2 && mouseX < windowWidth/2 && mouseY > windowHeight/2-(windowHeight/3)-15 && mouseY < windowHeight/2-(windowHeight/3)+35){
		if(packSel !== 0){
			packSel = 0;
		}
	} else if(skinsOpen && mouseX > windowWidth/2 && mouseX < windowWidth/2+windowWidth/8+(windowWidth/4)/2 && mouseY > windowHeight/2-(windowHeight/3)-15 && mouseY < windowHeight/2-(windowHeight/3)+35){
		if(hasRoyalPack && packSel !== 1){
			packSel = 1;
			if(!ach8) ach8 = true;
		} else if(!hasRoyalPack){
			if(presPoints >= 3){
				presPoints -= 3;
				hasRoyalPack = true;
				if(!ach8) ach8 = true;
				if(!muted){
					up.play();	
				}
			}
		}
	} else if(shopOpen && mouseX > windowWidth/4 && mouseX < (windowWidth/4)*3 && mouseY > windowHeight/2+(windowHeight/3)-35 && mouseY < windowHeight/2+(windowHeight/3)+15){
		if(clicks >= 300000000){
			clicks = 0;
			presLvl++;
			if(!presPoints) presPoints = 0;
			presPoints += presLvl;
			clickMult = 1;
			//clickMult = 1000000;
			upCost = 50;
			autoMult = 0;
			autoCost = 150;
			cannonMult = 0;
			cannonCost = 1500;
			turretMult = 0;
			turretCost = 2500;
			hit50mill = false;
			hit100mill = false;
			hit150mill = false;
			hit200mill = false;
			shopOpen = false;
			presCost += 75000000
			if(!ach5) ach5 = true;
			if(!ach6 && presLvl >= 5) ach6 = true;
			if(!ach7 && presLvl >= 10) ach7 = true;
		}
	} else if(!shopOpen && !skinsOpen && !achieveOpen) {
		clicks += cannonMult+clickMult+(100*presLvl);
		if(hit100mill) clicks += floor((clickMult+cannonMult)/4);
		if(hit150mill) clicks += (clickMult+cannonMult)*2;
		if(hit200mill) clicks += (clickMult+cannonMult)*10;
		if(!muted){
			sound.setVolume(random(0.02, 0.05));
			sound.play();
		}
		if(clicks >= 50000000){
			hit50mill = true;
			ach1 = true;
		}
		if(clicks >= 100000000){
			hit100mill = true;
			ach2 = true;
		}
		if(clicks >= 150000000){
			hit150mill = true;
			ach3 = true;
		}
		if(clicks >= 200000000){
			hit200mill = true;
			ach4 = true;
		}
	}
}

function draw(){
	if(timerd){
		time++;
	}
	if(fpsd){
		if(upFPS == 60){
			upFPS = 0;
			currFPS = frameRate();
		} else {
			upFPS++;	
		}
	}
	clear();
	screen();
	if(autoMult > 0){
		clicks += autoMult/60;
	}
	if(turretMult > 0){
		clicks += turretMult/60;
	}
	if(muteCool > 0) muteCool--;
	if(shopCool > 0) shopCool--;
	if(skinsCool > 0) skinsCool--;
	if(achieveCool > 0) achieveCool--;
	if(timeCool > 0) timeCool--;
	if(fpsCool > 0) fpsCool--;
}

function loadSave(){
	if(!JSON.parse(localStorage.getItem("chickensmackingsim"))){
		 localStorage.setItem("chickensmackingsim", JSON.stringify(save))
	}
	save = JSON.parse(localStorage.getItem("chickensmackingsim"));
	clicks = save.clicks;
	presPoints = save.presPoints;
	clickMult = save.clickMult;
	//clickMult = 1000000;
	upCost = save.upCost;
	autoMult = save.autoMult;
	autoCost = save.autoCost;
	cannonMult = save.cannonMult;
	cannonCost = save.cannonCost;
	turretMult = save.turretMult;
	turretCost = save.turretCost;
	presLvl = save.presLvl;
	hit50mill = save.hit50mill;
	hit100mill = save.hit100mill;
	hit150mill = save.hit150mill;
	hit200mill = save.hit200mill;
	packSel = save.packSel;
	hasRoyalPack = save.hasRoyalPack;
	ach1 = save.ach1;
	ach2 = save.ach2;
	ach3 = save.ach3;
	ach4 = save.ach4;
	ach5 = save.ach5;
	ach6 = save.ach6;
	ach7 = save.ach7;
	ach8 = save.ach8;
	presCost = save.presCost;
	if(!presPoints) presPoints = 0;	
	if(!packSel) packSel = 0;
	if(!hasRoyalPack) hasRoyalPack = false;
	if(!ach1) ach1 = false;
	if(!ach2) ach2 = false;
	if(!ach3) ach3 = false;
	if(!ach4) ach4 = false;
	if(!ach5) ach5 = false;
	if(!ach6) ach6 = false;
	if(!ach7) ach7 = false;
	if(!ach8) ach8 = false;
	if(!presCost) presCost = 300000000;
}

function updateSave(){
	save.clicks = clicks;
	save.presPoints = presPoints;
	save.clickMult = clickMult;
	save.upCost = upCost;
	save.autoMult = autoMult;
	save.autoCost = autoCost;
	save.cannonMult = cannonMult;
	save.cannonCost = cannonCost;
	save.turretMult = turretMult;
	save.turretCost = turretCost;
	save.presLvl = presLvl;
	save.hit50mill = hit50mill;
	save.hit100mill = hit100mill;
	save.hit150mill = hit150mill;
	save.hit200mill = hit200mill;
	save.packSel = packSel;
	save.hasRoyalPack = hasRoyalPack;
	save.ach1 = ach1;
	save.ach2 = ach2;
	save.ach3 = ach3;
	save.ach4 = ach4;
	save.ach5 = ach5;
	save.ach6 = ach6;
	save.ach7 = ach7;
	save.ach8 = ach8;
	save.presCost = presCost;
	localStorage.setItem("chickensmackingsim", JSON.stringify(save));
}
