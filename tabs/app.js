function openTab(event, id) {
  const allBtn = event.target.parentElement.children;
  const currentBtn = event.currentTarget;
  const allContent = document.querySelectorAll(".tab-content");
  const currentTabContent = document.getElementById(id);

  // for remove all active class
  for (let i = 0; i < allBtn.length; i++) {
    allBtn[i].classList.remove("active");
  }
  currentBtn.classList.add("active");

  // for display content
  for (let i = 0; i < allBtn.length; i++) {
    allContent[i].classList.remove("active-content");
  }
  currentTabContent.classList.add("active-content");
}
