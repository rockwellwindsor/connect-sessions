// RECOMMENDED STEPS
//
// Include the JS file in the HTML
//
// SET UP THE NAV BAR
// Get a reference to each section on the page
//  * get it's id value
//  * get it's name from the data-nav attribute
//
// Get a reference to the UL that exists in the HTML
// Create LI elements to add to the nav
//  * the href needs to be the section ID
//  * the name is the name value from the data-nav attribute on the section
//  * add a class to the element
//  * add an event listener to the li
//    * get the id
// Append li elements to the ul
//  * they should have a data-id attrbute that matches the id of the section
//  * their name should be the readable title of the section
//
// HANDLE SCROLL
// Using the sections variable you created earlier get thier top positions on the page and store the values in an array
// Using the window object track the current scroll position
// On scroll check the current scroll position and get the section it is inside by checking what two points it is between
//
let sections  = document.querySelectorAll('section');
let positions = []; // This array will have all the positions of the top of all the section elements as well as the total height of the page
/**
 * 
 * Begin Helper Functions
 * 
*/
// Get the positions of the sections when page loads
for(let i = 0; i < sections.length; i++) { // Loop through the sections
  let pos      = sections[i].getBoundingClientRect().top + window.scrollY; // get the position value of the section's top
  positions[i] = pos;                                                      // add that value to the positions array
  if (i + 1 == sections.length) {                                          // Add the value of the total height so we know if we are inside the last section
    let body            = document.body;                                   // get a reference to the body of the document
    let html            = document.documentElement;                        // get a reference to the HTML element of the document
    let totalPageHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight); // get total height of document
    positions[i + 1]    = totalPageHeight;                                 // add the bottom of the page for last element check
  }
}
console.log(positions)
function removeAllActives() {
  for(let i = 0; i < sections.length; i++) { // Loop through the sections
    let secEl = document.getElementById(sections[i].id);
    let navEl = document.getElementById('li-for-' + sections[i].id);
    secEl.classList.remove('active');
    navEl.classList.remove('active');
  }
}
// console.log(positions);
/**
 * 
 * Begin Main Functions
 * 
*/
// construct the nav
function buildNav() {
  // get a reference to the UL
  let navList = document.getElementById('navbar__list');
  // sections is defined above
  for (let i = 0; i < sections.length; i++) {
    let currentSectionId   = sections[i].id;                      // Get the id of the section
    let currentSectionName = sections[i].getAttribute('data-nav'); // Get the name of the section
    
    let liEl               = document.createElement("li");         // Create an li element to add to the nav
    liEl.innerHTML         = currentSectionName                    // add the name to the li
    liEl.setAttribute("data-id", currentSectionId);
    liEl.setAttribute('id', `li-for-${currentSectionId}`); // 'li-for-section1'                // add the data-id attribute to use
    liEl.classList.add("nav-item");                                // give the li a class
    navList.appendChild(liEl);                                     // append the li to the ul 
    // add an event listener to the li to detect click
    liEl.addEventListener('click', function(e) {
      //
      e.preventDefault();

      e.target.classList.add('active');
      let secId        = e.target.getAttribute("data-id"); // get the section ID value
      let scrollTarget = document.getElementById(secId);
      // make the scrolling smooth
      scrollTarget.scrollIntoView({
        behavior: 'smooth'
      });
    });    
  }
}
// Scroll to anchor ID using scrollTo event
function handleScroll() {
  let liEls       = document.querySelectorAll('.nav-item'); // get all the nav items
  for(let p = 0;p < positions.length; p++) {
    let firstSection  = positions[p]; // 0
    let secondSection = positions[p + 1]; // 1
    let position      = window.pageYOffset; // 375 get the current position

    if (firstSection <= position && secondSection >= position) {
      removeAllActives();
      liEls[p].classList.add('active'); // add it to the current element
      sections[p].classList.add('active'); // add it to the current section
    }
  }
}
/**
 * 
 * Main processses
 * 
**/
buildNav();
window.addEventListener('scroll', handleScroll);

