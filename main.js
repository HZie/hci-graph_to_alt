'use strict';

/* Toggle Help */
const helpBtn = document.querySelectorAll('.main__help-btn');
const helpDialog = document.querySelectorAll('.main__help-dialog');
let i = 0;

helpBtn.forEach((b) => {
  b.addEventListener('click', () => {
    helpDialog[i++].classList.toggle('inactive');
  });
});

/* Upload Graph */
const uploadBtn = document.querySelector('.main__upload-btn');
const titleSpan = document.querySelectorAll('.selected-file');

const uploadScreen = document.querySelector('.main-upload');
const selectScreen = document.querySelector('.main-select');
const generateScreen = document.querySelector('.main-generated');

/* Generate Description */
let long = '',
  short = '';
let title = '';

uploadBtn.addEventListener('click', () => {
  let input = document.createElement('input');
  input.type = 'file';
  input.onchange = () => {
    uploadFile(input.files[0]);
  };
  input.click();
});

const uploadBox = document.querySelector('.main-upload');
uploadBox.addEventListener('dragover', (e) => {
  e.preventDefault();
  console.log('dragover');
  uploadBox.style.backgroundColor = 'lightgrey';
});

uploadBox.addEventListener('dragleave', (e) => {
  console.log('dragleave');
  uploadBox.style.backgroundColor = 'white';
});

uploadBox.addEventListener('drop', (e) => {
  e.preventDefault();
  console.log(e);

  let data = e.dataTransfer.files[0];
  uploadFile(data);
});

/* select length */

const selectShort = document.querySelector('.select-short');
const generatedTxt = document.querySelector('.generated-span');

selectShort.addEventListener('click', () => {
  generatedTxt.textContent = `short: ${short}`;
  selectScreen.classList.toggle('inactive');
  generateScreen.classList.toggle('inactive');
});

const selectBoth = document.querySelector('.select-both');

selectBoth.addEventListener('click', () => {
  generatedTxt.textContent = `short: ${short}\n long: ${long}`;
  selectScreen.classList.toggle('inactive');
  generateScreen.classList.toggle('inactive');
});

const selectLong = document.querySelector('.select-long');

selectLong.addEventListener('click', () => {
  generatedTxt.textContent = `long: ${long}`;
  selectScreen.classList.toggle('inactive');
  generateScreen.classList.toggle('inactive');
});

/* Copy Txt */
const copyTxt = document.querySelector('.generated-copy');

copyTxt.addEventListener('click', () => {
  console.log(generatedTxt.textContent);
  window.navigator.clipboard.writeText(generatedTxt.textContent);
});

/* start over */
const startOverBtn = document.querySelector('.main-select__startover');
startOverBtn.addEventListener('click', () => {
  generateScreen.classList.toggle('inactive');
  uploadScreen.classList.toggle('inactive');
});

/* delete file */
const deleteBtn = document.querySelectorAll('.main-select__file-delete');

deleteBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    title = '';
    uploadScreen.classList.toggle('inactive');
    if (!selectScreen.classList.contains('inactive')) {
      selectScreen.classList.toggle('inactive');
    } else {
      generateScreen.classList.toggle('inactive');
    }
  });
});

function uploadFile(data) {
  titleSpan.forEach((item) => {
    item.textContent = data.name;
  });
  title = data.name;
  uploadScreen.classList.toggle('inactive');
  selectScreen.classList.toggle('inactive');
  generateTxt();
}

function generateTxt() {
  if (title == '01 Year of Publication.png') {
    short =
      '2010년부터 2021년까지 출판된 출판물의 수를 나타내는 막대 그래프이다. x축은 연도를, y축은 출판물의 수를 나타낸다. 2014년부터 상승세를 보이며 2018년에 34로 가장 많은 출판수를 보였다.';
    long =
      '2010년부터 2021년까지 출판된 출판물의 수를 나타내는 막대 그래프이다. x축은 연도를 나타내고 y축은 출판물의 수를 나타내며 0부터 40까지를 나타낸다. 2010년 1부를 시작으로 2011년에 4로 잠시 상승했으며 2012년에 3으로 소폭 하강하였지만 그 후 계속 상승하는 추세를 보이며 2018년까지 34의 가장 많은 출판수를 보였다. 그 후 계속 하강하는 추세를 유지하여 2020년에는 21부로 극솟값을 가졌고 이후 조금 2021년에는 이보다 소폭 상승하였다.';
  } else if (title == '02 Daily Card Access.png') {
    short =
      '4개의 그룹이 매일 카드에 접근하는 횟수의 평균을 10일간 나타냈다. x축은 1일부터 10일까지이며 y축은 0번부터 200번까지 하루에 카드에 접근하는 횟수이다. 횟수는 1일에서 높고 2일부터 낮아져 10일까지 유지된다.';
    long =
      '4개의 그룹이 매일 카드에 접근하는 횟수의 평균을 10일간 나타냈다. x축은 1일부터 10일까지이며 y축은 0번부터 200번까지 하루에 카드에 접근하는 횟수이다. 횟수는 1일에서 160회 정도로 높게 시작하지만 2일부터 100회 정도로 급격히 낮아지며 이후에도 낮은 경향성을 유지하여 5일에는 80회정도로 최저이고 이후 조금 상승하는 추세로 10일까지 유지되며 마지막인 10일에는 120회 정도이다.';
  }
}

function deleteFile() {}
