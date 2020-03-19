const color1 = document.querySelector('.color-1');
const color2 = document.querySelector('.color-2');
const color3 = document.querySelector('.color-3');
const color4 = document.querySelector('.color-4');
const color5 = document.querySelector('.color-5');
const brush = document.querySelector('.current-brush')
const div = document.querySelector('.square color-5')
console.log(color1.classList);
console.log (color1.classList[1]);

const changeBrush = function(){
brush.classList.remove(brush.classList[1])
brush.classList.add('color-1')
}

color1.addEventListener('click',changeBrush)

const changeBrush2 = function(){
    brush.classList.remove(brush.classList[2])
    brush.classList.add('color-2')
}

color2.addEventListener('click',changeBrush2)

const changeBrush3 = function(){
    brush.classList.remove(brush.classList[3])
    brush.classList.add('color-3')
}
color3.addEventListener('click',changeBrush3)

const changeBrush4 = function(){
    brush.classList.remove(brush.classList[4])
    brush.classList.add('color-4')
}

color4.addEventListener('click',changeBrush4)

const changeBrush5 = function(){
    brush.classList.remove(brush.classList[5])
    brush.classList.add('color-5')
}
color5.addEventListener('click',changeBrush5)

const div = function(){
    div.classList.remove(div.classList[])
    div.classList.add('square color-5')
}
div.addEventListener('click',div)
