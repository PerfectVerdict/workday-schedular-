// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add code to apply the past, present, or future class to each time
  // TODO block by comparing the id to the current hour.
  //*Iterates over each jquery object (each element with a class
  //* of 'time-block')
  $('.time-block').each(function() {
    //*declaring the div that we can traverse from on the next line
    //* to get the time to compare to 'currentHour'
    let timeIdDiv = $(this); //*'this' refers to the current element
                             //*that the .each function operates on
    let time = timeIdDiv.attr('id'); //*isolating the id
    let timeInt = Number(time.split('-')[1]); //* isolating the integer
    //! Credit to github Ai sidebar                                          
    let currentHour = Number(dayjs().format('H'))
    console.log(currentHour)


    if (timeInt === currentHour)
      timeIdDiv.addClass("present")
    else if (timeInt < currentHour)
      timeIdDiv.addClass("past")
    else if (timeInt > currentHour)
      timeIdDiv.addClass("future")
  });
  // ! Current Day and Time:
  let currentDay = dayjs().format('dddd, MMMM D YYYY')
  let currentTime = dayjs().format('h:mm:ss a')
  //! Append Current Day and Time:
  $('#currentDay').text(currentDay)
  $('#currentTime').text(currentTime)
  setInterval(function() {
    currentTime = dayjs().format('h:mm:ss a');
    $('#currentTime').text(currentTime);
  }, 1000);

  // TODO: Add a listener for click events on the save button.
  //! Give JS The Save Buttons:

 
  let saveBtn = $('.saveBtn')
  saveBtn.on('click', function() {
    let obj = new Object();
      //TODO use the id in the containing time-block as a key to save the user input in local storage. 
      //*How can DOM traversal be used to get the "hour-x" id of the
      //* time-block containing the button that was clicked? How might the id be
      // *useful when saving the description in local storage?
    let timeIdDiv = $(this).parent()
    let time= $(timeIdDiv).attr('id')
    //! Credit to Github ai sidepanel///////////////////
      //*Get the integer of the div so we can later compare it and add
      //* or remove classes. .split('-') turns the id into an array of
      //* strings, with "hour" at idex 0 and "(the hour itself)" at
      //* index one. Thats why we use [1].
    let timeInt = Number(time.split('-')[1]); 
    let userInput = $(timeIdDiv).find('textarea').val();
    //* add user input to object
    obj[time] = userInput;
    //! /////////////
    
    //TODO HINTS: How can the id
    // TODO attribute of each time-block be used to conditionally add or remove the


    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
    })
  })
