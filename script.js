function toggleMode() {
  const html = document.documentElement

  //  if(html.classList.contains('light')) {
  //   html.classList.remove('light')
  //  } else {
  //   html.classList.add('light')
  //  }
  html.classList.toggle("light")
  //Uma forma resumida para desligar e ligar o modo light

  //pegar a tag img
  const img = document.querySelector("#profile img")
}
