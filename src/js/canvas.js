(function () {
  const canvas = document.querySelector('.galery__ctx');
  const ctx = canvas.getContext('2d');
  let left = 0;
  let right = 0;
  canvas.height = 80;
  canvas.width = 55;
  window.addEventListener('load', loadAnimation);

  class mydraw {
    constructor(x, y, w, h, left, right) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.left = left;
      this.right = right;
    }

    drawCtx() {
      ctx.fillStyle = 'rgb(0, 255, 17)';
      ctx.fillRect(this.x, this.y, this.w, this.h);
    }

    animation() {
      this.w -= this.left;
      this.w += this.right;
      this.drawCtx()
    }
  }

  let numbers = [];
  let arrayNum = [];
  const arrayElement = [];

  for (let num = 1; num <= 80; num++) {
    numbers.push(num);
  }

  let totalNumbers = numbers.filter((numero) => numero % 2 == 0);
  totalNumbers.forEach(x => {
    arrayNum.push((Math.random() * 0.5) + 0.05);
    arrayElement.push(new mydraw(0, x, 40, 1, left, right));
  })

  function IteracionDraw() {
    requestAnimationFrame(IteracionDraw);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    arrayElement.forEach(item => item.animation());
  }

  function lineAnimation() {
    interval = setInterval(function () {
      let max = Math.floor((Math.random() * (20 - 10)) + 10);
      arrayElement.forEach((item, index) => {
        if (max >= item.w) {
          item.left = 0;
          item.right = arrayNum[index];
        }else if (item.w >= 35) {
          item.right = 0;
          item.left = arrayNum[index];
        }
      });
    }, 500)
  }

  function loadAnimation() {
    IteracionDraw();
    lineAnimation()
  }
}())