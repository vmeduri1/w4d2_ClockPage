window.addEventListener("DOMContentLoaded", (event) => {


//phase 2
//populating your profile
  //phase 2A
  //creating and appending new elements:

  //Follows these steps:
  // Create the element with document.createElement()
  // Set the attribute with Element.setAttribute()
  // Append the element to the page with Node.appendChild()

  //create h1 and append it to the body:
  const nameHeading = document.createElement('h1');
  nameHeading.setAttribute("class", "my-name");
  nameHeading.innerHTML = "Vishaal Meduri";
  document.body.appendChild(nameHeading);
  //details about me
  //create a ul and append to body.
  const detailsList = document.createElement('ul');
  detailsList.setAttribute("class", "my-details");
  document.body.appendChild(detailsList);

  //add li items and append to ul
  const listItem1 = document.createElement('li');
  listItem1.innerHTML = "I have a dog.";
  detailsList.appendChild(listItem1);

  const listItem2 = document.createElement('li');
  listItem2.innerHTML = "What do I want out of life?";
  detailsList.appendChild(listItem2);

  const listItem3 = document.createElement('li');
  listItem3.innerHTML = "What's there in life?";
  detailsList.appendChild(listItem3);

  const listItem4 = document.createElement('li');
  listItem4.innerHTML = "What's up, life?";
  detailsList.appendChild(listItem4);
    //Phase 2B:
  //refactor to make it programmatic / create details list dynamically:

  //create new ul and append to body
  const anotherDetailsList = document.createElement('ul');
  anotherDetailsList.setAttribute("class", "my-details");
  document.body.appendChild(anotherDetailsList);
  //create details array to add to ul using innerHTML
  const detailsArr = [
    "<li>I like coffee.</li>",
    "<li>I like coffee.</li>",
    "<li>I like coffee.</li>",
    "<li>I like coffee.</li>",
  ];
  const liString = detailsArr.join(" ");
  // console.log(liString)
  anotherDetailsList.innerHTML = liString;
  //phase 3:
  //adding css classes and styles
  /* In order to add classNames to each li, I have two options:
1) I can manually add class='detail' to each
2) I can add the classes via iteration over a the static NodeList resulting from querySelectorAll()
*/
  const liCollection = document.querySelectorAll('li');
  liCollection.forEach((li) => {
    li.classList.add("detail");
  })
  //use querySelectorAll to grab all lis and add a class to them dynamically


  //phase 4:
  //adding a clock with the Date object

  //create li or div to hold the clock and append to the ul
  const clock = document.createElement('li');
  clock.classList.add("detail");
  anotherDetailsList.appendChild(clock);

  const time = () => {
    //use the date object to grab the current time
    let date = new Date();
    let sec = date.getSeconds();
    let min = date.getMinutes();
    let hour = date.getHours();
    clock.innerHTML = `I live in Westmont, IL and the current time is ${hour}:${min}:${sec}.`
    //ternary statement to format the time and set the innerHTML of the clock to a string:
  };
  //use setInterval to call time function with a half second refresh time
  setInterval(time, 500);
});
