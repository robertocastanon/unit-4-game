// var ranNum = document.querySelector("ranNum")
var container = document.querySelector('#mainContainer')

// var wins = document.querySelector('wins')
// var losses = document.querySelector('losses')

var gem1 = document.querySelector('#gem1')
var gem2 = document.querySelector('#gem2')
var gem3 = document.querySelector('#gem3')
var gem4 = document.querySelector('#gem4')

var totalScore = document.querySelector('#totalScore')

totalScore = 0

function getRndInteger (min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

function start () {
  var ranNum = document.querySelector('#ranNum').innerHTML = getRndInteger(19, 120)

  console.log('Random Number: ' + ranNum)

  gem1 = getRndInteger(1, 12)
  gem2 = getRndInteger(1, 12)
  gem3 = getRndInteger(1, 12)
  gem4 = getRndInteger(1, 12)

  function display() {
    console.log('totalScore: ' + totalScore)
    document.querySelector('#totalScore').innerHTML = totalScore
  }

  function check() {

    if (totalScore === ranNum) {
      // document.querySelector('#wins').innerHTML = '1'
      return console.log('u win')
    } else if (totalScore > ranNum) {
      // document.querySelector('#losses').innerHTML = '1'
      return console.log('u lose')
    }
  }

  function end () {
    document.querySelector('#mainContainer')

  }

  document.querySelector('#gem1').addEventListener('click', function () {
    console.log('gem1 says: ' + gem1)
    totalScore = totalScore + gem1

    display()
    check()
    document.getElementById('gem1').disabled = true
  })
  document.querySelector('#gem2').addEventListener('click', function () {
    console.log('gem2 says: ' + gem2)
    totalScore = totalScore + gem2

    display()
    check()

  })
  document.querySelector('#gem3').addEventListener('click', function () {
    console.log('gem3 says: ' + gem3)
    totalScore = totalScore + gem3

    display()
    check()

  })
  document.querySelector('#gem4').addEventListener('click', function () {
    console.log('gem4 says: ' + gem4)
    totalScore = totalScore + gem4

    display()
    check()

  })
}

start()
