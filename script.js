$(function () {

//* Adding classes depending on current time:

    //?Iterates over each element with a class of 'time-block'
  $('.time-block').each(function() {

    //? Declaring the div that we can traverse from.
    //?'This' refers to the current element
    //? that the .each function operates on (.time-block)
    let timeIdDiv = $(this); 

    
    //?Isolating the id             
    let time = timeIdDiv.attr('id');

                    //! Credit to github Ai sidebar ///////////// 
    //! When the page loads, the stored string is retrieved from local storage:
    let storedData = localStorage.getItem(time);
    //! If there's stored data for this time block, set the value of the textarea
    if (storedData) {
      $(this).find('textarea').val(storedData);
    }
                      //! ////////////////////////////////////////////

    //? isolating the integer so we can compare to current time.
    let timeInt = Number(time.split('-')[1]); 
                    //! Credit to github Ai sidebar ///////////// 

    //? Get current hour in 24 hour format (H)                                       
    let currentHour = Number(dayjs().format('H'))

    //? Compare currentHour wth timeInt. Apply classes accordingly.
    if (timeInt === currentHour)
      timeIdDiv.addClass("present")
    else if (timeInt < currentHour)
      timeIdDiv.addClass("past")
    else if (timeInt > currentHour)
      timeIdDiv.addClass("future")
                          //! ////////////////////////////////////////
  });

  //? Adding time and date to main page.
  // ? Current Day and Time:
  let currentDay = dayjs().format('dddd, MMMM D YYYY')
  let currentTime = dayjs().format('h:mm:ss a')

  //? Append Current Day and Time:
  $('#currentDay').text(currentDay)
  $('#currentTime').text(currentTime)

  //?change current time every second. 'a' means lowecase am/pm,
  setInterval(function() {
    currentTime = dayjs().format('h:mm:ss a');
    $('#currentTime').text(currentTime);
  }, 1000);



//* TODO: Add a listener for click events on the save button.

  //? Give JS The Save Buttons:
  let saveBtn = $('.saveBtn')
  saveBtn.on('click', function() {

    //? Create an object so we can utilize local storage.
    let obj = new Object();

    //?When you click the save button, navigate to the parent
    let timeIdDiv = $(this).parent()

    //? then grab the time (as the id)
    let time= $(timeIdDiv).attr('id')

                  //! Credit to Github ai sidepanel///////////////////
    //? We want the id to be (time)
    // let timeInt = Number(time.split('-')[1]); 
    //* Finds a textarea child. declares new var according to value thereof.
    let userInput = $(timeIdDiv).find('textarea').val();

    //* add user input to object
    obj[time] = userInput;
    console.log(time)

    //? Put user input in local storage
    localStorage.setItem(time, userInput)
                   //! /////////////////////////////////////////////////
    })
  })
