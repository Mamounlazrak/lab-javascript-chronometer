const chronometer = new Chronometer();



// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');



// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();

}

function printMinutes() {
  let time = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.innerHTML = time[0];
  minUniElement.innerHTML = time[1];
  // ... your code goes here
}

function printSeconds() {
  let time = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDecElement.innerHTML = time[0];
  secUniElement.innerHTML = time[1];
  console.log(time);
  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.innerHTML === 'START') {
    btnLeftElement.innerHTML = 'STOP';
    btnLeftElement.classList.toggle('start');
    btnLeftElement.classList.toggle('stop');
    btnRightElement.innerHTML = 'SPLIT';
    btnRightElement.classList.toggle('reset');
    btnRightElement.classList.toggle('split');
    chronometer.start(printTime);

  } else if (btnLeftElement.innerHTML === 'STOP'){
    btnLeftElement.innerHTML = 'START';
    btnLeftElement.classList.toggle('start');
    btnLeftElement.classList.toggle('stop');
    btnRightElement.innerHTML = 'RESET';
    btnRightElement.classList.toggle('reset');
    btnRightElement.classList.toggle('split');
    chronometer.stop();
  }

  // ... your code goes here
});

// Reset/Split Button
 btnRightElement.addEventListener('click', () => {
 
  if (btnRightElement.innerHTML === 'SPLIT') {
    console.log('hey');
    let newTime = document.createElement('li');
    newTime.innerHTML = ` <span id="minDec" class="number">${minDecElement.innerHTML}</span>
    <span id="minUni" class="number">${minUniElement.innerHTML}</span>
    <span>:</span>
    <span id="secDec" class="number">${secDecElement.innerHTML}</span>
    <span id="secUni" class="number">${secUniElement.innerHTML}</span> `
    let parent = document.getElementById('splits');
    parent.appendChild(newTime); 
  } else if (btnRightElement.innerHTML === 'RESET') {
    minDecElement.innerHTML = '0';
    minUniElement.innerHTML = '0';
    secDecElement.innerHTML = '0';
    secUniElement.innerHTML = '0';
    chronometer.currentTime = 0;
    let splitsList = document.getElementById('splits');
    while(splitsList.firstChild) {
      splitsList.removeChild(splitsList.firstChild);
    }
  }

//   // ... your code goes here
});
