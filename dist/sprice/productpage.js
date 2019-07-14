$('.fdj').on('mousemove', function(evt) {
    var x = evt.offsetX;
    var y = evt.offsetY;
    var outx = $('.fdj').width() - $('.float').width();
    var outy = $('.fdj').height() - $('.float').height();
    x = x - $('.float').width() / 2;
    y = y - $('.float').height() / 2;
    if (x < 0) {
        x = 0;
    }
    if (y < 0) {
        y = 0;

    }
    if (x > outx) {
        x = outx
    }
    if (y > outy) {
        y = outy

    }

    $('.float').css({
        left: x,
        top: y
    })
    var bigx = -2 * x;
    var bigy = -2 * y;

    $('.rightt').css({
        backgroundPosition: `${bigx}px ${bigy}px`
    })
}).on('mouseover', function() {
    $('.float, .rightt').show();
}).on('mouseout', function() {
    $('.float, .rightt').hide();
})


var lis = document.querySelectorAll('.detail ul li')
console.log(lis)
for (var i = 0; i < lis.length; i++) {
    lis[i].setAttribute('index', (i + 1));
    lis[i].onmouseover = function() {
        var index = this.getAttribute('index');
        var src = document.querySelector('.fdj img  ');
        // console.log(src)
        //console.log(index)
        src.src = `../img/productpage/detail_${index}.jpg`;
        // console.log(src)
        var right = document.querySelector('.rightt');

        right.style.backgroundImage = `url(../img/productpage/detail_${index}.jpg)`;


        // $('.right').css({
        //     backgroundImage: `url(../img/productpage/detail_${index}.jpg)`
        // })
        //console.log(right)

    }
}