In JavaScript, a debounce function makes sure that your code is only triggered once per user input. Search box suggestions, text-field auto-saves, and eliminating double-button clicks are all use cases for debounce.

Debounce is really helpful and usefull when there are constant request to the server , constant API calls . Thus to minimize the calls and fetch only the most recent query , debounce is used.


//*** 🌟🌟 WORKING EXPLAINED  🌟🌟***//

LINE 9 : Its an event listener function which listenes to any change in the input field. whenever there is an change in the input field it updates the textcontent of two span elements defaultText and debounceText.

LINE 11: To update the text of the debounceText we go through a debounce Fx. 

    ITINERARY OF THE SCRIPT 🚀

    a) The updateDebounceText Fx is called with the value of the input.
    b) On LINE 5 The updateDebounceText Fx first calls the debounce Fx on LINE 14.
    c) The debounce Fx then handles an 1 second delay and returns the text to updateDebounceText LINE5 where the debounceText textcontent is updated.

LINE 14 debounce Fx Logic. 🛠

The Fx has two arguments, 
textForDebounce: This is the text is passed back to us from updateDebounceText Fx for debounce.

delay: It the value in ms of how long we want to delay for the debounce.

LINE 15: we set a variable timer without any value.
 
 LINE 16: The return function which will return the value to the updateDebounceText Fx.
   The return Fx has an arguments in spread 

LINE 17: We clear the timeout Fx . This is because we want the function only to run once the entire result has been sent and not for each bit of the request.

LINE 18 : timer is set to 1000

LINE 19:The textForDebounce we got from the updateDebounceText is sent to the return Fx to be return to the updateDebounceText. 

IMPORTANT : LINE 19 Only excecutes once the entire text is sent to the debounce function. i.e one second or 1000 ms after the query request.