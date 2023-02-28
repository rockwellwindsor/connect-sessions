let links = document.querySelectorAll('.jump-link');
for (let l = 0; l < links.length; l++) {
  let link = links[l];
  link.addEventListener("click", function(e) {
    let id      = e.target.getAttribute('data-id');
    let section = document.getElementById(id);
    window.scroll({
      top: section.offsetTop,
      behavior: 'smooth'
    });
  });
}
