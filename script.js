let car = document.querySelector('.car')
let back = document.querySelector('.transi')
let center = document.querySelector('.center')
let center2 = document.querySelector('.center2')
let item1 = document.querySelector('.b')
let item2 = document.querySelector('.w')
let item3 = document.querySelector('.o')
let img = document.querySelector('.t1')
let img2 = document.querySelector('.t')
let img3 = document.querySelector('.t2')

car.onclick = () => {
  center.className = "center2"
  center2.className = "center"
  center2.style.marginLeft = "100px"
  console.log('click');
}
back.onclick = () => {
  center2.className = "center2"
  center.className = "center"
}

item1.onclick = () => {
  if(img.contains('.active')){
    img.classList.remove('.active')  
  }else{
    img.classList.add('.active')
  }
}
item2.onclick = () => {
  if(img2.classList.contains('active')){
    img2.classList.remove('.active')  
    img.style.display = "none"
  } else{
    img2.classList.add('.active')
  }
}
item3.onclick = () => {
  if(img3.classList.contains('active')){
    img3.classList.remove('active')  
  } else{
    img3.classList.add('active')
  }
}


