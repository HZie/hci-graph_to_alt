'use strict';

/* Toggle Help */
const helpBtn = document.querySelectorAll('.main__help-btn');
const helpDialog = document.querySelectorAll('.main__help-dialog');
let i = 0;

helpBtn.forEach((b) => {
  b.addEventListener('click', () => {
    helpDialog.forEach((e) => {
      e.classList.toggle('inactive');
    });
    //helpDialog[i++].classList.toggle('inactive');
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

uploadBox.addEventListener('dragend', (e) => {
  console.log('dragend');
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
      '2010????????? 2021????????? ????????? ???????????? ?????? ???????????? ?????? ???????????????. x?????? ?????????, y?????? ???????????? ?????? ????????????. 2014????????? ???????????? ????????? 2018?????? 34??? ?????? ?????? ???????????? ?????????.';
    long =
      '2010????????? 2021????????? ????????? ???????????? ?????? ???????????? ?????? ???????????????. x?????? ????????? ???????????? y?????? ???????????? ?????? ???????????? 0?????? 40????????? ????????????. 2010??? 1?????? ???????????? 2011?????? 4??? ?????? ??????????????? 2012?????? 3?????? ?????? ?????????????????? ??? ??? ?????? ???????????? ????????? ????????? 2018????????? 34??? ?????? ?????? ???????????? ?????????. ??? ??? ?????? ???????????? ????????? ???????????? 2020????????? 21?????? ???????????? ????????? ?????? ?????? 2021????????? ????????? ?????? ???????????????.';
  } else if (title == '02 Daily Card Access.png') {
    short =
      '4?????? ????????? ?????? ????????? ???????????? ????????? ????????? 10?????? ????????????. x?????? 1????????? 10??????????????? y?????? 0????????? 200????????? ????????? ????????? ???????????? ????????????. ????????? 1????????? ?????? 2????????? ????????? 10????????? ????????????.';
    long =
      '4?????? ????????? ?????? ????????? ???????????? ????????? ????????? 10?????? ????????????. x?????? 1????????? 10??????????????? y?????? 0????????? 200????????? ????????? ????????? ???????????? ????????????. ????????? 1????????? 160??? ????????? ?????? ??????????????? 2????????? 100??? ????????? ????????? ???????????? ???????????? ?????? ???????????? ???????????? 5????????? 80???????????? ???????????? ?????? ?????? ???????????? ????????? 10????????? ???????????? ???????????? 10????????? 120??? ????????????.';
  }
}

function deleteFile() {}
