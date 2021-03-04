let field = document.getElementById('snakeField')
let set;
for (let i = 0; i < 100; i++) {
  field.innerHTML += `<div class="item"></div>`
}
field.addEventListener('mouseover', (e) => {
  e.target.style.backgroundColor = 'gold'
  let lightblue = () => {
    e.target.style.backgroundColor = 'lightblue'
  }
  set = setTimeout(lightblue, 500)
})
