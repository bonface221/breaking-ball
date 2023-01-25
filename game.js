cvs = document.getElementById("game");
ctx = cvs.getContext("2d");

// LOAD bgImg IMAGE
const bgImg = new Image();
bgImg.src = "imgs/bg.png";

// Level 1 stage 1 image
const lv1ImgStage1 = new Image();
lv1ImgStage1.src = "imgs/lv1-stage1.png";

// Level 1 stage 1 image
const lv1ImgStage2 = new Image();
lv1ImgStage2.src = "imgs/lv1-stage2.png";

// Level 1 stage 1 image
const lv1ImgStage3 = new Image();
lv1ImgStage3.src = "imgs/lv1-stage3.png";

// level 1 stage 1 hand
const handImg = new Image();
handImg.src = "imgs/hand.png";

// level 2 stage 2 ball images
const lv2Imgstage2 = new Image();
lv2Imgstage2.src = "imgs/lv2-stage2.png";

// level 2 stage 3 ball images
const lv2Imgstage3 = new Image();
lv2Imgstage3.src = "imgs/lv2-stage3.png";

// level 2 stage 4 ball images
const lv2Imgstage4 = new Image();
lv2Imgstage4.src = "imgs/lv2-stage4.png";

// level 3
const backgroundImageLevel3 = new Image();
backgroundImageLevel3.src = "imgs/bg-image-final.png";
backgroundImageLevel3.width = cvs.width;
backgroundImageLevel3.height = cvs.height;

// level 1 text
const lv1TextImg = new Image();
lv1TextImg.src = "imgs/text.png";

// level 3 text
const lv3TextImg = new Image();
lv3TextImg.src = "imgs/text-level3.png";

// level 3 play now button
const playNow = new Image();
playNow.src = "imgs/play-now.png";

// Frames
let frames = 0;
let frame = 0;

// Stages
let stage = 0;
let stageLevel2Frame = 0;

// is clicked
let clicked = false;
let clickedLevel2 = false;

// hand animation
let show = false;

cvs.addEventListener("click", function (e) {
	if (stage === 0) {
		clicked = !clicked;
		run();
	}
	if (stage === 1) {
		clickedLevel2 = !clickedLevel2;
		LevelRun();
	}
	if (stage === 2) {
		window.open("https://apps.apple.com/", "_blank");
	}
});

if (stage === 0) {
	setTimeout(() => {
		if (clicked) {
		} else {
			run();
		}
	}, 3000);
}

function timeOut2Call() {
	setTimeout(() => {
		console.log("i'm in the second stage");
		if (clickedLevel2) {
		} else {
			LevelRun();
		}
	}, 3000);
}

function run() {
	setTimeout(() => {
		frame++;
		setTimeout(() => {
			frame++;
			setTimeout(() => {
				frame++;
				stage++;
				timeOut2Call();
			}, 500);
		}, 500);
	}, 500);
}

function LevelRun() {
	setTimeout(() => {
		stageLevel2Frame++;
		setTimeout(() => {
			stageLevel2Frame++;
			setTimeout(() => {
				stageLevel2Frame++;
				console.log("You can now move to stage 3");
				stage++;
			}, 500);
		}, 500);
	}, 500);
}

// BACKGROUND
const bg = {
	x: 0,
	y: 0,
	w: cvs.width,
	h: cvs.height,

	draw: function () {
		ctx.drawImage(bgImg, this.x, this.y, this.w, this.h);
	},
};

// BACKGROUND
const bgLevel3 = {
	x: 0,
	y: 0,
	w: cvs.width,
	h: cvs.height,

	draw: function () {
		ctx.drawImage(backgroundImageLevel3, this.x, this.y, this.w, this.h);
	},
};

// Level 1 image
const balls = {
	Ty: 40,
	x: 170,
	y: 100,

	Hy: 150,
	img2Y: 120,
	img3X: 120,

	draw() {
		ctx.drawImage(lv1TextImg, cvs.width / 2 - lv1TextImg.width / 2, this.Ty);
		if (frame === 0) {
			ctx.drawImage(lv1ImgStage1, this.x, this.y);

			if (show) {
				ctx.drawImage(handImg, this.x, this.Hy);
			} else {
				ctx.drawImage(handImg, this.x, 170);
			}
		} else if (frame === 1) {
			ctx.drawImage(lv1ImgStage2, this.x, this.img2Y);
		} else {
			ctx.drawImage(lv1ImgStage3, this.img3X, this.img2Y);
		}
	},
};

function getWidth(width) {
	return cvs.width / 2 - width / 2;
}
function getHeight(height) {
	return cvs.height / 2 - height / 2;
}

// Level 2 balls
const Level2Balls = {
	Ty: 40,
	draw() {
		ctx.drawImage(lv1TextImg, cvs.width / 2 - lv1TextImg.width / 2, this.Ty);

		if (stageLevel2Frame === 0)
			ctx.drawImage(
				lv1ImgStage1,
				getWidth(lv1ImgStage1.width),
				getHeight(lv1ImgStage1.height)
			);
		else if (stageLevel2Frame === 1) {
			ctx.drawImage(
				lv2Imgstage2,
				getWidth(lv2Imgstage2.width),
				getHeight(lv2Imgstage2.height)
			);
		} else if (stageLevel2Frame === 2) {
			ctx.drawImage(
				lv2Imgstage3,
				getWidth(lv2Imgstage3.width),
				getHeight(lv2Imgstage3.height)
			);
		} else if (stageLevel2Frame === 3) {
			ctx.drawImage(
				lv2Imgstage4,
				getWidth(lv2Imgstage4.width),
				getHeight(lv2Imgstage4.height)
			);
		}
	},
};

// level 3 arts
const level3 = {
	ty: 30,
	py: cvs.height - 100,
	draw() {
		ctx.drawImage(lv3TextImg, cvs.width / 2 - lv3TextImg.width / 2, this.ty);
		ctx.drawImage(playNow, cvs.width / 2 - playNow.width / 2, this.py);
	},
};

// DRAW
function draw() {
	if (stage === 0) {
		bg.draw();
		balls.draw();
	}

	if (stage === 1) {
		bg.draw();
		Level2Balls.draw();
	}
	if (stage === 2) {
		bgLevel3.draw();
		level3.draw();
	}
}

// UPDATE
function update() {}

// LOOP
function loop() {
	update();
	draw();

	requestAnimationFrame(loop);
	frames++;
	if (stage === 0 && frame === 0) {
		if (frames % 50 === 0) {
			show = !show;
		}
	}
}
loop();
console.log("im in");
