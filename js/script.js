// Header scroll effect
window.onscroll = () => {
    let header = document.querySelector("header");
    let headerLogo = document.querySelector(".header-logo");
    let cartIcon = document.querySelector(".cart-icon");

    if (document.documentElement.scrollTop > 100) {
        header.classList.add("header-scroll-effect");
        cartIcon.classList.add("cart-icon-color");
        headerLogo.innerHTML = `<img src="./img/logo-black.png" alt="logo">`;
    } else {
        header.classList.remove("header-scroll-effect");
        cartIcon.classList.remove("cart-icon-color");
        headerLogo.innerHTML = `<img src="./img/logo-white.png" alt="logo">`;
    }
}