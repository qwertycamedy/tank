if (document.querySelector(".tech-sup__accordion")) {
  var accordions = document.querySelectorAll(".tech-sup__accordion");
  accordions.forEach((function (t) {
    t.addEventListener("click", (function (t) {
      var c = t.currentTarget,
        e = document.querySelectorAll(".tech-sup__accordion-content"),
        l = c.querySelector(".tech-sup__accordion-content");
      accordions.forEach((function (t) {
        t != c && t.classList.remove("active")
      })), e.forEach((function (t) {
        t.style.maxHeight = null
      })),
      c.classList.toggle("active"), c.classList.contains("active") ? l.style.maxHeight = l.scrollHeight + "px" : l.style.maxHeight = null
    }))
  }));
}
