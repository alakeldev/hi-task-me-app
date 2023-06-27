// Declare Variables related to Canvas element inside seeyoulater.html page / also set its  place to draw inside as (2d)
let smileFace = document.getElementById("smile-face"),
    theContext = smileFace.getContext("2d");

// Choose fill style with color to fill the background Rectangle with color below, and set(X and Y) also set (width and heigh)"Daynamic way".
theContext.fillStyle = "#333333";
theContext.fillRect(0, 0, smileFace.width, smileFace.height);

