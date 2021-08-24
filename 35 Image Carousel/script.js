const imgs = document.getElementById('imgs');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');
const img = document.querySelectorAll('#imgs img');

let index = 1;
let interval = setInterval(run, 2000);

function run() {
    index++;
    changeImage();
}

function changeImage() {
    if (index > img.length - 1) {
        index = img.length - 1;

        imgs.style.transition = 'all, linear, 1s';
        imgs.style.transform = `translateX(${-index * 500}px)`;

        /*
        此处需要使用settimeout的原因：
        页面的修改是异步的 并不是我们在设置了样式 页面马上就会改变 而是会在浏览器下次页面重绘的时候才修改
        */
        setTimeout(function () {
            index = 1;
            imgs.style.transition = ''; //取消过渡
            imgs.style.transform = `translateX(${-500}px)`;
        }, 0);
    } else if (index < 0) {
        index = 0;

        imgs.style.transition = 'all, linear, 1s';
        imgs.style.transform = `translateX(${-index * 500}px)`;

        setTimeout(function () {
            index = img.length - 2;
            imgs.style.transition = '';
            imgs.style.transform = `translateX(${-index * 500}px)`;
        }, 0);
    } else {
        imgs.style.transition = 'all, linear, 1s';
        imgs.style.transform = `translateX(${-index * 500}px)`;
    }
}

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(run, 2000);
}

rightBtn.addEventListener('click', () => {
    index++;
    changeImage();
    resetInterval();
})

leftBtn.addEventListener('click', () => {
    index--;
    changeImage();
    resetInterval();
})