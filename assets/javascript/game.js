// var container = document.querySelector('#mainContainer')

var wins = document.querySelector('wins')
var losses = document.querySelector('losses')

var gem1 = document.querySelector('#gem1')
var gem2 = document.querySelector('#gem2')
var gem3 = document.querySelector('#gem3')
var gem4 = document.querySelector('#gem4')

var totalScore = document.querySelector('#totalScore')
var ranNum = document.querySelector('#ranNum')

function getRndInteger (min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

function start () {
  totalScore = 0
  document.querySelector('#totalScore').innerHTML = totalScore
  wins = 0
  losses = 0

  ranNum = document.querySelector('#ranNum').innerHTML = getRndInteger(19, 120)
  console.log('Random Number: ' + ranNum)

  gem1 = getRndInteger(1, 12)
  gem2 = getRndInteger(1, 12)
  gem3 = getRndInteger(1, 12)
  gem4 = getRndInteger(1, 12)

  document.querySelector('#gem1').addEventListener('click', function () {
    console.log('gem1 says: ' + gem1)
    totalScore = totalScore + gem1
    display()
    check()
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

  function display () {
    console.log('totalScore: ' + totalScore)
    document.querySelector('#totalScore').innerHTML = totalScore
  }

  function check () {
    if (totalScore === ranNum) {
      wins++
      document.querySelector('#wins').innerHTML = `Wins: ${wins}`      
      alert('you won!')
      console.log('u win')
      end()
    } else if (totalScore > ranNum) {
      losses++
      document.querySelector('#losses').innerHTML = `Losses: ${losses}`
      alert('you lost!')
      console.log('u lose')
      end()
    }
  }

  function end () {
    totalScore = 0
    document.querySelector('#totalScore').innerHTML = totalScore
    ranNum = document.querySelector('#ranNum').innerHTML = getRndInteger(19, 120)
    gem1 = getRndInteger(1, 12)
    gem2 = getRndInteger(1, 12)
    gem3 = getRndInteger(1, 12)
    gem4 = getRndInteger(1, 12)
  }
}

start()
