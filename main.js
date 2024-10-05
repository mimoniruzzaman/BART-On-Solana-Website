const barsBtn = document.querySelector(".bars-icon");
const navBarAt = document.querySelector("nav");
const sidevarBtn = document.querySelector(".sidevar-btn");
const closeIcon = document.querySelector(".close-icon");

barsBtn.addEventListener("click", startNav);

function startNav() {
  navBarAt.classList.add("mobile-sidebar");
  navBarAt.style.display = "block";
  sidevarBtn.style.display = "inline-block";
  closeIcon.style.display = "block";
}

closeIcon.addEventListener("click", closeNav);
function closeNav() {
  navBarAt.classList.remove("mobile-sidebar");
  sidevarBtn.style.display = "none";
  navBarAt.style.display = "none";
  closeIcon.style.display = "none";
}
