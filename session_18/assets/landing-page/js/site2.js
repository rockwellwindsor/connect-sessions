// Get the positions of the sections when page loads
let sections  = document.getElementsByTagName('section');
let positions = []; // This array will have all the positions of the top of all the section elements as well as the total height of the page

for(let i = 0; i < sections.length; i++) { // Loop through the sections
  let pos      = sections[i].getBoundingClientRect().top + window.scrollY; // get the position value of the section's top
  console.log("Section : " + sections[i].id + " TOP : " + pos);

  positions[i] = pos;                                                      // add that value to the positions array
  if (i + 1 == sections.length) {                                          // Add the value of the total height so we know if we are inside the last section
    let body            = document.body;                                   // get a reference to the body of the document
    let html            = document.documentElement;                        // get a reference to the HTML element of the document
    let totalPageHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight); // get total height of document
    positions[i + 1]    = totalPageHeight;                                 // add the bottom of the page for last element check
  }
}
// construct the nav
function buildNav() {
  // get a reference to the UL
  let navList = document.getElementById('navbar__list');
  // sections is defined above
  for (let i = 0; i < sections.length; i++) {
    let currentSectionId   = sections[i].id;                       // Get the id of the section
    let currentSectionName = sections[i].getAttribute('data-nav'); // Get the name of the section
    let liEl               = document.createElement("li");           // Create an li element to add to the nav
    liEl.innerHTML         = currentSectionName                   // add the name to the li
    liEl.setAttribute("data-id", currentSectionId);                  // add the data-id attribute to use
    liEl.classList.add("nav-item");                               // give the li a class
    navList.appendChild(liEl);                                     // append the li to the ul 
    // add an event listener to the li to detect click
    liEl.addEventListener('click', function(e) {
      //
      e.preventDefault();
      e.target.classList.add('active');
      let secId        = e.target.getAttribute("data-id"); // get the section ID value
      let scrollTarget = document.getElementById(secId);
      // make the scrolling smooth
      window.scroll({
        top: scrollTarget.offsetTop,
        behavior: 'smooth'
      });
    });    
  }
}
// Scroll to anchor ID using scrollTo event
function handleScroll() {
  let liEls = document.querySelectorAll('.nav-item'); // get all the nav items
  let position = window.pageYOffset;
  for(let p = 0;p < positions.length; p++) {
    let firstSection  = positions[p]; // 0
    let secondSection = positions[p + 1]; // 1
    // let position      = window.pageYOffset; // 375 get the current position
    if (firstSection <= position && secondSection >= position) {
      liEls[p].classList.add('active'); // add it to the current element
      sections[p].classList.add('active'); // add it to the current section
    }
  }
}
buildNav();
window.addEventListener('scroll', handleScroll);







