console.log('Loaded!');

//changing the text of the main-text element
var element = document.getElementById('main-text');
element.innerHTML = ('Lololol');

//moving the picture with id madi
var img = document.getElementById('img');
img.onclick = function() {
  img.style.marginLeft = '100px';
};
