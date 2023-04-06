const hoursDiv = document.getElementById('hours');
const minutesDiv = document.getElementById('minutes');
const secondsDiv = document.getElementById('seconds');

function displayHours() {
  hoursDiv.innerHTML = "";
  let p = document.createElement('p');
  p.innerHTML = leadingZero(new Date().getHours());
  p.classList.add("numbers");
  hoursDiv.append(p);
}

function displayMinutes() {
  minutesDiv.innerHTML = "";
  let p = document.createElement('p');
  p.innerHTML = leadingZero(new Date().getMinutes());
  p.classList.add("numbers");
  minutesDiv.append(p);
}

function displaySeconds() {
  secondsDiv.innerHTML = "";
  let p = document.createElement('p');
  p.innerHTML = leadingZero(new Date().getSeconds());
  p.classList.add("numbers");
  secondsDiv.append(p);
}

displayHours();
displayMinutes();
displaySeconds();

setInterval(displayHours, 1000);
setInterval(displayMinutes, 1000);
setInterval(displaySeconds, 1000);

function leadingZero(number) {
  let numberToString = String(number);
  if (numberToString.length < 2) {
    return 0 + numberToString;
  }

  return numberToString;
}