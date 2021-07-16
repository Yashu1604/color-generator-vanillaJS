let mainColors = "#ffffff";
let altColors = "#000000";
let red = "#ff0000";
let green = "#00ff00";
let blue = "#0000ff";

const generateColor = (pos) => {
  let col = [];
  let temp = Math.floor(Math.random() * 256);
  for (let i = 0; i < 3; i++) {
    if (i === pos) {
      col.push(temp);
    } else if (i < 3) {
      col.push(Math.floor(Math.random() * temp));
    } else {
      col.push(Math.floor(Math.random() * 256));
    }
  }
  let rcol = col.map((value) => 255 - value);
  mainColors = conToString(col);
  altColors = conToString(rcol);
  red = "#" + mainColors.slice(1, 3) + "0000";
  green = "#00" + mainColors.slice(3, 5) + "00";
  blue = "#0000" + mainColors.slice(5);
};

const conToString = (arr) => {
  let colArr = arr.map((element) => {
    let temp = element.toString(16);
    temp = temp.length === 1 ? "0" + temp : temp;
    return temp;
  });
  let colString =
    "#" +
    colArr.reduce((val1, val2) => {
      return val1 + val2;
    });
  return colString;
};

const changeColor = (val) => {
  generateColor(val);
  document.querySelector(".col-box").style.backgroundColor = mainColors;
  document.querySelector(".col-red").style.backgroundColor = red;
  document.querySelector(".col-green").style.backgroundColor = green;
  document.querySelector(".col-blue").style.backgroundColor = blue;
  document.querySelector("body").style.backgroundColor = altColors;
  document.querySelector(".col-box-col").textContent = mainColors;
  document.querySelector(".col-box-col").style.color = altColors;
  document.querySelector(".col-box-red").textContent = red;
  document.querySelector(".col-box-red").style.color = "white";
  document.querySelector(".col-box-green").textContent = green;
  document.querySelector(".col-box-green").style.color = "white";
  document.querySelector(".col-box-blue").textContent = blue;
  document.querySelector(".col-box-blue").style.color = "white";
  document.querySelector(".col-name-indicatorr").style.color = mainColors;
  document.querySelector(".col-name-indicatorg").style.color = mainColors;
  document.querySelector(".col-name-indicatorb").style.color = mainColors;
  // document.querySelector(".col-box").style.borderLeftColor = red;
  // document.querySelector(".col-box").style.borderTopColor = green;
  // document.querySelector(".col-box").style.borderRightColor = blue;

  console.log(blue);
};
document.querySelector(".click-button").addEventListener("click", function () {
  changeColor();
});

document.querySelector(".click-red").addEventListener("click", function () {
  changeColor(0);
});

document.querySelector(".click-green").addEventListener("click", function () {
  changeColor(1);
});

document.querySelector(".click-blue").addEventListener("click", function () {
  changeColor(2);
});

document.querySelector(".col-box").addEventListener("click", function () {
  //let copyText = document.getElementById("hashval").innerText;
  let copyText = mainColors;
  copyValues(copyText);
  // document.clipboard.writeText(copyText);
});
// document.querySelector(".entire-body").addEventListener("click", function () {
//   let copyText = altColors;
//   copyValues(copyText);
// });

document.querySelector(".col-red").addEventListener("click", function () {
  let copyText = red;
  copyValues(copyText);
});
document.querySelector(".col-green").addEventListener("click", function () {
  let copyText = green;
  copyValues(copyText);
});
document.querySelector(".col-blue").addEventListener("click", function () {
  let copyText = blue;
  copyValues(copyText);
});

const copyValues = (val) => {
  let newElement = document.createElement("input");
  newElement.setAttribute("value", val);
  document.body.appendChild(newElement);
  newElement.select();
  document.execCommand("copy");
  newElement.parentNode.removeChild(newElement);
};

// document
//   .querySelector(".hover-color")
//   .addEventListener("mouseover", function () {
//     document.querySelector(
//       ".hover-color"
//     ).style.backgroundColor = document.querySelector(
//       ".col-box"
//     ).style.backgroundColor;
//   });

// document
//   .querySelector(".hover-color")
//   .addEventListener("mouseout", function () {
//     document.querySelector(".hover-color").style.backgroundColor = "white";
//   });
