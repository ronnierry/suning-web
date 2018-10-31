const imgUrl = ["../img/index/154056043102773851.jpg", "../img/index/154090053442295901.jpg", "../img/index/bd6f82cda6fe46caa0c64bcb2db0fc75.jpg"];
let carouselDiv = document.getElementById('carousel-img');
let height = carouselDiv.offsetHeight;
const width = carouselDiv.offsetWidth;

let className = 'carousel'
// 容器
const divSum = document.createElement('div');
divSum.setAttribute('style', 'width : ' + width * 3 + 'px')
let carouselDot = document.getElementById('carousel-dot');
imgUrl.forEach(
    x => {
        let divItem = document.createElement('div');
        divItem.className = className;
        divItem.setAttribute('class', className);
        divItem.style.cssFloat = 'left'
        divItem.setAttribute("style", 'background-image : url("' + x + '")')
        divItem.innerText = 'test_' + x;
        divItem.backgroundImage = x;

        divSum.appendChild(divItem);
        carouselDot.appendChild(document.createElement("li"))
    }
)
carouselDiv.appendChild(divSum)
// 下标
let i = 0;

//
setInterval(() => {
    i++;
    let div = divSum;
    let length = imgUrl.length;
    if (i == length - 1) {
        div.style.transform = 'translateX(0px)';
        i = 0;
    } else {
        div.style.transform = 'translateX(' + -i * width + 'px)';
    }
    carouselDot.childNodes.forEach(
       x=>{
           x.style.backgroundColor = ''
       }
    )

}, 2000);　