console.log('wtf')

const toDoItems = []

// Get user name
getName = () => {
  let user = prompt('Please enter your name', 'Air Bud');
  if (user !== null) {
    document.querySelector('.user').innerHTML = user;
    return;
  } 
}

// Real time clock
function realTimeClock() {
  const rtClock = new Date();

  let hours = rtClock.getHours();
  let minutes = rtClock.getMinutes();
  let seconds = rtClock.getSeconds();

  // Add AM/PM
  let amPm = ( hours < 12 ) ? "AM" : "PM";

  //Convert hours to 12h format
  hours = ( hours > 12 ) ? hours - 12 : hours;

  //with leading zeroes
  hours = ("0" + hours).slice(-2);
  minutes = ("0" + minutes).slice(-2);
  seconds = ("0" + seconds).slice(-2);

  //Display clock
  document.getElementById('clock').innerHTML = hours + " : " + minutes + " : " + seconds + " " + amPm;
  const t = setTimeout(realTimeClock, 500);
}

function realTimeDate() {
  const today = new Date();
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

  let month = today.getMonth();
  let year = today.getFullYear();
  let date = today.getDate();
  let week = today.toLocaleString('en-us', {  weekday: 'long' })

  document.getElementById('date').innerHTML = `${week}, ${date} ${monthNames[month]}, ${year}`
  const d = setTimeout(realTimeDate, 1000);
}

function greetings() {
  let time = new Date().getHours();
  let greeting = ""

  //morning, afternoon, evening condition
  if (time < 12 && time >= 6) {
    greeting = `Good Morning`;
  } else if (time >= 12 && time < 17) {
    greeting = `Good Afternoon`;
  } else if (time >= 17 && time < 22) {
    greeting = `Good Evening`;
  } else {
    greeting = "GO TO BED! "
  }
  document.getElementById('greeting').innerHTML = greeting;
}

// info button
getInfo = () => {
  $('.info').on('click', function(){
    $('.overlay').fadeIn();
  })

  $('.close').on('click', function(){
    $('.overlay').fadeOut();
  })
}

// Clear the user input
clear = () => {
  $('input').val('');
}

// Clear the list of tasks
clearTasks = () => {
  $('#clearTasks').on('click', function(){
    $('ul').empty();
    $('#hide').show();
  })
}

// Get user input and print out dyanmically
$('form').on('submit', function(e){
  e.preventDefault();

  // save();
  
  const userInput = $('.form-control').val();
  console.log(userInput);
  $('#hide').hide();

  //create list item
  const item = `<li>${userInput}<i class="fas fa-trash-alt trash"></i><i class="fas fa-check done"</i></li>`;
  
  $('ul').append(item);
  clear();
  deleteTask();
  completeTask();
})

// delete specific input
deleteTask = (index) => {
  $('.trash').on('click', function(){
    console.log('this is trash');
    $(this.parentElement).hide();
  })
}
// complete task
completeTask = () => {
  $('.done').on('click', function(){
    $(this.parentElement).addClass('muteText');
  })
}

// view();
getName();
getInfo();
realTimeClock();
realTimeDate();
greetings();
clear();
clearTasks();
