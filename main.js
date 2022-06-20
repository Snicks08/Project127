var song1 = ""
var song2 = ""

function preload() {
    song1 = loadSound("8d82b5_Star_Wars_The_Imperial_March_Theme_Song (1).mp3");
    song2 = loadSound("8d82b5_Star_Wars_Cantina_Theme_Song.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    canvas.position(650, 300)

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 500);
}

function play() {
    song1.play();
}