//Load pictures from resources folder
//Only supports browsers with HTML5

const RESOURCE_DIR = 'res/';

function loadPictures() {
  //Hardcoded pictures because we're only doing this client-side
  var pictures = [
    'Creepy Pillow.png',
    'Dumplings.png',
    'Happy Holidays 2015.png',
    'Lets Play Squirtle.png',
    'Lone Pistachio.png',
    'Nerd.png',
    'Noodle Soup.png',
    'pizza.png',
    'Poked Hamster.png',
    'Poking Cat.png',
    'Screw You Dog.png'
  ];

  //Get DOM elements
  var template = document.querySelector('#photoSquare');
  var imgEl = template.content.querySelector('.img-photo');

  var photosContainerEl = document.querySelector('#photoContainer');

  for(var i = 0; i < pictures.length; i++) {
    var picture = pictures[i];

    //Load pictures by specifying source
    imgEl.src = RESOURCE_DIR + picture;

    //Clone template and insert into DOM
    var clone = document.importNode(template.content, true);
    photosContainerEl.appendChild(clone);

    var imgContainerEl = document.querySelectorAll('.img-container')[i];
    imgContainerEl.addEventListener('click', expandPicture.bind(this, picture));
  }
}

function expandPicture(picture) {
  var dialogEl = document.querySelector('#pictureModal');

  var imgEl = dialogEl.querySelector('.img-full');
  imgEl.src = RESOURCE_DIR + picture;

  var btnEl = dialogEl.querySelector('.btn');
  btnEl.addEventListener('click', close);

  dialogEl.showModal();
}

function close() {
  document.querySelector('#pictureModal').close();
}