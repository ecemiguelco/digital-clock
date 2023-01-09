function timeCurrent() {
  let today = new Date();
  let hh = today.getHours();
  let mm = today.getMinutes();
  let ss = today.getSeconds() + 1;
  let date = today.getDate();
  let month = today.getMonth();
  let year = today.getFullYear();
  let utcDiff = today.getTimezoneOffset() / 60;

  const hourDisplay = document.querySelector(".hour-container");
  const sess = document.querySelector(".session-container");
  const minsDisplay = document.querySelector(".min-container");
  const secDisplay = document.querySelector(".sec-container");
  const dateDisplay = document.querySelector(".date-container");
  const monthDisplay = document.querySelector(".month-container");
  const yearDisplay = document.querySelector(".year-container");
  const utcDisplay = document.querySelector(".utc-container");

  const milTimeOn = document.querySelector(".mil-time-toggle-on");
  const milTimeOff = document.querySelector(".mil-time-toggle-off");

  milTimeOn.addEventListener("click", militaryTime);
  milTimeOff.addEventListener("click", normTime);

  function normTime() {
    milTimeOn.style.backgroundColor = "white";
    milTimeOff.style.backgroundColor = "yellow";
  }

  function militaryTime() {
    milTimeOn.style.backgroundColor = "yellow";
    milTimeOff.style.backgroundColor = "white";
  }
  if (hh < 12) {
    sess.innerText = "AM";
  } else {
    sess.innerText = "PM";
  }

  if (milTimeOn.style.backgroundColor === "yellow") {
    if (hh < 10) {
      hourDisplay.innerText = "0" + hh;
    } else {
      hourDisplay.innerText = hh;
    }
  } else {
    if (hh < 12) {
      if (hh < 10) {
        hourDisplay.innerText = "0" + hh;
      } else {
        hourDisplay.innerText = hh;
      } 
    }else {
      hourDisplay.innerText = hh - 12;
    }
  }

  if (mm < 10) {
    minsDisplay.innerText = "0" + mm;
  } else {
    minsDisplay.innerText = mm;
  }
  if (ss < 10) {
    secDisplay.innerText = "0" + ss;
  } else {
    secDisplay.innerText = ss;
  }
  if (date < 10) {
    dateDisplay.innerText = "0" + date;
  } else {
    dateDisplay.innerText = date;
  }
  if (month < 10) {
    monthDisplay.innerText = "0" + month;
  } else {
    monthDisplay.innerText = month;
  }

  if (month === 0) {
    monthDisplay.innerText = "Jan";
  } else if (month === 1) {
    monthDisplay.innerText = "Feb";
  } else if (month === 2) {
    monthDisplay.innerText = "Mar";
  } else if (month === 3) {
    monthDisplay.innerText = "Apr";
  } else if (month === 4) {
    monthDisplay.innerText = "May";
  } else if (month === 5) {
    monthDisplay.innerText = "Jun";
  } else if (month === 6) {
    monthDisplay.innerText = "Jul";
  } else if (month === 7) {
    monthDisplay.innerText = "Aug";
  } else if (month === 8) {
    monthDisplay.innerText = "Sep";
  } else if (month === 9) {
    monthDisplay.innerText = "Oct";
  } else if (month === 10) {
    monthDisplay.innerText = "Nov";
  } else {
    monthDisplay.innerText = "Dec";
  }
  yearDisplay.innerText = year;

  let absUtcDiff = Math.abs(Math.trunc(utcDiff));
  let utcDiffStr;
  let utcDiffMins = (Math.abs(utcDiff) - Math.abs(Math.trunc(utcDiff))) * 60;
  let utcDiffMinsStr;

  if (absUtcDiff < 10) {
    utcDiffStr = "0" + absUtcDiff;
  } else {
    utcDiffStr = utcDiff.toString();
  }
  if (utcDiffMins < 10) {
    utcDiffMinsStr = "0" + utcDiffMins;
  } else {
    utcDiffMinsStr = utcDiffMins.toString();
  }
  if (Math.sign(utcDiff) === -1) {
    utcDisplay.innerText = `UTC +${utcDiffStr}:${utcDiffMinsStr}`;
  } else {
    utcDisplay.innerText = `UTC -${utcDiffStr}:${utcDiffMinsStr}`;
  }

  const toggleFont1 = () => {
    const clockTexts = document.querySelectorAll(".clock-display");
    for (const element of clockTexts) {
      element.style.fontFamily = "Merriweather, serif";
    }
  };

  const toggleFont2 = () => {
    const clockTexts = document.querySelectorAll(".clock-display");
    for (const element of clockTexts) {
      element.style.fontFamily = "Major Mono Display, monospace";
    }
  };

  const toggleFont3 = () => {
    const clockTexts = document.querySelectorAll(".clock-display");
    for (const element of clockTexts) {
      element.style.fontFamily = "Fredericka the Great, cursive";
    }
  };

  const font1 = document.querySelector(".font-1");
  font1.addEventListener("click", toggleFont1);

  const font2 = document.querySelector(".font-2");
  font2.addEventListener("click", toggleFont2);

  const font3 = document.querySelector(".font-3");
  font3.addEventListener("click", toggleFont3);

  function toggleColor1() {
    const bgColor = document.getElementsByClassName("clock-display");
    for (const e of bgColor)
      e.classList.add("transparent-gradient", "transparent-gradient-1");
    for (const e of bgColor)
      e.classList.remove("transparent-gradient-3", "transparent-gradient-2");
  }
  function toggleColor2() {
    const bgColor = document.getElementsByClassName("clock-display");
    for (const e of bgColor)
      e.classList.add("transparent-gradient", "transparent-gradient-2");
    for (const e of bgColor)
      e.classList.remove("transparent-gradient-3", "transparent-gradient-1");
  }

  function toggleColor3() {
    const bgColor = document.getElementsByClassName("clock-display");
    for (const e of bgColor) {
      e.classList.add("transparent-gradient", "transparent-gradient-3");
    }
    for (const e of bgColor)
      e.classList.remove("transparent-gradient-1", "transparent-gradient-2");
  }

  document.querySelector(".g-color-1").addEventListener("click", toggleColor1);

  document.querySelector(".g-color-2").addEventListener("click", toggleColor2);

  document.querySelector(".g-color-3").addEventListener("click", toggleColor3);
}

timeCurrent();
setInterval(timeCurrent, 100);
