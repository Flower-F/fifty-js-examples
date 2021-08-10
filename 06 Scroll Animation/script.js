const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

function checkBoxes() {
    //当元素位于视窗五分之四高度以上时显示
    const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach(box => {
        // 用于获得页面中某个元素的左，上，右和下分别相对浏览器视窗的位置。
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    })
}

checkBoxes();