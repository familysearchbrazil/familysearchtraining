// Navbar
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

// Module gallery
// // Select relevant HTML elements
// const filterButtons = document.querySelectorAll("#filter-buttons button");
// const filterableCards = document.querySelectorAll("#filterable-cards .card");
// // Function to filter cards based on filter buttons
// const filterCards = (e) => {
//     document.querySelector("#filter-buttons .active").classList.remove("active");
//     e.target.classList.add("active");
//     filterableCards.forEach(card => {
//         // show the card if it matches the clicked filter or show all cards if "all" filter is clicked
//         if(card.dataset.name === e.target.dataset.filter || e.target.dataset.filter === "all") {
//             return card.classList.replace("hide", "show");
//         }
//         card.classList.add("hide");
//     });
// }
// filterButtons.forEach(button => button.addEventListener("click", filterCards));


// Video Gallery
let videoList = document.querySelectorAll('.video-list-container .list');

videoList.forEach(vid =>{
   vid.onclick = () =>{
      videoList.forEach(remove =>{remove.classList.remove('active')});
      vid.classList.add('active');
      let src = vid.querySelector('.list-video').src;
      let title = vid.querySelector('.list-title').innerHTML;
      document.querySelector('.main-video-container .main-video').src = src;
      document.querySelector('.main-video-container .main-video').play();
      document.querySelector('.main-video-container .main-vid-title').innerHTML = title;
   };
});


// Views counter
var counterContainer = document.querySelector(".website-counter");
var visitCount = localStorage.getItem("page_view");

// Check if page_view entry is present
if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("page_view", visitCount);
} else {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
}
counterContainer.innerHTML = visitCount;