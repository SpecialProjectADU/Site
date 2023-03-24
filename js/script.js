document.addEventListener("DOMContentLoaded", function () {
  const events = document.querySelectorAll(".event");

  events.forEach((event) => {
    event.addEventListener("focus", () => {
      event.style.width = "40%";
      event.querySelector("img").style.transform = "scale(1.1)";
    });

    event.addEventListener("blur", () => {
      event.style.width = "30%";
      event.querySelector("img").style.transform = "scale(1)";
    });
  });

  // active link
  const linkColor = document.querySelectorAll(".gallery-btn");

  function colorLink() {
    if (linkColor) {
      linkColor.forEach((l) => l.classList.remove("btn-dark"));
      this.classList.add("btn-dark");
    }
  }
  linkColor.forEach((l) => l.addEventListener("click", colorLink));

  linkColor.forEach((link) => {
    link.addEventListener("mouseover", (event) => {
      event.target.classList.add("btn-success");
      event.target.classList.add("opacity-75");
      setTimeout(() => {
        event.target.classList.remove("btn-success");
        event.target.classList.remove("opacity-75");
      }, 600);
    });
  });
});
