// calculates the square of whatever number you add into the input box
let number = 0

document.getElementById('button').addEventListener('click', multiplication)

function multiplication () {
  number = document.getElementById('input').value

  number = parseInt(number)

  number = number * number

  alert(number)
}
