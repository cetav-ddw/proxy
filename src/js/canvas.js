(function lines() {
  const canvas = document.querySelector('.galery__ctx');
  const ctx = canvas.getContext('2d');
  const left = 0;
  const right = 0;
  canvas.height = 80;
  canvas.width = 55;

  class MyDraw {
    constructor(x, y, w, h, leftDraw, rightDraw) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.left = leftDraw;
      this.right = rightDraw;
    }

    drawCtx() {
      ctx.fillStyle = 'rgb(0, 255, 17)';
      ctx.fillRect(this.x, this.y, this.w, this.h);
    }

    animation() {
      this.w -= this.left;
      this.w += this.right;
      this.drawCtx();
    }
  }

  const numbers = [];
  const arrayNum = [];
  const arrayElement = [];

  // eslint-disable-next-line no-plusplus
  for (let num = 1; num <= 80; num++) {
    numbers.push(num);
  }

  const totalNumbers = numbers.filter(numero => numero % 2 === 0);
  totalNumbers.forEach((x) => {
    arrayNum.push((Math.random() * 0.5) + 0.05);
    arrayElement.push(new MyDraw(0, x, 40, 1, left, right));
  });

  function IteracionDraw() {
    requestAnimationFrame(IteracionDraw);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    arrayElement.forEach(item => item.animation());
  }

  function lineAnimation() {
    setInterval(() => {
      const max = Math.floor((Math.random() * (20 - 10)) + 10);
      arrayElement.forEach((items, index) => {
        const item = items;
        if (max >= item.w) {
          item.left = 0;
          item.right = arrayNum[index];
        } else if (item.w >= 35) {
          item.right = 0;
          item.left = arrayNum[index];
        }
      });
    }, 500);
  }

  function loadAnimation() {
    IteracionDraw();
    lineAnimation();
  }
  window.addEventListener('load', loadAnimation);
}());
