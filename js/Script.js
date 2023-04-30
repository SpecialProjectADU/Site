//For changing navbar background color on scroll
const navElement = document.querySelector('.navbar');
const logoElement = document.querySelector('img[alt="Zoad"]');
const navElements = document.querySelector('#navElements');
const mainInputField = document.querySelector('#navInputField');
window.addEventListener('scroll', () =>{
  if (window.scrollY >= 400){
    navElement.classList.add('navbar-scrolled');
    logoElement.classList.add('smallLogo');
    logoElement.classList.remove('normalLogo');
    navElements.classList.add('hide');
    mainInputField.classList.remove('hide');
  }
  else{
    navElement.classList.remove('navbar-scrolled');
    logoElement.classList.add('normalLogo');
    logoElement.classList.remove('smallLogo');
    navElements.classList.remove('hide')
    mainInputField.classList.add('hide');
  }
});

// Event Hover effect 
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

// End Event Hover effect 

// Active Link Hover effect
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
      event.target.classList.add("btn-secondary");
      event.target.classList.add("opacity-75");
    });
    link.addEventListener("mouseout", (event) => {
    event.target.classList.remove("btn-secondary");
    event.target.classList.remove("opacity-75");
  });
  });
});

// End Active Link Hover effect


// NOTE: why not just use a bootstrap input-group ?
// Get the button element for the dropdown
var dropdownButton = document.getElementsByClassName("dropbtn")[0];

// When the button is clicked, toggle the visibility of the dropdown content
dropdownButton.addEventListener("click", function() {
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none";
  } else {
    dropdownContent.style.display = "block";
  }
});

/*
$(document).ready(function() {
  // Define the event data
  var eventData = [
    {
      name: "Event 1",
      date: "1 Jan 2024",
      time: "7:00 PM",
      location: "Dubai, UAE",
      img: "event1.jpg"
    },
    {
      name: "Event 2",
      date: "15 Feb 2024",
      time: "6:00 PM",
      location: "Abu Dhabi, UAE",
      img: "event2.jpg"
    },
    {
      name: "Event 3",
      date: "28 Mar 2024",
      time: "8:00 PM",
      location: "Sharjah, UAE",
      img: "event3.jpg"
    }
  ];

  // Loop through the event data and update the HTML
  for (var i = 0; i < eventData.length; i++) {
    var event = eventData[i];
    var $eventElement = $(".event").eq(i);

    $eventElement.find(".event-image").attr("src", event.img);
    $eventElement.find(".event-name").text(event.name);
    $eventElement.find(".event-date-time").text("Date: " + event.date + ", Time: " + event.time);
    $eventElement.find(".event-location").text("Location: " + event.location);
  }
});
*/

/*
// Hide footer on scroll down, show on scroll up
let prevScrollPos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    document.querySelector(".footer").style.bottom = "0";
  } else {
    document.querySelector(".footer").style.bottom = "-100px";
  }
  prevScrollPos = currentScrollPos;
}
*/