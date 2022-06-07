//  slide product
var anhArrays = [
    './assets/images/img-1.jpg',
    './assets/images/img-2.jpg',
    './assets/images/img-3.jpg',
    './assets/images/img-4.jpg',
    './assets/images/img-5.jpg',
    './assets/images/img-6.jpg',
    './assets/images/img-7.jpg',
    './assets/images/img-8.jpg',

]

var index = 0;
function next() {
    index++
    if (index >= anhArrays.length) {
        index = 0
    }
    var anh = document.querySelector('.img_album')
    anh.src = anhArrays[index]
    document.querySelector('.index_img').innerHTML = `${index + 1} / ${anhArrays.length}`
};

function prev() {
    index--
    if (index < 0) {
        index = anhArrays.length - 1
    }
    var anh = document.querySelector('.img_album')
    anh.src = anhArrays[index]
    console.log(anhArrays[index])
    document.querySelector('.index_img').innerHTML = `${index + 1} / ${anhArrays.length}`
};

setInterval('next()', 2000);


//  Model chi tiet san pham 

// var btnViews = document.querySelectorAll('.btn_view_js');
// var model = document.querySelector('#model')
// var closes = document.querySelectorAll('.icon_close')
// var model_containers = document.querySelectorAll('.model_container')

// btnViews.forEach((btnView, index) => {
//     let model_container = model_containers[index]
//     btnView.addEventListener('click', () => {
//         model.classList.add('open')
//         model_container.classList.add('open2')
//     })
// })

// closes.forEach((btnClose, index) => {
//     let model_container = model_containers[index]
//     btnClose.addEventListener('click', () => {
//         model.classList.remove('open')
//         model_container.classList.remove('open2')
//     })
// })


