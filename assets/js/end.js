// Declare Variables related to Canvas element inside seeyoulater.html page / also set its  place to draw inside as (2d)
let smileFace = document.getElementById("smile-face"),
    theContext = smileFace.getContext("2d");

// Choose fill style with color to fill the background Rectangle with color below, and set(X and Y) also set (width and heigh)"Daynamic way".
theContext.fillStyle = "#333333";
theContext.fillRect(0, 0, smileFace.width, smileFace.height);

// Main yellow face design - Full Circle as it'S Math.PI * 2.
theContext.beginPath();
theContext.fillStyle = "#FFEA00";
theContext.arc(smileFace.width / 2, smileFace.height / 2, 80, 0, Math.PI * 2);
theContext.fill()

// The Mouth inside the yellow face - Half Circle as it's Math.PI
theContext.beginPath();
theContext.fillStyle = "#FFFFFF";
theContext.arc(smileFace.width / 2, smileFace.height / 2, 60, 0, Math.PI);
theContext.fill();

