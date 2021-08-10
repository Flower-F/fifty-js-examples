const loadingText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;

let interval = setInterval(blurring, 30);

//数值转换
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}

function blurring() {
    load++;
    if (load > 99) {
        clearInterval(interval);
    }
    loadingText.innerText = `${load}%`;
    //因为是从模糊变清晰，所以后面两个参数是先大后小
    loadingText.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}