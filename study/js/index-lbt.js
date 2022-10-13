window.onload = function () {
    var div_lbt = document.querySelector('.lbt');
    //获取图片所在的小li
    var div_ul = div_lbt.querySelector('.ul');
    var div_li = div_ul.querySelectorAll('li');
    //获取左右按键
    var div_left = div_lbt.querySelector('.left');
    var div_right = div_lbt.querySelector('.right');
    //获取小圆点的小li
    var div_ol = div_lbt.querySelector('.ol');
    var ol_li = div_ol.querySelectorAll('li');
    var left = 0;
    var timer;
    run(); //轮播动画
    function run() {
        if (left <= -900) {
            left = 0;
        }
        var m = Math.floor(-left / 300); //获取当前图片索引号
        div_ul.style.marginLeft = left + 'px';
        //添加变量n，使其滚完一张后停留
        var n = (left % 300 == 0) ? n = 1200 : n = 50;
        left -= 20;
        timer = setTimeout(run, n);
        lichange(m);
    }
    //图片定位
    function imgchange(e) {
        let lt = -(e * 300);
        div_ul.style.marginLeft = lt + 'px';
        left = lt;
    }
    //圆点跟随
    function lichange(m) {
        for (let i = 0; i < ol_li.length; i++) {
            ol_li[i].style.backgroundColor = '';
        }
        if (m < ol_li.length) {
            ol_li[m].style.backgroundColor = 'red';
        }
    }
    //左右按钮
    div_left.addEventListener('click', function fleft() {
        let prevgo = Math.floor(-left / 300) - 1;
        if (prevgo == -1) {
            prevgo = 2;
        }
        imgchange(prevgo);
    })
    div_right.addEventListener('click', function fright() {
        let nextgo = Math.floor(-left / 300) + 1;
        if (nextgo == 3) {
            nextgo = 0;
        }
        imgchange(nextgo);
    })
    //点击小圆点事件
    div_ol.addEventListener('click', function folli() {
        var tg = event.target;
        let ico = tg.innerHTML - 1;
        imgchange(ico);
        lichange(ico);
    })
    //鼠标经过与离开
    div_ul.addEventListener('mouseover', function ulm() {
        clearTimeout(timer);
    })
    div_ul.addEventListener('mouseout', function ulm() {
        run();
    })
}