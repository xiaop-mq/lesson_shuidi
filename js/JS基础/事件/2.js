let lit = document.querySelector('.lit_box'),
    mask = document.querySelector('.mask'),
    big = document.querySelector('.big_box'),
    bigImg = big.querySelector('img');

lit.onmouseenter = function () {
    mask.style.display = 'block';
    big.style.display = 'block';
}
lit.onmouseleave = function () {
    mask.style.display = 'none';
    big.style.display = 'none';
}
lit.onmousemove = function (e) {
    let o = offset(this);
    let l = e.pageX - o.left - mask.clientWidth / 2,
        t = e.pageY - o.top - mask.clientHeight / 2;
 
    let maxL = this.clientWidth - mask.clientWidth,
        maxT = this.clientHeight - mask.clientHeight;
    l = l < 0 ? 0 : (l > maxL ? maxL : l);
    t = t < 0 ? 0 : (t > maxT ? maxT : t);

    mask.style.left = l + 'px';
    mask.style.top = t + 'px';

    let n = big.clientHeight / mask.clientHeight;
    bigImg.style.left = -l * n + 'px';
    bigImg.style.top = -t * n + 'px';
}

function offset(ele) {
    let l = ele.offsetLeft,
        t = ele.offsetTop;
    let parent = ele.offsetParent;
    while (parent) {
        l += parent.clientLeft + parent.offsetLeft;
        t += parent.clientTop + parent.offsetTop;
        parent = parent.offsetParent;
    }
    return {
        top: t,
        left: l
    }
}

