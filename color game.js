var X = Math.floor(Math.random() * 255 + 1);
var Y = Math.floor(Math.random() * 255 + 1);
var Z = Math.floor(Math.random() * 255 + 1);
var firstBoxColorX = Math.floor(Math.random() * 255 + 1);
var firstBoxColorY = Math.floor(Math.random() * 255 + 1);
var firstBoxColorZ = Math.floor(Math.random() * 255 + 1);
var secondBoxColorX = Math.floor(Math.random() * 255 + 1);
var secondBoxColorY = Math.floor(Math.random() * 255 + 1);
var secondBoxColorZ = Math.floor(Math.random() * 255 + 1);
var thirdBoxColorX = Math.floor(Math.random() * 255 + 1);
var thirdBoxColorY = Math.floor(Math.random() * 255 + 1);
var thirdBoxColorZ = Math.floor(Math.random() * 255 + 1);
var fourthBoxColorX = Math.floor(Math.random() * 255 + 1);
var fourthBoxColorY = Math.floor(Math.random() * 255 + 1);
var fourthBoxColorZ = Math.floor(Math.random() * 255 + 1);
var fifthBoxColorX = Math.floor(Math.random() * 255 + 1);
var fifthBoxColorY = Math.floor(Math.random() * 255 + 1);
var fifthBoxColorZ = Math.floor(Math.random() * 255 + 1);
var sixthBoxColorX = Math.floor(Math.random() * 255 + 1);
var sixthBoxColorY = Math.floor(Math.random() * 255 + 1);
var sixthBoxColorZ = Math.floor(Math.random() * 255 + 1);
var firstBox = document.getElementById("first-box");
var secondBox = document.getElementById("second-box");
var thirdBox = document.getElementById("third-box");
var fourthBox = document.getElementById("fourth-box"); 
var fifthBox = document.getElementById("fifth-box");
var sixthBox = document.getElementById("sixth-box");
var headerBgColor = document.getElementById("header");
var colorContainer = document.getElementById("color-container");
var colorName = document.getElementById("color-name");
var title= document.getElementById("name");
var body=document.getElementById("body");
var color = "rgb(" + X + ", " + Y + ", " + Z + ")";
var list = [firstBox, secondBox, thirdBox, fourthBox, fifthBox, sixthBox];
var listRandom = Math.floor(Math.random() * 6);
var colorFirstBox = "rgb(" + firstBoxColorX + ", " + firstBoxColorY + ", " + firstBoxColorZ + ")";
var colorSecondBox = "rgb(" + secondBoxColorX + ", " + secondBoxColorY + ", " + secondBoxColorZ + ")";
var colorThirdBox = "rgb(" + thirdBoxColorX + ", " + thirdBoxColorY + ", " + thirdBoxColorZ + ")";
var colorFourthBox = "rgb(" + fourthBoxColorX + ", " + fourthBoxColorY + ", " + fourthBoxColorZ + ")";
var colorFifthBox = "rgb(" + fifthBoxColorX + ", " + fifthBoxColorY + ", " + fifthBoxColorZ + ")";
var colorSixthBox = "rgb(" + sixthBoxColorX + ", " + sixthBoxColorY + ", " + sixthBoxColorZ + ")";
colorName.innerHTML = "RGB(" + X + ", " + Y + ", " + Z + ")"
var allBox = document.querySelectorAll(".boxx");

if (listRandom == 0) {
    firstBox.style.backgroundColor = color;
} else {
    firstBox.style.backgroundColor = colorFirstBox
}
if (listRandom == 1) {
    secondBox.style.backgroundColor = color;
} else {
    secondBox.style.backgroundColor = colorSecondBox;
}
if (listRandom == 2) {
    thirdBox.style.backgroundColor = color;
} else {
    thirdBox.style.backgroundColor = colorThirdBox;
}
if (listRandom == 3) {
    fourthBox.style.backgroundColor = color;
} else {
    fourthBox.style.backgroundColor = colorFourthBox;
}
if (listRandom == 4) {
    fifthBox.style.backgroundColor = color;
} else {
    fifthBox.style.backgroundColor = colorFifthBox;
}
if (listRandom == 5) {
    sixthBox.style.backgroundColor = color;
} else {
    sixthBox.style.backgroundColor = colorSixthBox;
}

for (var i = 0; i <= allBox.length; i++);


allBox[0].addEventListener("click", function () {

    if (allBox[0].style.backgroundColor == color) {
        headerBgColor.style.backgroundColor = color;
        colorContainer.style.backgroundColor = color;
        body.style.backgroundColor = color;
        title.innerHTML="WINNER 🌟🎉🎈✔"

    } else {
        allBox[0].style.visibility = "hidden"
    }

})

allBox[1].addEventListener("click", function () {

    if (allBox[1].style.backgroundColor == color) {
        headerBgColor.style.backgroundColor = color;
        colorContainer.style.backgroundColor = color;
        body.style.backgroundColor = color;
        title.innerHTML="WINNER 🌟🎉🎈✔"
    } else {
        allBox[1].style.visibility = "hidden"
    }

})

allBox[2].addEventListener("click", function () {

    if (allBox[2].style.backgroundColor == color) {
        headerBgColor.style.backgroundColor = color;
        colorContainer.style.backgroundColor = color;
        body.style.backgroundColor = color;
        title.innerHTML="WINNER 🌟🎉🎈✔"
    } else {
        allBox[2].style.visibility = "hidden"
    }

})

allBox[3].addEventListener("click", function () {

    if (allBox[3].style.backgroundColor == color) {
        headerBgColor.style.backgroundColor = color;
        colorContainer.style.backgroundColor = color;
        body.style.backgroundColor = color;
        title.innerHTML="WINNER 🌟🎉🎈✔"
    } else {
        allBox[3].style.visibility = "hidden"
    }

})

allBox[4].addEventListener("click", function () {

    if (allBox[4].style.backgroundColor == color) {
        headerBgColor.style.backgroundColor = color;
        colorContainer.style.backgroundColor = color;
        body.style.backgroundColor = color;
        title.innerHTML="WINNER 🌟🎉🎈✔"
    } else {
        allBox[4].style.visibility = "hidden"
    }

})

allBox[5].addEventListener("click", function () {

    if (allBox[5].style.backgroundColor == color) {
        headerBgColor.style.backgroundColor = color;
        colorContainer.style.backgroundColor = color;
        body.style.backgroundColor = color;
        title.innerHTML="WINNER 🌟🎉🎈✔"
    } else {
        allBox[5].style.visibility = "hidden";
    }

})


