const secHand = document.querySelector(".second");
const minHand = document.querySelector(".minute");
const hrsHand = document.querySelector(".hour");
const brand = document.querySelector(".brand");

// brand.textContent = brand.textContent
//   .split("")
//   .map((ele) => {
//     return ele === "e" ? ele.toUpperCase() : ele;
//   })
//   .join("");
const banWords = [
  "harami",
  "chutiya",
  "madharchod",
  "kutta",
  "laudu",
  "lauda",
  "land",
  "gandu",
];

const arr = [];
const dateLabel = document.querySelector(".tarikh");
const dayLabel = document.querySelector(".day");

const val = document.querySelector(".clock");

for (let i = 0; i < 60; i++) {
  const html = "<div class ='lines'></div>";
  val.insertAdjacentHTML("afterbegin", html);
}

const line = document.querySelectorAll(".lines");
// console.log(line);
line.forEach((ele, i) => {
  ele.style.transform = `rotate(${6 * (i + 1)}deg)`;
});

// brand.style.animation="brand 2s 1";

const clock = function () {
  const now = new Date();
  const day = now.getDay();
  const date = now.getDate();
  const month = now.getMonth();
  const year = now.getFullYear();
  const dayArray = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  dateLabel.textContent = `${date}.${month + 1}.${year}`;
  dayLabel.textContent = `${dayArray[day]}`;

  const hrs = now.getHours();
  const min = now.getMinutes();
  const sec = now.getSeconds();
  const secDeg = sec * 6;
  const minDeg = min * 6 + sec * (1 / 10);
  const hrsDeg = hrs * 30 + min * (1 / 2);

  if (sec == 0) {
    brand.classList.toggle("animation");
  } else if (sec == 3) {
    brand.classList.toggle("animation");
  }

  secHand.style.transform = `rotate(${secDeg}deg)`;
  minHand.style.transform = `rotate(${minDeg}deg)`;
  hrsHand.style.transform = `rotate(${hrsDeg}deg)`;
};
setInterval(clock, 1000);

const btn = document.querySelector(".btn");
const inputBrand = document.querySelector(".brand-name");
const brandDesc = document.querySelector(".brand-des");

let thatEle;

const ban = function (value) {
  value = value.toLowerCase();
  return banWords.some((ele) => {
    if (value.startsWith(ele) || value.endsWith(ele) || value.includes(ele)) {
      thatEle = ele;
      return true;
    } else return false;
  });
};

btn.addEventListener("click", function (e) {
  e.preventDefault();
  const inputVal = inputBrand.value;

  if (ban(inputVal)) {
    brandDesc.textContent = `Na, Na, Tum ${thatEle}`;
    brandDesc.classList.add("flicker");
    brandDesc.style.color = "red";
  } else {
    brandDesc.classList.remove("flicker");
    brandDesc.textContent = "Put Your Own Brand Name";
    arr.push(inputVal);
    brandDesc.style.color = "black";
    brand.textContent = `${inputVal}`;
  }

  setTimeout(() => {
    brandDesc.classList.remove("flicker");
  }, 3000);
  inputBrand.value = "";
});
