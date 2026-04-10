import moneyImg from '../img/money.png';

const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const randInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

class Money {
  constructor() {
    this.image = new Image();
    this.image.src = moneyImg;

    this.sizeCof = randInt(1, 5) / 10;

    this.coor = {
      x: randInt(
        this.image.width * this.sizeCof,
        canvas.width - this.image.width * this.sizeCof
      ),
      y: -this.image.height * this.sizeCof,
    };

    this.alpha = 1;
  }

  fall() {}

  draw() {
    ctx.beginPath();
    ctx.save();
    ctx.globalAlpha = this.alpha;
    ctx.drawImage(
      this.image,
      this.coor.x,
      this.coor.y,
      this.image.width * this.sizeCof,
      this.image.height * this.sizeCof
    );
    ctx.closePath();
  }

  update() {
    this.fall();
    this.draw();

    this.alpha -= 0.01;
  }
}

const money = [];

function init() {
  for (let i = 0; i < 20; i++) {
    money.push(new Money());
  }
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  money.forEach((e, index) => {
    if (e.alpha <= 0) {
      money.splice(index, 1);
    } else {
      e.update();
    }
  });
  window.requestAnimationFrame(update);
}
init();
update();

console.log(money);
