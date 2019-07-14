//轮播
var currentIndex = 0;
var id;

function slideTo(index) {

    var ul = document.querySelector('.slider .pictures');
    var liW = document.querySelector('.slider .pictures li').offsetWidth;

    if (index === 5) {
        //1.    去掉过渡
        ul.style.transitionDuration = '0s';
        //2.    translate(0,0,0)
        ul.style.transform = 'translate3d(0px, 0px, 0px)';
        setTimeout(() => {
            //3.    加上过渡
            ul.style.transitionDuration = '';
            //4.    滑动到真1上
            currentIndex = 1;
            ul.style.transform = `translate3d(${-1 * liW}px, 0px, 0px)`;
        }, 50)
        return;
    }

    if (index === -1) {
        ul.style.transitionDuration = '0s';
        //2.    translate(0,0,0)
        ul.style.transform = `translate3d(${-4 * liW}px, 0px, 0px)`;
        setTimeout(() => {
            //3.    加上过渡
            ul.style.transitionDuration = '0.5s';
            //4.   
            currentIndex = 3;
            ul.style.transform = `translate3d(${-3 * liW}px, 0px, 0px)`;
        }, 50)
        return;

    }



    var left = -index * liW;

    // ul.style.left = left + 'px';
    ul.style.transform = `translate3d(${left}px, 0px, 0px)`;
}

function slideNext() {
    currentIndex++;
    slideTo(currentIndex);
}

function slidePrev() {
    currentIndex--;
    slideTo(currentIndex);
}

//绑定事件
document.querySelector('.prev').onclick = function() {
    slidePrev();
}

document.querySelector('.next').onclick = function() {
    slideNext();
}

function autoplay() {
    clearInterval(id);
    id = setInterval(slideNext, 3000)
}

autoplay();

function stop() {
    clearInterval(id);
}

var slider = document.querySelector('.slider');
slider.onmouseover = function() {
    stop()
}
slider.onmouseout = function() {
    autoplay();
}

var erji = document.querySelector('.erji')
erji.onmouseover = function() {
    var li_1 = document.querySelector('#li_1')
    li_1.style.display = 'block'
}
erji.onmouseout = function() {
    var li_1 = document.querySelector('#li_1')
    li_1.style.display = 'none'
}