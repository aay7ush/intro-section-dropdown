const featuresBtn = document.querySelector(".nav__items .features")
const companyBtn = document.querySelector(".nav__items .company")
const menuBtn = document.querySelector(".menu-open")
const menuCloseBtn = document.querySelector(".menu-close")

featuresBtn.addEventListener("click", () => {
  featuresBtn.classList.toggle("active")
})

companyBtn.addEventListener("click", () => {
  companyBtn.classList.toggle("active")
})

menuBtn.addEventListener("click", () => {
  menuBtn.parentElement.classList.add("mobile-nav")
})

menuCloseBtn.addEventListener("click", () => {
  menuBtn.parentElement.classList.remove("mobile-nav")
})
