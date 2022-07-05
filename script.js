let car = document.querySelector('.car')
let back = document.querySelector('.transi')
let center = document.querySelector('.center')
let center2 = document.querySelector('.center2')

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