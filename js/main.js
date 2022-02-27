//смена картинок
function imgSlider(anything){
  document.querySelector('.pepsi').src = anything
}

//смена цвета фона
function changeBgColor(color){
  const sec = document.querySelector('.sec')
  sec.style.background = color
}

//смена бургура меню  на крестик и открытие модального окна меню
function menuToggle(){
  const toggleMenu = document.querySelector('.toggle-menu')
  const navigation = document.querySelector('.navigation')
  toggleMenu.classList.toggle('active')
  navigation.classList.toggle('active')
}