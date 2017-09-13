console.log('Loaded!');

//changing the text of the main-text element
var element = document.getElementById('main-text');
element.innerHTML = ('Lololol');

//moving the picture with id madi
var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight () {
  marginLeft = marginLeft + 1;
  img.style.marginLeft = marginLeft + 'px';
}
  img.onclick = function () {
  var interval = setInterval(moveRight, 50);
};
