console.log('Loaded!');

//changing the text of the main-text element
var element = document.getElementById('main-text');
element.innerHTML = ('Lololol');

//moving the picture with id madi
function moveRight () {
  var marginLeft = 0;
  marginLeft = marginLeft + 10;
  img.style.marginLeft = marginLeft + 'px';
};

var img = document.getElementById('madi');
img.onclick = function() {
  var interval = setInterval(moveRight, 100);
};
