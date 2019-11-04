// var backgroundcolor;
// var lineColor;
// var points = 100;
// var degrees = 93;
// var lineColor = "orange";

// var backgroundcolor = document.getElementById('backgroundcolor').value;
// var lineColor = document.getElementById('lineColor').value;
// var points = document.getElementById('points').value;
// var degrees = document.getElementById('degrees').value;

function run() {

    var backgroundcolor = document.getElementById("backgroundcolor").value;
    var lineColor = document.getElementById("lineColor").value;
    var points = document.getElementById("points").value;
    var degrees = document.getElementById("degrees").value;
    document.getElementById("mycanvas").style.background = backgroundcolor;
    // document.getElementById("jumbotron").style.background = backgroundcolor;
    // document.getElementById("btn1").style.background = backgroundcolor;
    // document.getElementById("btn2").style.background = backgroundcolor;
    // console.log(backgroundcolor);
    // console.log(lineColor);
    // console.log(points);
    // console.log(degrees);


    var canvas = document.getElementById("mycanvas");
    var draw = canvas.getContext("2d");
    draw.beginPath();
    draw.strokeStyle = lineColor;
    draw.lineWidth = 1;
    draw.moveTo(425, 25);
    xCoordinates = []
    yCoordinates = []
    currentRadian = 0;
    var radianIncrement = degrees * (Math.PI / 180)
    // console.log(radianIncrement)
    var i = 0;
    var testX = [
        400,
        365.1377029,
        469.4592711,
        296.472382,
        536.8080573,
        230.9526953,
        600,
        170.5694255,
        657.1150439,
        117.1572875,
        706.4177772,
        72.33918228,
        746.4101615,
        37.47688519,
        775.8770483,
        13.62966948,
        793.9231012,
        1.522120763,
        800,
        1.522120763,
        793.9231012,
        13.62966948,
        775.8770483,
        37.47688519,
        746.4101615,
        72.33918228,
        706.4177772,
        117.1572875,
        657.1150439,
        170.5694255,
        600,
        230.9526953,
        536.8080573,
        296.472382,
        469.4592711,
        365.1377029,
        400,
        434.8622971,
        330.5407289,
        503.527618,
        263.1919427,
        569.0473047,
        200,
        629.4305745,
        142.8849561,
        682.8427125,
        93.58222275,
        727.6608177,
        53.58983849,
        762.5231148,
        24.12295169,
        786.3703305,
        6.076898795,
        798.4778792,
        0,
        798.4778792,
        6.076898795,
        786.3703305,
        24.12295169,
        762.5231148,
        53.58983849,
        727.6608177,
        93.58222275,
        682.8427125,
        142.8849561,
        629.4305745,
        200,
        569.0473047,
        263.1919427,
        503.527618,
        330.5407289,
        434.8622971,
        400,
        365.1377029,
        469.4592711,
        296.472382,
        536.8080573,
        230.9526953,
        600,
        170.5694255,
        657.1150439,
        117.1572875,
        706.4177772,
        72.33918228,
        746.4101615,
        37.47688519,
        775.8770483,
        13.62966948,
        793.9231012,
        1.522120763,
        800,
        1.522120763,
        793.9231012,
        13.62966948,
        775.8770483,
        37.47688519,
        746.4101615,
        72.33918228,
        706.4177772,
        117.1572875
    ];

    var testY = [
        0,
        798.4778792,
        6.076898795,
        786.3703305,
        24.12295169,
        762.5231148,
        53.58983849,
        727.6608177,
        93.58222275,
        682.8427125,
        142.8849561,
        629.4305745,
        200,
        569.0473047,
        263.1919427,
        503.527618,
        330.5407289,
        434.8622971,
        400,
        365.1377029,
        469.4592711,
        296.472382,
        536.8080573,
        230.9526953,
        600,
        170.5694255,
        657.1150439,
        117.1572875,
        706.4177772,
        72.33918228,
        746.4101615,
        37.47688519,
        775.8770483,
        13.62966948,
        793.9231012,
        1.522120763,
        800,
        1.522120763,
        793.9231012,
        13.62966948,
        775.8770483,
        37.47688519,
        746.4101615,
        72.33918228,
        706.4177772,
        117.1572875,
        657.1150439,
        170.5694255,
        600,
        230.9526953,
        536.8080573,
        296.472382,
        469.4592711,
        365.1377029,
        400,
        434.8622971,
        330.5407289,
        503.527618,
        263.1919427,
        569.0473047,
        200,
        629.4305745,
        142.8849561,
        682.8427125,
        93.58222275,
        727.6608177,
        53.58983849,
        762.5231148,
        24.12295169,
        786.3703305,
        6.076898795,
        798.4778792,
        0,
        798.4778792,
        6.076898795,
        786.3703305,
        24.12295169,
        762.5231148,
        53.58983849,
        727.6608177,
        93.58222275,
        682.8427125,
        142.8849561,
        629.4305745,
        200,
        569.0473047,
        263.1919427,
        503.527618,
        330.5407289,
        434.8622971,
        400,
        365.1377029,
        469.4592711,
        296.472382,
        536.8080573,
        230.9526953,
        600,
        170.5694255,
        657.1150439,
        117.1572875
    ];
    // ----------
    // create array
    // ----------
    for (i = 0; i < points; i++) {
        console.log('number of loops');
        angleX = Math.sin(currentRadian);
        angleY = Math.cos(currentRadian);
        lengthX = angleX * 400;
        lengthY = angleY * -400;
        positionX = lengthX + 425;
        positionY = lengthY + 425;
        xCoordinates.push(positionX);
        yCoordinates.push(positionY);

        currentRadian = currentRadian + radianIncrement;
    }
    // console.log(xCoordinates);
    // console.log(yCoordinates);


    // ----------
    // draw spyrogrph
    // ----------

    for (i = 0; i < points; i++) {
        
        //   console.log('looping the draw');
        //   console.log(xCoordinates[i], yCoordinates[i]);
        draw.lineTo(xCoordinates[i], yCoordinates[i]);
    }

    console.log(testX[0], testY[0]);


    draw.stroke();

}

function spyroClear() {
    console.log('clear function called');
    var canvas = document.getElementById("mycanvas");
    var draw = canvas.getContext("2d");
    draw.clearRect(0, 0, canvas.width, canvas.height);
}

