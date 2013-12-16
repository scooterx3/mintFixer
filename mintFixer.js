console.log("mintFixer.js is in the green");


function isReady() {
if (document.getElementById('module-alert')) start();
else setTimeout(isReady,200);
}

function start() {

mydiv = document.getElementById('module-alert');
mydiv.parentElement.removeChild(mydiv);
mydiv = document.getElementById('module-advice');
mydiv.parentElement.removeChild(mydiv);
console.log("mintFixer.js is done and needs a raise");
	

}


isReady();
