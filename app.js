const element = document.querySelector('#logo');

window.addEventListener('scroll', function() {
  if (window.scrollY >= 620) {
    element.style.position = 'relative';
    element.style.width = '91.5%'
  }
  else{
    element.style.position = 'fixed'
  }
});
// !!!!!!!!!!!!!!!!!!!


// ! slides
let slideIndex = 0;
showSlides();
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); 
}
//! end of slide


// ! opacity text header
const text = document.querySelector('#div-for-b-s')

window.addEventListener('scroll', function() {
  if (window.scrollY >= 240) {
    text.style.opacity = '0.3';
  }
  else{
    text.style.opacity = '1';
  }
  
});
//! end of opacity text header

// ! slide 2
let slideIndextwo = 0;
showSlidestwo();
function showSlidestwo() {
  let i;
  let slidertwo = document.getElementsByClassName("slide-two");
  for (i = 0; i < slidertwo.length; i++) {
    slidertwo[i].style.display = "none";
  }
  slideIndextwo++;
  if (slideIndextwo > slidertwo.length) {slideIndextwo = 1}
  slidertwo[slideIndextwo-1].style.display = "block";
  setTimeout(showSlidestwo, 4000); 
}
// ! end of slide 2

//! slide 3
let slideIndexthree = 0;
showSlidesthree();
function showSlidesthree() {
  let i;
  let sliderthree = document.getElementsByClassName("slide-three");
  for (i = 0; i < sliderthree.length; i++) {
    sliderthree[i].style.display = "none";
  }
  slideIndexthree++;
  if (slideIndexthree > sliderthree.length) {slideIndexthree = 1}
  sliderthree[slideIndexthree-1].style.display = "block";
  setTimeout(showSlidesthree, 4000); 
}
// ! end of slide 3


// ! transition coming
const boxes =  document.querySelectorAll(".fadein")

const checkBoxes = () => {
    const triggerBottom = (window.innerHeight/5) * 4;
    boxes.forEach((box) => {
      const boxTop = box.getBoundingClientRect().top;
      if (boxTop < triggerBottom) box.classList.add("show");
    })
}
window.addEventListener("scroll", checkBoxes);
checkBoxes()
//! end of transition coming

// ! zoom pllugins
const scales =  document.querySelectorAll(".scalein")

const checkscales = () => {
    const triggerBottom2 = (window.innerHeight/5) * 4;
    scales.forEach((scale) => {
      const boxTop2 = scale.getBoundingClientRect().top;
      if (boxTop2 < triggerBottom2) scale.classList.add("zoom");
    })
}
window.addEventListener("scroll", checkscales);
checkscales()
//! end of zoom plugins

// !!!!!!!!!!!!!!!!!  select preview
const menu = [
  {
    id: 1,
    category: "Niche",
    img: "./image-/fake-preview.jpg",
    desc: `Original`,
    link: "http://demo.archiwp.com/",
  },
  {
    id: 2,
    category: "Niche",
    img: "./image-/preview(2).jpg",
    desc: `Garden`,
    link: "http://demo.archiwp.com/archi-garden/",
  },
  {
   id: 3,
   category: "Niche",
   img: "./image-/preview(3).jpg",
   desc: `Industry`,
   link: "http://demo.archiwp.com/archi-industry/",
  },
   {
   id: 4,
   category: "Dark-Scheme",
   img: "./image-/preview(4).jpg",
   desc: `Studio`,
   link: "http://demo.archiwp.com/studio-version/",
  },
  {
   id: 5,
   category: "Dark-Scheme",
   img: "./image-/preview(6).jpg",
   desc: `Before After`,
   link: "http://demo.archiwp.com/multipurpose-dark/home-before-after/",
  },
   {
   id: 6,
   category: "Dark-Scheme",
   img: "./image-/preview(7).jpg",
   desc: `Masonry`,
   link: "http://demo.archiwp.com/index-masonry-black/",
  },
  {
   id: 7,
   category: "One-Page",
   img: "./image-/preview(8).jpg",
   desc: `Landing Page`,
   link: "http://demo.archiwp.com/landing-parallax/",
  },
  {
   id: 8,
   category: "One-Page",
   img: "./image-/preview(9).jpg",
   desc: `Modern`,
   link: "http://demo.archiwp.com/homepage-new/",
  },
  {
   id: 9,
   category: "One-Page",
   img: "./image-/preview(10).jpg",
   desc: `Snowy`,
   link: "http://demo.archiwp.com/home-snowy/",
  },
  {
   id: 10,
   category: "Light-Scheme",
   img: "./image-/preview(11).jpg",
   desc: `Original Light`,
   link: "http://demo.archiwp.com/light-version/",
  },
  {
   id: 11,
   category: "Light-Scheme",
   img: "./image-/preview(12).jpg",
   desc: `Landing Page Light`,
   link: "http://demo.archiwp.com/light-version/landing-parallax/",
  },
  {
   id: 12,
   category: "One-Page",
   img: "./image-/preview(13).jpg",
   desc: `Onepage`,
   link: "http://demo.archiwp.com/onepage-version/",
  },
  {
   id: 13,
   category: "Custom-Navigation",
   img: "./image-/preview(14).jpg",
   desc: `Slidebar Dark`,
   link: "http://demo.archiwp.com/side-navigation-dark/",
  },
  {
   id: 14,
   category: "Custom-Navigation",
   img: "./image-/preview(15).jpg",
   desc: `Slidebar Light`,
   link: "http://demo.archiwp.com/side-navigation-light/",
  },
   {
   id: 15,
   category: "Custom-Navigation",
   img: "./image-/preview(16).jpg",
   desc: `Product Landing`,
   link: "http://demo.archiwp.com/landing-product/",
  },
  ];
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <a href="${item.link}"><img src=${item.img} alt="" class="photo" /></a>
          <br><br>
            <p class="item-text">
              ${item.desc}
            </p>
            <br><br>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["Show-All"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "Show-All") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}
//! end of select review


// ! preloader
const preloader = document.querySelector(".preloader");

window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});