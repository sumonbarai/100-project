const sections = document.querySelectorAll(".section");
const menuItems = document.querySelectorAll(".menu-item");

const observerOptions = {
  root: null, // It uses the viewport as the container
  rootMargin: "0px", //making initial margin 0
  threshold: 0.6, // Trigger when 50% of the section is in view port
};

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       // adding visbile class to the visbile section
//       entry.target.classList.add("visible");

//       // Making Menu Item active based on visible section
//       menuItems.forEach((item) => {
//         item.classList.remove("active");
//         if (item.getAttribute("href").substring(1) === entry.target.id) {
//           item.classList.add("active");
//         }
//       });
//       // remove visible class form inactive sections
//     } else {
//       entry.target.classList.remove("visible");
//     }
//   });
// }, observerOptions);

// // Passing each of section to the observer
// sections.forEach((section) => {
//   observer.observe(section);
// });

const observer = new IntersectionObserver((observationEntries) => {
  observationEntries.forEach((entry) => {
    if (entry.isIntersecting) {
      const sectionId = entry.target.id;

      const currentActiveLink = document.querySelector(".menu-item.active");
      currentActiveLink?.classList.remove("active");

      const target = document.querySelector(`.nav a[href="#${sectionId}"]`);

      target.classList.add("active");
      // globalArray.length = 0;
    }
  });
}, observerOptions);

sections.forEach((section) => observer.observe(section));
