/*
#1
    Task: Capture the user's search query
    1. Add an event listener for 'keyup'
    2. Capture the event in a 'let' called 'searchQuery' - storing the value
    3. Make sure the captured value is lowercase
    4. Log to the console to demonstrate it works
*/
//#1
document
  .getElementById(`searchInput`)
  .addEventListener(`keyup`, function (event) {
    let searchQuery = event.target.value.toLowerCase();
    console.log(searchQuery);
    //#2
    let allNamesDOMCollection = document.getElementsByClassName(`name`);
    console.log(allNamesDOMCollection[0].textContent);
    //#3
    for (let i = 0; i < allNamesDOMCollection.length; i++) {
      const currentName = allNamesDOMCollection[i].textContent.toLowerCase();
      //#4
      if (currentName.includes(searchQuery)) {
        allNamesDOMCollection[i].style.display = "block";
      } else {
        allNamesDOMCollection[i].style.display = "none";
      }
    }
  });

//This code uses the id of search input in html and adds an event listener where
//anything typed falls into keyup which triggers an event function where
//the searchQuery is equal to the value of the event in lowercase
//then we make a variable which is equal to all the class names and we return the value with
//a console.log of its first index where it's appended to textContent
// then we make a for loop where for everything type we cycle through it
//during the for loop if the current name includes something in the search query
//the all the names with that text in the DOM should display as a block, if not they should be hidden during the typing

/*
#2
    Task: Get all the name elements from the DOM
    1. Create a new 'let' called 'allNamesDOMCollection'
    2. Store all the elements of classname 'name' in 'allNamesDOMCollection'
    3. Log to the console 'allNamesDOMCollection' to demonstrate that an HTMLCollection exists
    4. Log out the first index of allNamesDOMCollection and add 'textContent' to view a name
*/

//#3
/*
    Task: Loop over all our names
    1. Create a new for loop with a incremental counter, called 'counter'
    2. Make sure the counter is less than the allNamesDOMCollection.length in the loop conditional
    3. Declare a const called 'currentName' and store the textContext
    4. Make sure the 'currentName' is lowercase
    5. Log out the 'currentName' so we can see all the names from the loop!
*/
//#4
/*
    Task: Comparing the search query vs. the DOM names
    1. Create a conditional that checks if currentName is equal to the user's search query!
    2. If our conditional returns true, set the display style on 'allNamesDOMCollection[counter]' to be a block element
    3. If our conditional falls into the else, we have no match! So set the display style to 'none'
    
    Helpers: use the methods 'includes' for objective 1
    - The includes() method determines whether one string may be found within another string, returning true or false as appropriate.
*/
