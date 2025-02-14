const mobileMenu = document.getElementById("mobile-menu")
const MenuBtn = document.getElementById("menu-btn")
const MenuIcon = document.querySelector(".menu-icon")
const CloseBtn = document.querySelector(".close-icon")


MenuBtn.addEventListener("click",()=>{
    const iExpanded = MenuBtn.getAttribute('aria-expanded') === true
    MenuBtn.setAttribute('aria-expanded', !iExpanded)

    mobileMenu.classList.toggle("hidden")
    MenuIcon.classList.toggle("hidden")
    CloseBtn.classList.toggle("hidden")
})