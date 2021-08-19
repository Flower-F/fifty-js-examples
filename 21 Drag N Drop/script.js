const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

// 1、被拖对象：dragstart事件，被拖动的元素，开始拖放触发
// 2、被拖对象：drag事件，被拖放的元素，拖放过程中
// 3、经过对象：dragenter事件，拖放过程中鼠标经过的元素，被拖放的元素开始进入其它元素范围内（刚进入）
// 4、经过对象：dragover事件，拖放过程中鼠标经过的元素，被拖放的元素正在本元素范围内移动(一直)
// 5、经过对象：dragleave事件，拖放过程中鼠标经过的元素，被拖放的元素离开本元素范围
// 6、目标地点：drop事件，拖放的目标元素，其他元素被拖放到本元素中
// 7、被拖对象：dragend事件，拖放的对象元素，拖放操作结束

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

for (const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}

//被拖动的元素，开始拖放触发
function dragStart() {
    this.classList.add('hold');
    setTimeout(() => this.className = 'invisible', 0);
}

//拖放的对象元素，拖放操作结束
function dragEnd() {
    this.className = 'fill';
}

//被拖放的元素正在本元素范围内移动
function dragOver(e) {
    e.preventDefault();
}

//被拖放的元素开始进入其它元素范围内
function dragEnter(e) {
    e.preventDefault();
    this.classList.add('hovered');
}

//被拖放的元素离开本元素范围
function dragLeave() {
    this.className = 'empty'
}

//拖放的目标元素，其他元素被拖放到本元素中
function dragDrop() {
    this.className = 'empty';
    this.append(fill);
}