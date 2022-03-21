for (var headerLink = document.querySelectorAll(".header__menu-link"), i = headerLink.length - 1; i >= 0; i--) headerLink[i].href == document.URL && headerLink[i].classList.add("active");

for (var footerLink = document.querySelectorAll(".footer__menu-link"), i = footerLink.length - 1; i >= 0; i--) footerLink[i].href == document.URL && footerLink[i].classList.add("active");
