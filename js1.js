var markArt = document.getElementById("markArt");
var Articulos = document.getElementById("Articulos");
var ps1 = document.getElementById("ps1");

ps1.addEventListener("mouseover", function(){
    Articulos.style.display = "block";
    markArt.style.display = "block";
    ps1.style.color = "#f7d336";

})

ps1.addEventListener("mouseout", function () {
  Articulos.style.display = "none";
  markArt.style.display = "none";
  ps1.style.color = "white";
});

markArt.addEventListener("mouseover", function () {
  Articulos.style.display = "block";
  markArt.style.display = "block";
  ps1.style.color = "#f7d336";
});

markArt.addEventListener("mouseout", function () {
  Articulos.style.display = "none";
  markArt.style.display = "none";
  ps1.style.color = "white";
});

Articulos.addEventListener("mouseover", function () {
  Articulos.style.display = "block";
  markArt.style.display = "block";
  ps1.style.color = "#f7d336";
});

Articulos.addEventListener("mouseout", function () {
  Articulos.style.display = "none";
  markArt.style.display = "none";
  ps1.style.color = "white";
});

var Divulgacion = document.getElementById("Divulgacion");
var markArt2 = document.getElementById("markArt2");
var ps2 = document.getElementById("ps2");

ps2.addEventListener("mouseover", function () {
  Divulgacion.style.display = "block";
  markArt2.style.display = "block";
  ps2.style.color = "#f7d336";
});

ps2.addEventListener("mouseout", function () {
  Divulgacion.style.display = "none";
  markArt2.style.display = "none";
  ps2.style.color = "white";
});

markArt2.addEventListener("mouseover", function () {
  Divulgacion.style.display = "block";
  markArt2.style.display = "block";
  ps2.style.color = "#f7d336";
});

markArt2.addEventListener("mouseout", function () {
  Divulgacion.style.display = "none";
  markArt2.style.display = "none";
  ps2.style.color = "white";
});

Divulgacion.addEventListener("mouseover", function () {
  Divulgacion.style.display = "block";
  markArt2.style.display = "block";
  ps2.style.color = "#f7d336";
});

Divulgacion.addEventListener("mouseout", function () {
  Divulgacion.style.display = "none";
  markArt2.style.display = "none";
  ps2.style.color = "white";
});


//______________________________________________________________________

var tradImgY = document.getElementById("tradImgY");
var tradImgB = document.getElementById("tradImgB");
var AirImgY = document.getElementById("AirImgY");
var AirImgB = document.getElementById("AirImgB");
var art2 = document.getElementById("art2");
var art3 = document.getElementById("art3");


art2.addEventListener("mouseover", function(){
  tradImgB.style.display = "block";
  tradImgY.style.display = "none";
})

art2.addEventListener("mouseout", function () {
  tradImgB.style.display = "none";
  tradImgY.style.display = "block";
});

art3.addEventListener("mouseover", function () {
  AirImgB.style.display = "block";
  AirImgY.style.display = "none";
});

art3.addEventListener("mouseout", function () {
  AirImgB.style.display = "none";
  AirImgY.style.display = "block";
});
