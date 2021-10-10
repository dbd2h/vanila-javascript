const $sayingText = document.querySelector(".momentum-footer__text");
const $sayingTexter = document.querySelector(
  ".momentum-footer__saying-inf>span"
);

const sayingObject = {
  0: ['"You cannot change what you are, only what you do."', "Philip Pullman"],
  1: [
    '"Lay a firm foundation with the bricks that others throw at you."',
    "David Brinkley",
  ],
  2: [
    '"Change the way you look at things and the things you look at change."',
    "Wayne Dyer",
  ],
};
const chooseSaying = Math.floor(
  Math.random() * Object.keys(sayingObject).length
);
$sayingText.innerHTML = sayingObject[chooseSaying][0];
$sayingTexter.innerHTML = sayingObject[chooseSaying][1];
