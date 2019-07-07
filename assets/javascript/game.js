/* /\/\/\/\/\/\/\/\/\/\ Declared variables /\/\/\/\/\/\/\/\/\/\ */

var wins = document.querySelector('wins')
var losses = document.querySelector('losses')

var gem1 = document.querySelector('#gem1')
var gem2 = document.querySelector('#gem2')
var gem3 = document.querySelector('#gem3')
var gem4 = document.querySelector('#gem4')

var totalScore = document.querySelector('#totalScore')
var ranNum = document.querySelector('#ranNum')

/* /\/\/\/\/\/\/\/\/\/\ Function to get a random integer /\/\/\/\/\/\/\/\/\/\ */

function getRndInteger (min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

/* /\/\/\/\/\/\/\/\/\/\ Start /\/\/\/\/\/\/\/\/\/\ */

function start () {
  // set everything to 0 and display on html
  totalScore = 0
  document.querySelector('#totalScore').innerHTML = totalScore
  wins = 0
  losses = 0

  // generate a random integer from 19 to 120 and display in html
  ranNum = document.querySelector('#ranNum').innerHTML = getRndInteger(19, 120)
  console.log('Random Number: ' + ranNum)

  // give each gem a random integer from 1 to 12
  gem1 = getRndInteger(1, 12)
  gem2 = getRndInteger(1, 12)
  gem3 = getRndInteger(1, 12)
  gem4 = getRndInteger(1, 12)

  // each gem is given a click event
  // after any gem is clicked they add that amount to the total score
  // and call display() and check()
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

  // display the totalscore in html
  function display () {
    console.log('totalScore: ' + totalScore)
    document.querySelector('#totalScore').innerHTML = totalScore
  }

  // check if the totalScore is equeal to the ranNum, if so then you win call end()
  // add 1 to win score
  // call end()
  function check () {
    if (totalScore === ranNum) {
      wins++
      document.querySelector('#wins').innerHTML = `Wins: ${wins}`      
      alert('you won!')
      console.log('u win')
      end()

    // check if the totalScore is greater than the ranNum, if so then you lose
    // add 1 to loss score
    // call end()
    } else if (totalScore > ranNum) {
      losses++
      document.querySelector('#losses').innerHTML = `Losses: ${losses}`
      alert('you lost!')
      console.log('u lose')
      end()
    }
  }

  // resets the total score to 0 and display in html
  // generate a new ranNum and display
  // generate a new random number for each gem
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
