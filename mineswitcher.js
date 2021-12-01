var TIME_PER_FRAME = 33;
var CANVAS_HEIGHT = 700;

var canvas;
var ctx;

$(document).ready(function() {
	// Initialize canvas and context
	canvas = $("#puzzleCanvas");
	ctx = canvas[0].getContext("2d");
	setCanvasWidth();
	canvas[0].height = CANVAS_HEIGHT;

	// Create event handlers
	$(window).on("resize", setCanvasWidth);
	canvas.on("mousedown", onDown);
	canvas.on("mouseup", onUp);
	
	// Start loop
	loop = setInterval(update, TIME_PER_FRAME);
});

function onDown(e) {
}

function onUp(e) {
}

function update() {
	clear();
	ctx.strokeRect(0, 0, canvasWidth, CANVAS_HEIGHT);
}

function clear() {
	var oldFill = ctx.fillStyle;
	ctx.fillStyle = "white";
	ctx.fillRect(0, 0, canvasWidth, CANVAS_HEIGHT);
	ctx.fillStyle = oldFill;
}

function setCanvasWidth() {
	canvasWidth = $("#canvasWidth").width();
	canvas[0].width = canvasWidth;
};

function getXClick(e) {
	return e.pageX - canvas.offset().left + canvas.scrollLeft();
}

function getYClick(e) {
	return e.pageY - canvas.offset().top + canvas.scrollTop();
}