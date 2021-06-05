window.onload = function () {
    var set = document.getElementsByClassName('set');
    var setShow = document.getElementById('setShow');
    var setCode = document.getElementsByClassName('set-show');

    var body = document.body;
    var backgroundDiv = document.createElement("div");
    var card = document.getElementsByClassName('sign_card')
    var btn = document.getElementsByClassName('btn')
    var del = document.getElementsByClassName('delete_icon')


    // 设置
    // move
    set[0].addEventListener('mousemove', throttle(move, 200))
    function move() {
        //要节流的函数
        // console.log("move节流")
        setShow.style.display = 'block';
    }
    function throttle(fn, delay) {
        let flag = true
        return function () {
            if (!flag) {
                return
            }
            setTimeout(() => {
                fn.apply(this, arguments)
                flag = true
            }, delay)
            flag = false//过河拆桥
        }
    }
    setCode[0].addEventListener('mousemove', throttle(move, 200))
    function move() {
        //要节流的函数
        // console.log("move节流")
        setShow.style.display = 'block';
    }
    function throttle(fn, delay) {
        let flag = true
        return function () {
            if (!flag) {
                return
            }
            setTimeout(() => {
                fn.apply(this, arguments)
                flag = true
            }, delay)
            flag = false//过河拆桥
        }
    }
    // out
    set[0].addEventListener('mouseout', throttle(out, 200))
    function out() {
        //要节流的函数
        // console.log("out节流")
        setShow.style.display = 'none';
    }
    function throttle(fn, delay) {
        let flag = true
        return function () {
            if (!flag) {
                return
            }
            setTimeout(() => {
                fn.apply(this, arguments)
                flag = true
            }, delay)
            flag = false//过河拆桥
        }
    }
    setCode[0].addEventListener('mouseout', throttle(out, 3000))
    function move() {
        //要节流的函数
        // console.log("out节流")
        setShow.style.display = 'block';
    }
    function throttle(fn, delay) {
        let flag = true
        return function () {
            if (!flag) {
                return
            }
            setTimeout(() => {
                fn.apply(this, arguments)
                flag = true
            }, delay)
            flag = false//过河拆桥
        }
    }
    // 弹窗
    btn[0].onclick = function () {
        backgroundDiv.style.cssText = "display:block;left:0;top:0;position:fixed;background:#000;opacity:0.5;width:100%;height:100%";
        body.appendChild(backgroundDiv);
        card[0].style.display = 'block'
    }
    del[0].onclick = function () {
        backgroundDiv.style.display = 'none'
        card[0].style.display = 'none'
    }
    // 图片搜索提示

};

var module1 = (function (mod) {
    mod.m3 = function () {
        console.log('xxx')
    };
    return mod;
})(module1);
console.log(module1)
