// Declare Variables related to Canvas element inside seeyoulater.html page / also set its  place to draw inside as (2d)
let smileFace = document.getElementById("smile-face"),
    theContext = smileFace.getContext("2d");

// Main face design - Full Circle as it'S Math.PI * 2.
theContext.beginPath();
theContext.fillStyle = "#41ead4";
theContext.arc(smileFace.width / 2, smileFace.height / 2, 80, 0, Math.PI * 2);
theContext.fill();

// The Mouth inside the face - Half Circle as it's Math.PI
theContext.beginPath();
theContext.fillStyle = "#FFFFFF";
theContext.arc(smileFace.width / 2, (smileFace.height / 2) + 10, 60, 0, Math.PI);
theContext.fill();

// The Right Eye - Full Circle as it's Math.PI * 2
theContext.beginPath();
theContext.fillStyle = "#FFFFFF";
theContext.arc((smileFace.width / 2) + 35, (smileFace.height / 2) - 35, 12, 0, Math.PI * 2);
theContext.fill();

// Pupil inside the Right Eye - Full circle as it's Math.PI * 2
theContext.beginPath();
theContext.fillStyle = "#41ead4";
theContext.arc((smileFace.width / 2) + 35, (smileFace.height / 2) - 35, 3, 0, Math.PI * 2);
theContext.fill();

// The left Eye - Full Circle as it's Math.PI * 2
theContext.beginPath();
theContext.fillStyle = "#FFFFFF";
theContext.arc((smileFace.width / 2) - 35, (smileFace.height / 2) - 35, 12, 0, Math.PI * 2);
theContext.fill();

// Pupil inside the left Eye - Full circle as it's Math.PI * 2
theContext.beginPath();
theContext.fillStyle = "#41ead4";
theContext.arc((smileFace.width / 2) - 35, (smileFace.height / 2) - 35, 3, 0, Math.PI * 2);
theContext.fill();

// The Nose inside the face - Simple Small Line (stroke style) in the mid of the face ( Set the start positions(x,y) Also the Path points (x,y) )
theContext.beginPath();
theContext.moveTo(smileFace.width / 2, smileFace.height / 2);
theContext.lineTo(smileFace.width / 2, (smileFace.height / 2) - 15);
theContext.strokeStyle = "#FFFFFF";
theContext.lineWidth = 3;
theContext.stroke();

/* I set all the methods for (x,y) values in a dynamic way because of media rules inside the CSS file 
that are going to reduce the width and height of the main canvas. */ 